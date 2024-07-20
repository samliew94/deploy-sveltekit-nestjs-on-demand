import { JwtService } from "@nestjs/jwt";
import {
    OnGatewayConnection,
    OnGatewayDisconnect,
    SubscribeMessage,
    WebSocketGateway,
} from "@nestjs/websockets";
import { GameService } from "src/game/game.service";

@WebSocketGateway({ cors: true })
export class SocketGatewayGateway
    implements OnGatewayConnection, OnGatewayDisconnect
{
    constructor(
        private readonly gameService: GameService,
        private readonly jwtService: JwtService
    ) {}

    handleConnection(socket: any, ..._: any[]) {
        console.log("added user...");

        let verify = undefined;

        try {
            console.log(
                "verify secret:token",
                process.env.JWT_SECRET,
                socket.handshake.auth.token
            );

            verify = this.jwtService.verify(socket.handshake.auth.token, {
                secret: process.env.JWT_SECRET,
            });
        } catch (error: any) {
            console.warn(
                "token verication failed",
                error?.message,
                "Disconnecting",
                socket.id
            );
            socket.disconnect();
            return;
        }

        this.gameService.addUser(socket, verify.username);
        this.broadcast();
    }

    handleDisconnect(socket: any) {
        console.log("disconnected", socket.id);
        this.gameService.removeUser(socket);
        this.broadcast();
    }

    private decodeToken(token: string) {}

    private broadcast() {
        const users = this.gameService.getUsers();
        const lastUser = this.gameService.getLastUser();

        let allPlayers = [];

        for (let i = 0; i < users.length; i++) {
            const { username, rolls } = users[i];

            allPlayers.push({
                username: username,
                score: rolls.reduce((a, b) => a + b, 0),
            });
        }

        for (let i = 0; i < users.length; i++) {
            const { socket } = users[i];

            socket.emit("data", {
                lastRoll: lastUser?.username,
                users: allPlayers,
                rolls: users[i].rolls,
            });
        }
    }

    @SubscribeMessage("roll")
    handleMessage(socket: any, _: any) {
        this.gameService.roll(socket);
        this.broadcast();
    }
}

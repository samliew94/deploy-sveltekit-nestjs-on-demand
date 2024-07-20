import { Module } from "@nestjs/common";
import { GameModule } from "src/game/game.module";
import { SocketGatewayGateway } from "./socket-gateway.gateway";

@Module({
    imports: [GameModule],
    providers: [SocketGatewayGateway],
})
export class SocketGatewayModule {}

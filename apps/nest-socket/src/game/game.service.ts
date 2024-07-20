import { Injectable } from "@nestjs/common";

export interface User {
    socket: any;
    username: string;
    rolls: number[];
}

@Injectable()
export class GameService {
    private readonly users: User[] = [];
    private lastUser: User;

    addUser(socket: any, username: string) {
        const user: User = {
            socket,
            username,
            rolls: [0, 0, 0],
        };

        this.users.push(user);

        console.log(
            "added user",
            user.socket.id,
            user.username,
            "total users",
            this.users.length
        );
    }

    removeUser(socket: any) {
        const user = this.findUser(socket);

        if (!user) {
            console.warn("failed to remove user - not found", socket.id);
            return;
        }

        this.users.splice(this.users.indexOf(user), 1);

        console.log("removed user", user.socket.id, user.username);
    }

    getUsers() {
        return this.users;
    }

    findUser(socket: any) {
        return this.users.find((user) => user.socket.id === socket.id);
    }

    roll(socket: any) {
        const user = this.findUser(socket);

        if (!user) {
            console.warn("failed to roll as user not found", socket.id);
            return;
        }

        for (let i = 0; i < 3; i++) {
            user.rolls[i] = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
        }

        this.lastUser = user;
    }

    getLastUser() {
        return this.lastUser;
    }
}

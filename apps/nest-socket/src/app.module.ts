import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { GameModule } from "./game/game.module";
import { SocketGatewayModule } from "./socket-gateway/socket-gateway.module";

@Module({
    imports: [
        SocketGatewayModule,
        GameModule,
        ConfigModule.forRoot(),
        JwtModule.register({
            global: true,
            secret: process.env.JWT_SECRET,
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}

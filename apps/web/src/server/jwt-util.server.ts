import { env } from "$env/dynamic/private";
import jwt from "jsonwebtoken";

export function signToken(payload: any) {
    return jwt.sign(payload, env.JWT_SECRET);
}

export function verifyToken(token: string) {
    return jwt.verify(token, env.JWT_SECRET);
}

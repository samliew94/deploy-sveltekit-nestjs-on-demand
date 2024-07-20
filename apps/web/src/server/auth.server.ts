import type { Cookies } from "@sveltejs/kit";
import type { JwtPayload } from "jsonwebtoken";
import { signToken, verifyToken } from "./jwt-util.server";

export function isAuthenticated(cookies: Cookies) {
    const token = cookies.get("token");

    try {
        if (!token) {
            throw new Error("token not found");
        }
        return verifyToken(token) as JwtPayload;
    } catch (error: any) {
        return undefined;
    }
}

export function login(username: string) {
    return signToken({ username });
}

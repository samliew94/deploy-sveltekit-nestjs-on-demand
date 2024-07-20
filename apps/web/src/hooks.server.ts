import { redirect, type Handle } from "@sveltejs/kit";
import { isAuthenticated } from "./server/auth.server";
export const handle: Handle = async ({ event, resolve }) => {
    const {
        cookies,
        url: { pathname },
        locals,
    } = event;

    const verify = isAuthenticated(cookies);

    if (!verify) {
        // allowing unauthenticated users to access "/" & "/login"
        if (pathname === "/" || pathname === "/login") {
            return await resolve(event);
        } else {
            return redirect(302, "/login");
        }
    }

    locals.user = {
        username: verify.username,
        token: cookies.get("token")!,
    };

    if (pathname === "/login") {
        return redirect(302, "/home");
    }

    return await resolve(event);
};

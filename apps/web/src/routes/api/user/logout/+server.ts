export async function POST({ cookies }) {
    try {
        cookies.delete("token", { path: "/", secure: false, sameSite: "lax" });
        return new Response();
    } catch (error: any) {
        return new Response(error?.message, { status: 400 });
    }
}

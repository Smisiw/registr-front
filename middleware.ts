import {NextRequest} from "next/server";


export default function middleware(request: NextRequest){
    const pathname = new URL(request.url).pathname
    if (!request.cookies.get("authToken") && pathname != "/auth"){
        return Response.redirect(new URL('/auth', request.url))
    }
    if (request.cookies.get("authToken") && (pathname == "/auth" || pathname == "/")){
        return Response.redirect(new URL('/patients', request.url))
    }
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
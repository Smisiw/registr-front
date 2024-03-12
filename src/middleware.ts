import {NextRequest} from "next/server";
import axios from "axios";


export default function middleware(request: NextRequest){

}

export const config = {
    matcher: ['/((?!auth|api|_next/static|_next/image|.*\\.png$).*)'],
}
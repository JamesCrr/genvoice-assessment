import { NextResponse } from "next/server";

export async function middleware(request) {
  const session = request.cookies.get("session")?.value;

  if (!session && (request.nextUrl.pathname.startsWith("/home") || request.nextUrl.pathname.startsWith("/setings"))) {
    return Response.redirect(new URL("/", request.url));
  }

  const response = NextResponse.next();
  return response;
}

export const config = {
  /*
   * Apply middleware to all pages except:
   * 1. /api/* (exclude all API routes)
   * 3. /_next/* (exclude Next.js assets, e.g., /_next/static/*)
   */
  matcher: "/((?!api|_next/static|_next/image).*)",
};

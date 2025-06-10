// 📁 Place this file at: project-root/middleware.ts
import { NextRequest, NextResponse } from "next/server";

// Define protected and public routes
const protectedRoutes = ["/v1"];
const publicRoutes = ["/", "/auth/sign-in", "/auth/sign-up"];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get("authtoken")?.value;
  console.log(token)

  // Allow public routes without authentication
  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  // Check if the route is protected
  const isProtected = protectedRoutes.some((path) => pathname.startsWith(path));

  if (isProtected) {
    // Redirect to login if no token
    if (!token) {
      return NextResponse.redirect(new URL("/auth/sign-in", req.url));
    }

    // Validate JWT token
    try {
      const tokenData = decodeJWTPayload(token);

      if (tokenData.Role === "Guest") {
        return NextResponse.redirect(new URL("/", req.url));
      }
      return NextResponse.next();
    } catch (err) {
      console.error("Invalid token for:", pathname, err);
      return NextResponse.redirect(new URL("/auth/sign-in", req.url));
    }
  }

  return NextResponse.next();
}

// Restrict middleware to specific routes
export const config = {
  matcher: ["/v1/:path*"],
};


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
function decodeJWTPayload(token: string): any {
  const base64Url = token.split(".")[1]; // Get payload part
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");

  // Decode Base64 string into JSON
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map((char) => {
        return "%" + char.charCodeAt(0).toString(16).padStart(2, "0");
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}

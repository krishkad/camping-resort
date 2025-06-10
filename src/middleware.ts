import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("authtoken")?.value;

  // Log for debugging
  console.log("TOKEN in middleware:", token);

  if (!token) {
    return NextResponse.redirect(new URL("/auth/sign-in", req.url));
  }

  try {
    const tokenData = decodeJWTPayload(token);

    if (tokenData.Role === "Guest") {
      return NextResponse.redirect(new URL("/", req.url));
    }

    return NextResponse.next();
  } catch (err) {
    console.error("JWT decode error:", err);
    return NextResponse.redirect(new URL("/auth/sign-in", req.url));
  }
}

// Only apply to /v1/** paths
export const config = {
  matcher: ["/v1/:path*"],
};

function decodeJWTPayload(token: string): any {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map((char) => "%" + char.charCodeAt(0).toString(16).padStart(2, "0"))
      .join("")
  );

  return JSON.parse(jsonPayload);
}

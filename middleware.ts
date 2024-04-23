import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware

const isProtectedRoute = createRouteMatcher(["/dashboard"]);

export default clerkMiddleware(
  (auth, req) => {
    if (auth().userId && req.nextUrl.pathname === "/") {
      const dashboardUrl = new URL("/dashboard", req.url);
      return NextResponse.redirect(dashboardUrl);
    }

    if (isProtectedRoute(req)) auth().protect();
  },
  { debug: true }
);
// console.log("hello");
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

import { headers } from "next/headers";

import { NextResponse } from "next/server";

import { auth } from "./lib/auth";

export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const isDashboardRoute = request.nextUrl.pathname.startsWith("/dashboard");

  const isMyRequestsRoute = request.nextUrl.pathname.startsWith("/my-requests");

  const isAddPetRoute = request.nextUrl.pathname.startsWith("/add-pet");

  if ((isDashboardRoute || isMyRequestsRoute || isAddPetRoute) && !session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/my-requests/:path*", "/add-pet/:path*"],
};

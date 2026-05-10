import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale } from "@/lib/i18n";

export function proxy(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const lang = request.nextUrl.searchParams.get("lang");
  const locale = lang && isLocale(lang) ? lang : defaultLocale;

  requestHeaders.set("x-portfolio-locale", locale);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/"],
};

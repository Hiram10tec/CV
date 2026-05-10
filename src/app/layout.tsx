import type { Metadata } from "next";
import { headers } from "next/headers";
import { defaultLocale, getPortfolioContent, isLocale, type Locale } from "@/data/portfolio";
import "./globals.css";

async function getRequestLocale(): Promise<Locale> {
  const requestHeaders = await headers();
  const locale = requestHeaders.get("x-portfolio-locale");

  return locale && isLocale(locale) ? locale : defaultLocale;
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const copy = getPortfolioContent(locale);

  return {
    title: copy.metadata.title,
    description: copy.metadata.description,
  };
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const locale = await getRequestLocale();

  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}

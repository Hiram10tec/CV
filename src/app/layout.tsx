import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hiram Mendoza | Portfolio",
  description: "Personal portfolio for Hiram Mendoza - computer engineering student and full stack developer.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

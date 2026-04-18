import type { Metadata } from "next";
import "./globals.css";
import { outfit, cinzelGoogle, cigra, cinzelLocal } from "./fonts";

export const metadata: Metadata = {
  title: "Wedding Invitation | Aslaha & Ameerali",
  description: "Wedding invitation of Aslaha Thasni and Ameerali",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${cinzelGoogle.variable} ${cigra.variable} ${cinzelLocal.variable} font-outfit antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

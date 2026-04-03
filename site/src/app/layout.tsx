import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GTM Foundations",
  description: "See how focused GTM foundations change everything downstream.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

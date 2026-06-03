import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Red Deer Doula Association | Doula Support in Central Alberta",
  description:
    "Red Deer Doula Association connects families, doulas, and community members with information about birth, postpartum, fertility, loss, and end-of-life doula support across Red Deer and Central Alberta.",
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
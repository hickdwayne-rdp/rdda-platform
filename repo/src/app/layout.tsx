import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Red Deer Doula Association",
  description:
    "A renewed digital platform for compassionate doula support, education, resources, events, and lifecycle care across Central Alberta.",
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
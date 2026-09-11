import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pay & Review",
  description: "Chase late invoices and collect reviews — on autopilot.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

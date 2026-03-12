import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BCSSK – Bhaurao Chavan Sahakari Sakhar Karkhana, Nanded",
  description:
    "Official website of Bhaurao Chavan Sahakari Sakhar Karkhana Ltd., Nanded — Tenders, Notices, Projects and Careers.",
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

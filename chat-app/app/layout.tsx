// app/layout.tsx
import type { Metadata } from "next";
import './globals.css';
import ClientLayout from "./ClientLayout";

export const metadata: Metadata = {
  title: "Ayna Chat",
  description: "A chat application built with Next.js and Socket.io",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
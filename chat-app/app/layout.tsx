// app/layout.tsx
import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";
import ClientLayout from "./ClientLayout";

const inter = localFont({
  src: '../public/fonts/Inter-Variable.woff2',
  variable: '--font-inter',
});

const jetbrainsMono = localFont({
  src: '../public/fonts/JetBrainsMono-Variable.woff2',
  variable: '--font-mono',
});

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
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
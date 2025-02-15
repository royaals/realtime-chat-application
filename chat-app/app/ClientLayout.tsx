// app/ClientLayout.tsx
"use client";
import { ThemeProvider } from "next-themes";
import { ChatProvider } from "../context/ChatContext";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ChatProvider>{children}</ChatProvider>
    </ThemeProvider>
  );
}
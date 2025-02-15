"use client"

import { ThemeProvider } from "../components/ui/theme-provider"


export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {children}
      
    </ThemeProvider>
  )
}
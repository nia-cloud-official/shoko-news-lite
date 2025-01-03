"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

export { useTheme }

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      themes={['light', 'dark', 'system', 'sepia', 'high-contrast', 'forest', 'ocean', 'aurora', 'volcanic', 'cosmos', 'desert', 'rose']}
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
} 
"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ReactNode } from "react";

type ThemeProviderProps = {
  children: ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="light" enableSystem>
      {children}
    </NextThemesProvider>
  );
}

export default ThemeProvider;


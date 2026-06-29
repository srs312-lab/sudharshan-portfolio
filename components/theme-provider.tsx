"use client";

import React from "react";
import { Button } from "@/components/ui/button";

type ThemeContextValue = {
  isDarkMode: boolean | null;
  toggleTheme: () => void;
};

const ThemeContext = React.createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = React.useState<boolean | null>(null);

  React.useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const savedTheme = window.localStorage.getItem("portfolio-theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

      setIsDarkMode(savedTheme ? savedTheme === "dark" : prefersDark);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  React.useEffect(() => {
    if (isDarkMode === null) {
      return;
    }

    document.documentElement.classList.toggle("dark", isDarkMode);
    document.documentElement.style.colorScheme = isDarkMode ? "dark" : "light";
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((current) => {
      const activeTheme = current ?? document.documentElement.classList.contains("dark");
      const next = !activeTheme;
      window.localStorage.setItem("portfolio-theme", next ? "dark" : "light");
      return next;
    });
  };

  return <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export function ThemeToggle() {
  const theme = React.useContext(ThemeContext);

  if (!theme) {
    return null;
  }

  return (
    <Button
      aria-label="Toggle dark mode"
      className="rounded-full border-slate-200 bg-white/70 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:bg-slate-800"
      onClick={theme.toggleTheme}
      type="button"
      variant="outline"
    >
      {theme.isDarkMode === null ? "Theme" : theme.isDarkMode ? "Light" : "Dark"}
    </Button>
  );
}

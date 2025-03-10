"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className="inline-flex bg-violet-200 dark:bg-neutral-800 p-3 items-center justify-center whitespace-nowrap text-md rounded-xl cursor-pointer"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? (
        <Sun className="h-6 w-6" />
      ) : (
        <Moon className="h-6 w-6" />
      )}

      <span className="sr-only">Toggle theme</span>
    </div>
  );
}

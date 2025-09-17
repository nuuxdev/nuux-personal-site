"use client";
import { useEffect, useState } from "react";

export default function Header() {
  const [darkMode, setDarkMode] = useState<boolean>();
  useEffect(() => {
    let resolvedTheme: "dark" | "light";

    if (darkMode === undefined) {
      const cookieValue = document.cookie
        .split(";")
        .map((c) => c.trimStart())
        .find((c) => c.startsWith("nuux-user-mode="))
        ?.split("=")[1];
      if (cookieValue) {
        resolvedTheme = cookieValue as "dark" | "light";
      } else {
        resolvedTheme = window.matchMedia("(prefers-color-scheme: dark)")
          .matches
          ? "dark"
          : "light";
      }
      setDarkMode(resolvedTheme === "dark");
    } else {
      resolvedTheme = darkMode ? "dark" : "light";
    }

    document.cookie = `nuux-user-mode=${resolvedTheme}; path=/; max-age=31536000`;
    document.documentElement.setAttribute("data-theme", resolvedTheme);
  }, [darkMode]);

  return (
    <header>
      <div className="nav_container">
        <h3>NuuX</h3>
        <button onClick={() => setDarkMode(!darkMode)}>
          light-dark&#40;&#41;
        </button>
      </div>
    </header>
  );
}

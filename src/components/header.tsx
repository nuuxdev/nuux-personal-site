"use client";
import { useEffect, useState } from "react";

export default function Header() {
  const [darkMode, setDarkMode] = useState<boolean>();
  useEffect(() => {
    if (darkMode === undefined) {
      const savedMode = localStorage.getItem("nuux-user-mode");
      if (savedMode === null) {
        const prefersDarkMode = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        setDarkMode(prefersDarkMode);
      } else {
        setDarkMode(savedMode === "dark" ? true : false);
      }
      return;
    }
    const html = document.documentElement;
    html.setAttribute("data-theme", darkMode ? "dark" : "light");
    localStorage.setItem("nuux-user-mode", darkMode ? "dark" : "light");
  }, [darkMode]);
  return (
    <header className="dark">
      <h3>NuuX</h3>
      <button onClick={() => setDarkMode(!darkMode)}>
        light-dark&#40;&#41;
      </button>
    </header>
  );
}

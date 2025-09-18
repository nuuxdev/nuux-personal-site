"use client";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [darkMode, setDarkMode] = useState<boolean>();
  const modeChangeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    let resolvedTheme: "dark" | "light";
    const cookieValue = document.cookie
      .split(";")
      .map((c) => c.trimStart())
      .find((c) => c.startsWith("nuux-user-mode="))
      ?.split("=")[1];
    if (cookieValue) {
      resolvedTheme = cookieValue as "dark" | "light";
    } else {
      resolvedTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    setDarkMode(resolvedTheme === "dark");
    document.cookie = `nuux-user-mode=${resolvedTheme}; path=/; max-age=31536000`;
    document.documentElement.setAttribute("data-theme", resolvedTheme);

    if (resolvedTheme === "dark")
      modeChangeRef.current?.classList.add("dark_mode");
  }, []);

  const handleModeChange = () => {
    const newTheme = darkMode ? "light" : "dark";
    document.cookie = `nuux-user-mode=${newTheme}; path=/; max-age=31536000`;
    document.documentElement.setAttribute("data-theme", newTheme);
    setDarkMode(!darkMode);
    if (modeChangeRef !== null) {
      if (darkMode) modeChangeRef.current?.classList.remove("dark_mode");
      else modeChangeRef.current?.classList.add("dark_mode");
    }
  };

  return (
    <header>
      <div className="nav_container">
        <h3>
          Nuu
          <span className="x_img_container">
            <img src="/nuux-logo.svg" alt="X" />
          </span>
        </h3>
        <button
          ref={modeChangeRef}
          className="icon_button"
          onClick={handleModeChange}
        >
          <svg width="36" height="36" viewBox="0 0 36 36">
            <circle id="celestial_base" cx="18" cy="18" />
            <circle id="celestial_rays" cx="18" cy="18" />
          </svg>
        </button>
      </div>
    </header>
  );
}

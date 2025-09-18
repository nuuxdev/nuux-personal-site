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

  const handleModeChange = () => {
    setDarkMode(!darkMode);
    // const celestial_rays = document.getElementById("celestial_rays");
    // const celestial_base = document.getElementById("celestial_base");
    // if (celestial_rays && celestial_base) {
    //   celestial_rays.setAttribute("r", "12");
    //   celestial_base.setAttribute("r", "8");
    // }
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
        <button className="icon_button" onClick={handleModeChange}>
          <svg width="36" height="36" viewBox="0 0 36 36">
            <circle id="celestial_base" cx="18" cy="18" />
            <circle id="celestial_rays" cx="18" cy="18" />
          </svg>
        </button>
      </div>
    </header>
  );
}

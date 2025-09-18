"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Header() {
  const [darkMode, setDarkMode] = useState<boolean>();
  const modeChangeTlRef = useRef<gsap.core.Timeline | null>(null);
  const hoverTlRef = useRef<gsap.core.Timeline | null>(null);
  useGSAP(() => {
    modeChangeTlRef.current = gsap
      .timeline({ paused: true })
      .to("#celestial_rays", {
        fill: "var(--background)",
        strokeWidth: 0,
        strokeDasharray: "40px 0px",
        cx: 26,
        cy: 12,
      })
      .to(
        "#celestial_base",
        {
          r: 14,
        },
        "<"
      );
    hoverTlRef.current = gsap
      .timeline({ paused: true })
      .to(
        "#celestial_rays",
        { "--radius": 12, duration: 0.3, ease: "power1.out" },
        0
      );
  });
  useEffect(() => {
    let resolvedTheme: "dark" | "light";

    if (darkMode === undefined) {
      const cookieValue = document.cookie
        .split(";")
        .map((c) => c.trimStart())
        .find((c) => c.startsWith("nuux-user-mode="))
        ?.split("=")[1];
      if (cookieValue) {
        modeChangeTlRef.current?.reversed(cookieValue !== "dark");
        modeChangeTlRef.current?.progress(cookieValue === "dark" ? 1 : 0);
        resolvedTheme = cookieValue as "dark" | "light";
      } else {
        resolvedTheme = window.matchMedia("(prefers-color-scheme: dark)")
          .matches
          ? "dark"
          : "light";
        modeChangeTlRef.current?.reversed(resolvedTheme !== "dark");
        modeChangeTlRef.current?.progress(resolvedTheme === "dark" ? 1 : 0);
      }
      setDarkMode(resolvedTheme === "dark");
    } else {
      modeChangeTlRef.current?.reversed(!darkMode);
      resolvedTheme = darkMode ? "dark" : "light";
    }
    document.cookie = `nuux-user-mode=${resolvedTheme}; path=/; max-age=31536000`;
    document.documentElement.setAttribute("data-theme", resolvedTheme);
  }, [darkMode]);

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
          className="icon_button"
          onClick={() => {
            console.log(modeChangeTlRef.current?.reversed());
            console.log(modeChangeTlRef.current?.progress());
            modeChangeTlRef.current?.reverse();
            setDarkMode(!darkMode);
          }}
          onMouseEnter={() => hoverTlRef.current?.play()}
          onMouseLeave={() => hoverTlRef.current?.reverse()}
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

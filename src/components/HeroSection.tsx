import Link from "next/link";
import {
  CssIcon,
  FigmaIcon,
  ReactIcon,
  TypescriptIcon,
  VueIcon,
} from "./ToolIcons";

export default function HeroSection() {
  return (
    <section className="hero_section breakout">
      <h1>
        I am <span id="custom_emoji">NuuX🕶️</span>
      </h1>
      <p style={{ textAlign: "center" }}>
        a computer science graduate 🎓
        <br />
        lover and hater of CSS 💘
        <br />
        fallen nerd, in the deep sea of creative web development 🤓
        <br />
      </p>

      <div
        style={{
          display: "flex",
          gap: "3rem",
          justifyContent: "center",
          marginBlock: "3rem",
        }}
      >
        <FigmaIcon />
        <ReactIcon />
        <VueIcon />
        <CssIcon />
        <TypescriptIcon />
      </div>
      <Link href="#projects" style={{ alignSelf: "center" }}>
        <button tabIndex={-1}>
          Straight to my projects <span className="button_icon_emoji">⛷️</span>
        </button>
      </Link>
      <svg
        className="hero_svg"
        viewBox="0 0 428 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" className="gradient start" />
            <stop offset="80%" className="gradient end" />
          </linearGradient>
        </defs>

        <path
          d="M1.5 1L50.2294 85.4018C75.7088 129.533 139.407 129.533 164.887 85.4017L168.448 79.2333C188.523 44.4629 238.709 44.463 258.784 79.2333L262.345 85.4018C287.825 129.533 351.523 129.533 377.003 85.4017L425.732 1"
          stroke="url(#gradientStroke)"
        />
        <path
          className="offset_path"
          d="M1.5 1L50.2294 85.4018C75.7088 129.533 139.407 129.533 164.887 85.4017L168.448 79.2333C188.523 44.4629 238.709 44.463 258.784 79.2333L262.345 85.4018C287.825 129.533 351.523 129.533 377.003 85.4017L425.732 1"
        />
      </svg>
    </section>
  );
}

import Header from "@/components/header";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main className="content_grid">
        <section className="hero_section breakout">
          <h1>
            I am <span id="custom_emoji">NuuX🕶️</span>
          </h1>
          <p style={{ textAlign: "center" }}>
            This is my personal site. Yes, there&apos;s not much to see,😆 BUT
            it&apos;s a work in progress. U know what makes it different from my
            other portfolio projects? It&apos;s not empty. It&apos;s out
            there... damn right And it is Goddamn responsive 😎 And that&apos;s
            the point.
          </p>
          <h3>
            <span>NB</span>: It will be different next time you visit. Promise.
            Await. But not All 😁
          </h3>
          <Link href="#projects" style={{ alignSelf: "center" }}>
            <button tabIndex={-1}>
              Straight to my projects{" "}
              <span className="button_icon_emoji">⛷️</span>
            </button>
          </Link>
          <svg
            className="hero_svg"
            viewBox="0 0 428 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="gradientStroke"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
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
        <section id="projects" className="fullscreen">
          <h1>Projects</h1>
          <p style={{ textAlign: "center" }}>
            My Amazing Projects will be listed here
          </p>
          <h3>
            <span>Mobile</span>😁
          </h3>
          <div className="mobile_projects_bg" />
        </section>
        <section id="another" style={{ height: "100vh" }}>
          <h1>Another</h1>
          <p style={{ textAlign: "center" }}>
            My Amazing another things will be listed here
          </p>
          <h3>
            <span>Soon</span>😁
          </h3>
        </section>
        <footer>
          <div className="socials_wrapper">
            <Link href="https://github.com/nuuxdev" target="_blank">
              <img src="/socials/github.png" alt="github" />
            </Link>
            <Link href="https://linkedin.com/in/nuuxdev" target="_blank">
              <img src="/socials/linkedin.png" alt="linkedin" />
            </Link>
            <Link
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
            >
              <img
                id="rick_roll_icon"
                src="/socials/youtube.png"
                alt="youtube"
              />
            </Link>
          </div>
        </footer>
      </main>
    </>
  );
}

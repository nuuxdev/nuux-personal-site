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
        </section>
        <section
          id="projects"
          className="fullscreen"
          style={{ height: "100vh" }}
        >
          <h1>Projects</h1>
          <p style={{ textAlign: "center" }}>
            My Amazing Projects will be listed here
          </p>
          <h3>
            <span>Soon</span>😁
          </h3>
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
      </main>
    </>
  );
}

import Header from "@/components/header";
import ProjectsButton from "@/components/projectsButton";

export default function Home() {
  return (
    <>
      <Header />
      <section className="container">
        <h1>
          I am <span id="custom_emoji">NuuX🕶️</span>
        </h1>
        <p style={{ textAlign: "center", maxWidth: "40rem" }}>
          This is my personal site. Yes, there&apos;s not much to see,😆 BUT
          it&apos;s a work in progress. <br /> U know what makes it different
          from my other portfolio projects? <br /> It&apos;s not empty. <br />
          It&apos;s out there... damn right <br />
          And it is Goddamn responsive 😎
          <br />
          And that&apos;s the point.
        </p>
        <h3>
          <span>NB</span>: It will be different next time you visit. Promise.
          Await. But not All 😁
        </h3>
        <ProjectsButton />
      </section>
      <section id="projects" style={{ height: "200vh" }}>
        <h1>Projects</h1>
        <p style={{ textAlign: "center" }}>
          My Amazing Projects will be listed here
        </p>
        <h3>
          <span>Soon</span>😁
        </h3>
      </section>
    </>
  );
}

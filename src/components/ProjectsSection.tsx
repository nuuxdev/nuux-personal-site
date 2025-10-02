export default function ProjectsSection() {
  return (
    <section id="projects" className="fullscreen">
      <h1>Projects</h1>
      <p style={{ textAlign: "center" }}>
        My Amazing Projects will be listed here
      </p>
      <h3>
        <span>Mobile</span>😁
      </h3>
      <div className="mobile_projects_container">
        <figure className="mobile_projects">
          <img src="/projects/bg-mobile-light.webp" alt="project name" />
          <figcaption>Project One</figcaption>
        </figure>
        <figure className="mobile_projects">
          <img src="/projects/bg-mobile-light.webp" alt="project name" />
          <figcaption>Project Two</figcaption>
        </figure>
        <figure className="mobile_projects">
          <img src="/projects/bg-mobile-light.webp" alt="project name" />
          <figcaption>Project Three</figcaption>
        </figure>
        <figure className="mobile_projects">
          <img src="/projects/bg-mobile-light.webp" alt="project name" />
          <figcaption>Project Four</figcaption>
        </figure>
        <figure className="mobile_projects">
          <img src="/projects/bg-mobile-light.webp" alt="project name" />
          <figcaption>Project Five</figcaption>
        </figure>
      </div>
    </section>
  );
}

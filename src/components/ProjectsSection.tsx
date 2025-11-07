import Link from "next/link";
import {
  FigmaIcon,
  ReactIcon,
  VueIcon,
  CssIcon,
  TypescriptIcon,
} from "./ToolIcons";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="fullscreen"
      style={{ marginBottom: "10rem" }}
    >
      <h1>Projects</h1>
      {/* Mobile */}
      <h3>
        <span>Mobile Designs</span>
      </h3>
      <p style={{ textAlign: "center" }}>
        <span>
          <FigmaIcon />
          igma
        </span>{" "}
        powered responsive designs with creativity 🪄 and interactivity 💯
      </p>

      <div className="mobile_projects_container">
        <figure className="mobile_projects">
          <Link
            target="blank"
            href="https://www.figma.com/proto/fSVsJ4bl3cZqLMtfOG91Fc/Nova?t=3QU6AZidDnbUKNbI-1&scaling=scale-down&content-scaling=responsive&page-id=0%3A1&node-id=6-964&starting-point-node-id=6%3A964&show-proto-sidebar=1"
          >
            <img src="/projects/nova-erp-one.webp" alt="Nova ERP" />
          </Link>
          <figcaption>ERP</figcaption>
        </figure>
        <figure className="mobile_projects">
          <Link
            target="blank"
            href="https://www.figma.com/proto/iEyNQK94pVTOPIPGRRQ67x/Nova-Tracker?t=sPw1Dgs5bXHGY6G4-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=22-885&starting-point-node-id=22%3A885&show-proto-sidebar=1"
          >
            <img
              src="/projects/nova-expense-one.webp"
              alt="Nova Expense Tracker"
            />
          </Link>
          <figcaption>Expense Tracker</figcaption>
        </figure>
        <figure className="mobile_projects">
          <Link
            target="blank"
            href="https://www.figma.com/proto/C0m5JRoGn8FDeWPIexZZ5w/beete-Nibab?t=9jZQpRQxKxl8jz2T-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=1095-802&starting-point-node-id=1095%3A685&show-proto-sidebar=1"
          >
            <img src="/projects/beete-nibab.webp" alt="Bete Nibab" />
          </Link>
          <figcaption>Bete Nibab</figcaption>
        </figure>
        <figure className="mobile_projects">
          <Link
            target="blank"
            href="https://www.figma.com/proto/sSLu1trcyb1HtU76R2AMQm/Crib-CRM-redesign?node-id=46-834&p=f&t=IxKVw6M5M9SmMr1a-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=13%3A205&show-proto-sidebar=1"
          >
            <img src="/projects/crib-crm.webp" alt="Crib CRM" />
          </Link>
          <figcaption>Crib CRM</figcaption>
        </figure>
        <figure className="mobile_projects">
          <Link
            target="blank"
            href="https://www.figma.com/proto/5PUlzUqWYMLbh1YJkASu6e/ERF-sabadmin?node-id=1109-1071&p=f&viewport=591%2C378%2C0.11&t=pqdyFUn9ZioENPuo-1&scaling=scale-down&content-scaling=fixed&page-id=1105%3A2&starting-point-node-id=1105%3A4"
          >
            <img src="/projects/erf-rooms.webp" alt="Erf Rooms" />
          </Link>
          <figcaption>Erf Rooms</figcaption>
        </figure>
      </div>
      {/* Web */}
      <h3 style={{ marginTop: "10rem" }}>
        <span>Web Design & Dev</span>
      </h3>
      <p style={{ textAlign: "center" }}>
        🧠 logic using{" "}
        <span>
          <TypescriptIcon />
        </span>
        <br />
        🪄 and styling with the power of{" "}
        <span>
          <CssIcon />
        </span>
      </p>

      <div className="web_projects_container">
        <figure className="web_projects" style={{ maxWidth: "40rem" }}>
          <Link target="blank" href="https://redicoltrading.com/">
            <img
              src="/projects/redicol-trading.webp"
              alt="Redicol Trading Website"
              style={{ width: "100%" }}
            />
          </Link>
          <figcaption>Redicol Trading</figcaption>
        </figure>
        <figure className="web_projects" style={{ maxWidth: "40rem" }}>
          <Link target="blank" href="https://neros-landing.vercel.app/home">
            <img
              src="/projects/neros-school.webp"
              alt="Neros School Website"
              style={{ width: "100%" }}
            />
          </Link>
          <figcaption>Neros School</figcaption>
        </figure>
        <figure className="web_projects" style={{ maxWidth: "40rem" }}>
          <Link
            target="blank"
            href="https://www.figma.com/proto/MQq1IAFYuyUlPvYI47dqbx/Dr.Emebet-Dental-Clinic-System-Project?node-id=3228-71077&p=f&t=GstLqlN9d5cTaOdg-1&scaling=min-zoom&content-scaling=fixed&page-id=15%3A45&starting-point-node-id=3783%3A4525"
          >
            <img
              src="/projects/dr-emebet-dental.webp"
              alt="Dr.Emebet Dental System Design"
              style={{ width: "100%" }}
            />
          </Link>
          <figcaption>Dr.Emebet Dental System Design</figcaption>
        </figure>
        <figure className="web_projects" style={{ maxWidth: "40rem" }}>
          <Link
            target="blank"
            href="https://www.figma.com/proto/rA1kf6Yb7KPzDjaVmTs2Oj/Rome-Beauty-Spa?node-id=9135-48263&p=f&t=VJVlOQ0FkFlmwnHb-1&scaling=scale-down&content-scaling=fixed&page-id=870%3A37365&starting-point-node-id=9135%3A48263&show-proto-sidebar=1"
          >
            <img
              src="/projects/rome-spa.webp"
              alt="Rome Beauty Spa System Design"
              style={{ width: "100%" }}
            />
          </Link>
          <figcaption>Rome Beauty Spa System Design</figcaption>
        </figure>
      </div>
    </section>
  );
}

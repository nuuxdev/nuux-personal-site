import Link from "next/link";
import { FigmaIcon } from "./ToolIcons";

export default function ProjectsSection() {
  return (
    <section id="projects" className="fullscreen">
      <h1>Projects</h1>
      {/* Mobile */}
      <h3>
        <span>Mobile Designs</span>
      </h3>
      <p style={{ textAlign: "center" }}>
        <span><FigmaIcon />igma</span> powered responsive designs with creativity 🪄 and interactivity 💯
      </p>
      
      <div className="mobile_projects_container">
        <figure className="mobile_projects">
                    <Link target="blank" href="https://www.figma.com/proto/fSVsJ4bl3cZqLMtfOG91Fc/Nova?t=3QU6AZidDnbUKNbI-1&scaling=scale-down&content-scaling=responsive&page-id=0%3A1&node-id=6-964&starting-point-node-id=6%3A964&show-proto-sidebar=1">
<img src="/projects/nova-erp-one.webp" alt="Nova ERP" /></Link>
          <figcaption>ERP</figcaption>
        </figure>
        <figure className="mobile_projects">
                    <Link target="blank" href="https://www.figma.com/proto/iEyNQK94pVTOPIPGRRQ67x/Nova-Tracker?t=sPw1Dgs5bXHGY6G4-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=22-885&starting-point-node-id=22%3A885&show-proto-sidebar=1">
<img src="/projects/nova-expense-one.webp" alt="Nova Expense Tracker" /></Link>
          <figcaption>Expense Tracker</figcaption>
        </figure>
        <figure className="mobile_projects">
                    <Link target="blank" href="https://www.figma.com/proto/C0m5JRoGn8FDeWPIexZZ5w/beete-Nibab?t=9jZQpRQxKxl8jz2T-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=1095-802&starting-point-node-id=1095%3A685&show-proto-sidebar=1">
<img src="/projects/beete-nibab.webp" alt="Bete Nibab" /></Link>
          <figcaption>Bete Nibab</figcaption>
        </figure>
        <figure className="mobile_projects">
                   <Link target="blank" href="https://www.figma.com/proto/sSLu1trcyb1HtU76R2AMQm/Crib-CRM-redesign?node-id=46-834&p=f&t=IxKVw6M5M9SmMr1a-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=13%3A205&show-proto-sidebar=1">
 <img src="/projects/crib-crm.webp" alt="Crib CRM" />
 </Link>
          <figcaption>Crib CRM</figcaption>
        </figure>
        <figure className="mobile_projects">
          <Link target="blank" href="https://www.figma.com/proto/5PUlzUqWYMLbh1YJkASu6e/ERF-sabadmin?node-id=1109-1071&p=f&viewport=591%2C378%2C0.11&t=pqdyFUn9ZioENPuo-1&scaling=scale-down&content-scaling=fixed&page-id=1105%3A2&starting-point-node-id=1105%3A4">
          <img src="/projects/erf-rooms.webp" alt="Erf Rooms" />
          </Link>
          <figcaption>Erf Rooms</figcaption>
        </figure>
      </div>
      {/* Web */}
      
    </section>
  );
}

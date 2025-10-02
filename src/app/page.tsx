import FooterSection from "@/components/FooterSection";
import Header from "@/components/header";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="content_grid">
        <HeroSection />
        <ProjectsSection />
        <section id="another" style={{ height: "100vh" }}>
          <h1>Another</h1>
          <p style={{ textAlign: "center" }}>
            My Amazing another things will be listed here
          </p>
          <h3>
            <span>Soon</span>😁
          </h3>
        </section>
        <FooterSection />
      </main>
    </>
  );
}

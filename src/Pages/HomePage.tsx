import Contact from "@/components/modules/Home/Contact";
import HeroSection from "@/components/modules/Home/HeroSection";
import FeaturedProjects from "@/components/modules/Home/ProjectSection";
import SkillsSection from "@/components/modules/Home/SkillsSection";

function HomePage() {
  return (
    <div className="z-50 grid grid-cols-1 gap-10">
      <section id="hero">
        <HeroSection />
      </section>
      <section>
        <SkillsSection />
      </section>
      <section id="projects" className="flex justify-center">
        <FeaturedProjects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default HomePage;

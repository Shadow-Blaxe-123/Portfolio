import HeroSection from "@/components/modules/Home/HeroSection";
import FeaturedProjects from "@/components/modules/Home/ProjectSection";

function HomePage() {
  return (
    <div className="z-50 grid grid-cols-1 gap-10">
      <section id="hero">
        <HeroSection />
      </section>
      <section>Even more content</section>
      <section id="projects" className="flex justify-center">
        <FeaturedProjects />
      </section>
    </div>
  );
}

export default HomePage;

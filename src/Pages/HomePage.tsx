import HeroSection from "@/components/modules/Home/HeroSection";

function HomePage() {
  return (
    <div className="z-50 grid grid-cols-1 gap-10">
      <section id="hero">
        <HeroSection />
      </section>
      <section>Even more content</section>
      <section id="projects">More content here</section>
    </div>
  );
}

export default HomePage;

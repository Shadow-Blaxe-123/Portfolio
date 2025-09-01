import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowDownToLine } from "lucide-react";

function HeroSection() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-center px-4">
      {/* Heading with fade-in */}
      <h1 className="text-5xl font-extrabold mb-6 text-white opacity-0 animate-fadeIn">
        Hi! I'm <span className="text-cyan-400">Shamyun Ahmed</span>
      </h1>

      {/* Subtext with fade-in */}
      <p className="text-lg mb-8 text-gray-200 space-y-4 max-w-3xl opacity-0 animate-fadeIn delay-200">
        <span>
          I'm a{" "}
          <span className="text-cyan-300 font-semibold">
            full-stack web developer
          </span>{" "}
          specializing in the{" "}
          <span className="text-violet-400 font-semibold">MERN stack</span>.
        </span>
        <span>
          I build <span className="text-green-300 font-medium">responsive</span>
          , <span className="text-green-300 font-medium">modern</span>, and{" "}
          <span className="text-green-300 font-medium">user-friendly</span> web
          applications.
        </span>
        <span>
          I'm currently seeking{" "}
          <span className="text-cyan-300 font-semibold">
            remote development opportunities
          </span>{" "}
          where I can contribute and continue growing.
        </span>
      </p>
      <div className="flex justify-center mt-8">
        {/* View Online */}
        <a
          href="/resume.pdf" // put your PDF inside "public" folder
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="px-8 py-3 text-lg bg-cyan-500 hover:bg-cyan-600 text-black opacity-0 animate-fadeIn delay-400 flex items-center gap-2">
            View Resume <ArrowDownToLine />
          </Button>
        </a>
      </div>

      {/* Scroll down indicator */}
      <div
        className={`pb-8 absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce transition-opacity duration-500 ${
          scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <span className="text-gray-200 mb-2">Scroll Down</span>
        <ArrowDown className="text-cyan-400 w-6 h-6" />
      </div>
    </div>
  );
}

export default HeroSection;

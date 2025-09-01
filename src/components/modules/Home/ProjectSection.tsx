import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const projects = [
  {
    title: "Library Management System",
    description: "A full-stack book tracking app with MERN stack.",
    image: "public/projects/Library.png",
    link: "https://assignment-4-eta-seven.vercel.app/",
  },
  {
    title: "Parcel Delivery Service",
    description: "An platform to send and receive parcels.",
    image: "/public/projects/parcel.png",
    link: "https://parcel-delivery-sy-stem-frontend.vercel.app/",
  },
];

export default function FeaturedProjects() {
  const [visible, setVisible] = useState(false);

  // Fade in on scroll
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("projects");
      if (section) {
        const top = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight - 100) setVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // trigger on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="projects"
      className="py-20 bg-gray-900 text-white px-4 transition-opacity duration-700"
    >
      <h2
        className={`text-4xl font-bold text-center mb-12 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        Featured Projects
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card
            key={index}
            className={`bg-gray-800 hover:bg-gray-700 transition-all duration-300 shadow-lg transform ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <CardHeader className="p-0 overflow-hidden rounded-t-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-105"
              />
            </CardHeader>

            <CardContent className="px-4 py-3">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
            </CardContent>

            <CardFooter className="px-4 pb-4">
              <Button asChild variant="outline" className="w-full">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}

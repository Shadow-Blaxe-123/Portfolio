import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const projects = [
  {
    title: "Library Management System",
    description: "A full-stack book tracking app with MERN stack.",
    image: "/projects/library.png", // no "public/"
    liveLink: "https://assignment-4-eta-seven.vercel.app/",
    route: "/projects/library",
  },
  {
    title: "Parcel Delivery Frontend",
    description:
      "A React + Redux-based frontend for managing parcel delivery with role-based dashboards.",
    image: "/projects/parcel.png", // no "public/"
    liveLink: "https://assignment-4-eta-seven.vercel.app/",
    route: "/projects/parcel",
  },
  {
    title: "Chat App",
    description:
      "A real-time chat application built with HTML, CSS, JavaScript and Socket.io.",
    image: "/projects/chat.png",
    route: "/projects/chat",
  },
];

export default function FeaturedProjects() {
  const [visible, setVisible] = useState(false);

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
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="projects"
      className="py-20 bg-gray-900 text-white px-6 sm:px-20 transition-opacity duration-700 w-full"
    >
      <h2
        className={`text-4xl font-bold text-center mb-12 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        Featured Projects
      </h2>

      <div className="grid gap-8 sm:grid-cols-3">
        {projects.map((project, index) => (
          <Card
            key={index}
            className={`bg-gray-800 hover:bg-gray-700 transition-all duration-300 shadow-lg transform ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            {/* Image Container with Peek Effect */}
            <CardHeader className="p-0 overflow-hidden rounded-t-lg bg-gray-950 flex items-center justify-center h-56">
              <img
                src={project.image}
                alt={project.title}
                className="max-h-full max-w-full object-contain transform transition-transform duration-300 hover:scale-105"
              />
            </CardHeader>

            <CardContent className="px-4 py-3">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm">{project.description}</p>
            </CardContent>

            <CardFooter className="px-4 pb-4 flex gap-2">
              {project.liveLink && (
                <Button asChild variant="outline" className="">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </Button>
              )}
              <Button asChild variant="secondary" className="">
                <Link to={project.route as string} target="_blank">
                  View Details
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

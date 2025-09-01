import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router"; // <-- fixed import

const projects = [
  {
    title: "Library Management System",
    description: "A full-stack book tracking app with MERN stack.",
    image: "/projects/library.png",
    liveLink: "https://assignment-4-eta-seven.vercel.app/",
    route: "/projects/library",
  },
  {
    title: "Parcel Delivery Frontend",
    description:
      "A React + Redux-based frontend for managing parcel delivery with role-based dashboards.",
    image: "/projects/parcel.png",
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

function AllProjects() {
  return (
    <div className="min-h-screen px-6 py-12 bg-background">
      <h1 className="text-4xl font-bold text-center mb-12">All Projects</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card
            key={project.title}
            className="shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <CardHeader>
              <img
                src={project.image}
                alt={project.title}
                className="max-h-full max-w-full object-contain transform transition-transform duration-300 hover:scale-105"
              />
              <CardTitle className="text-xl">{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>
              <Link to={project.route}>
                <Button className="w-full">View Details</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default AllProjects;

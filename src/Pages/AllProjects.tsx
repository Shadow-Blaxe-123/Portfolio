import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const projects = [
  {
    title: "Library Management System",
    description: "A full-stack book tracking app with MERN stack.",
    image: "/projects/library.png", // no "public/"
    liveLink: "https://assignment-4-eta-seven.vercel.app/",
  },
];

function AllProjects() {
  return (
    <div className="min-h-screen px-6 py-12 bg-background">
      <h1 className="text-4xl font-bold text-center mb-12">All Projects</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Example Project */}
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <img
              src={projects[0].image}
              alt={projects[0].title}
              className="max-h-full max-w-full object-contain transform transition-transform duration-300 hover:scale-105"
            />
            <CardTitle className="text-xl">Parcel Delivery Frontend</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              A React + Redux-based frontend for managing parcel delivery with
              role-based dashboards.
            </p>
            <Link to="/projects/parcel">
              <Button className="w-full">View Details</Button>
            </Link>
          </CardContent>
        </Card>

        {/* You can add more projects here the same way */}
      </div>
    </div>
  );
}

export default AllProjects;

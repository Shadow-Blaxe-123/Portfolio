import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React",
        "Redux",
        "JavaScript (ES6+)",
        "TypeScript",
        "Tailwind CSS",
      ],
    },
    {
      title: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "Authentication (JWT, OAuth)",
      ],
    },
    {
      title: "Database",
      skills: ["MongoDB", "Mongoose", "PostgreSQL (basics)"],
    },
    {
      title: "Tools & Others",
      skills: [
        "Git & GitHub",
        "VS Code",
        "Postman",
        "Vercel / Netlify",
        "Linux CLI",
      ],
    },
  ];

  return (
    <section id="skills" className="min-h-screen px-6 py-16 bg-background">
      <h1 className="text-4xl font-bold text-center mb-12">Skills</h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {skillCategories.map((category) => (
          <Card
            key={category.title}
            className="shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <CardHeader>
              <CardTitle className="text-2xl">{category.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="px-3 py-1 text-sm hover:scale-105 transition-transform"
                >
                  {skill}
                </Badge>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;

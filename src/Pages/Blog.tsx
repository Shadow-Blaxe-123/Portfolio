import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    title: "How I Built a MERN Stack Portfolio",
    date: "September 1, 2025",
    excerpt:
      "In this post, I walk through how I built my personal portfolio using React, Tailwind CSS, and Node.js, sharing tips and challenges I faced along the way.",
    link: "#", // link to full blog post or leave '#' for now
  },
  {
    title: "Top 5 Tips for Learning React Fast",
    date: "August 20, 2025",
    excerpt:
      "Learning React can be overwhelming at first. Here are my top 5 tips to accelerate your learning and build projects effectively.",
    link: "#",
  },
  {
    title: "Understanding Redux Toolkit",
    date: "August 5, 2025",
    excerpt:
      "Redux Toolkit simplifies state management in React apps. In this post, I explain its core concepts and show how to set up a simple store.",
    link: "#",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="min-h-screen px-6 py-16 bg-background">
      <h1 className="text-4xl font-bold text-center mb-12">Blog</h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {blogPosts.map((post, index) => (
          <Card
            key={index}
            className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            <CardHeader className="pb-0">
              <CardTitle className="text-xl">{post.title}</CardTitle>
              <p className="text-sm text-gray-400">{post.date}</p>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-gray-200">{post.excerpt}</p>
            </CardContent>
            <div className="p-4 pt-0">
              <Button asChild variant="outline" className="w-full">
                <a href={post.link}>Read More</a>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

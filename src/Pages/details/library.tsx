import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

function LibraryProjectDetails() {
  return (
    <div className="min-h-screen px-6 py-12 bg-background">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Library Management App
        </h1>

        {/* Preview Image */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <img
              src="/projects/library.png"
              alt="Library Management App"
              className="w-full object-contain rounded-md"
            />
            <CardTitle className="text-2xl mt-4">Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              This is a minimalist full-stack website to manage a library. Built
              as Programming Hero Assignment 4.
            </p>
          </CardContent>
        </Card>

        {/* Features Section */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle>Features</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
              <li>📘 Add new books to the library.</li>
              <li>✏️ Edit existing book details.</li>
              <li>🗑️ Delete books from the collection.</li>
              <li>🔄 Borrow books and track availability.</li>
              <li>📊 View a summary of all borrowed books.</li>
              <li>📄 Paginated book listing.</li>
              <li>⚡ Optimistic UI updates for seamless user experience.</li>
            </ul>
          </CardContent>
        </Card>

        {/* Tech Stack */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle>Tech Stack</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <h3 className="font-semibold">Frontend</h3>
              <p>
                React, Vite, TypeScript, ShadCn UI, Redux Toolkit, React-Spinner
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Backend</h3>
              <p>Node.js, Express, MongoDB Atlas, Mongoose, TypeScript</p>
            </div>
          </CardContent>
        </Card>

        {/* Getting Started / Clone */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">Clone the repo and start development:</p>
            <pre className="bg-gray-800 text-white p-4 rounded-md mb-2 overflow-x-auto">
              {`git clone https://github.com/Shadow-Blaxe-123/L2-Assignment-4.git
cd library-app
npm install
npm run dev`}
            </pre>
            <p className="text-muted-foreground">
              The `src/` folder contains components, Redux slices, and main app
              entry points.
            </p>
          </CardContent>
        </Card>

        {/* Notes */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle>Notes</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
              <li>Optimistic updates implemented for smooth UX.</li>
              <li>Global loading state handled via Redux.</li>
              <li>Fully mobile-responsive UI with modern design standards.</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Back Button */}
      <div className="max-w-4xl mx-auto text-center mt-6">
        <Link to="/projects">
          <Button>← Back to All Projects</Button>
        </Link>
      </div>
    </div>
  );
}

export default LibraryProjectDetails;

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

function ChatAppDetails() {
  return (
    <div className="min-h-screen px-6 py-12 bg-background">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Hero Section */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">
              Vanilla Chat Web App
            </CardTitle>
          </CardHeader>
          <CardContent>
            <img
              src="/projects/chat.png"
              alt="Vanilla Chat Web App"
              className="w-full object-contain rounded-md mb-4"
            />
            <p className="mb-4">
              A lightweight real-time chat application built using vanilla
              JavaScript, HTML, and CSS for the frontend, and Node.js +
              Socket.io for the backend. Users can join chat rooms, send
              messages in real-time, and see active users.
            </p>
          </CardContent>
        </Card>

        {/* Technology Stack */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>📌 Technology Stack</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>HTML, CSS, Vanilla JavaScript</li>
              <li>Node.js + Express.js</li>
              <li>Socket.io for real-time communication</li>
              <li>HTML DOM manipulation for chat UI</li>
              <li>Optional: Tailwind CSS for styling</li>
            </ul>
          </CardContent>
        </Card>

        {/* Features */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Features</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Real-time messaging with Socket.io</li>
              <li>Multiple chat rooms</li>
              <li>Display active users in each room</li>
              <li>Message timestamps</li>
              <li>Responsive UI for desktop and mobile</li>
              <li>Lightweight and fast, no frontend framework required</li>
            </ul>
          </CardContent>
        </Card>

        {/* Back Button */}
        <div className="text-center">
          <Link to="/projects">
            <Button>← Back to All Projects</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ChatAppDetails;

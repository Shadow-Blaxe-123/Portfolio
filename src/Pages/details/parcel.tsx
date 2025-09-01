import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function ParcelDeliveryDetails() {
  return (
    <div className="min-h-screen px-6 py-12 bg-background">
      <Card className="max-w-4xl mx-auto shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">
            Parcel Delivery Frontend
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-2">Project Overview</h2>
            <p>
              This is the frontend application for a Parcel Delivery System,
              built with React.js, Redux Toolkit, and RTK Query. The platform
              allows Senders, Receivers, and Admins to perform parcel
              operations, manage records, and track deliveries seamlessly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">📌 Technology Stack</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>React.js + React Router</li>
              <li>Redux Toolkit & RTK Query</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Node.js + Express.js (backend reference)</li>
              <li>MongoDB + Mongoose</li>
              <li>JWT & bcrypt</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Features</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Public Landing (Home, About, Contact, Tracking)</li>
              <li>Authentication with JWT</li>
              <li>Sender Dashboard (create, cancel, view parcels)</li>
              <li>Receiver Dashboard (view, confirm parcels)</li>
              <li>Admin Dashboard (manage users & parcels)</li>
              <li>Parcel Tracking with status logs</li>
              <li>Form validations, filtering, pagination</li>
              <li>Loading indicators & global error handling</li>
              <li>Toast notifications for feedback</li>
            </ul>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}

export default ParcelDeliveryDetails;

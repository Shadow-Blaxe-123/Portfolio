import Navbar from "@/components/Navbar";
import StarryBackground from "@/components/StarryBackground";
import type { ReactNode } from "react";

function Public({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen">
      {/* Background stays behind everything */}
      <StarryBackground />

      {/* Navbar */}
      <Navbar />

      {/* Main content: push it below the Navbar */}
      <main className="pt-16 relative z-50">{children}</main>
    </div>
  );
}

export default Public;

import Navbar from "@/components/Navbar";
import StarryBackground from "@/components/StarryBackground";
import type { ReactNode } from "react";

function Public({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <StarryBackground />

      {/* Navbar and content */}
      <div className="relative z-50 flex flex-col">
        <Navbar />
        <main>{children}</main>
      </div>
    </div>
  );
}

export default Public;

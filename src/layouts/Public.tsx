import Navbar from "@/components/Navbar";
import StarryBackground from "@/components/StarryBackground";
import type { ReactNode } from "react";

function Public({ children }: { children: ReactNode }) {
  return (
    <div>
      <StarryBackground />
      <div className="relative z-50">
        <Navbar />
      </div>

      <div>{children}</div>
    </div>
  );
}
export default Public;

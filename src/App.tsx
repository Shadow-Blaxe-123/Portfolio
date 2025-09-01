import Navbar from "./components/Navbar";
import StarryBackground from "./components/StarryBackground";

function App() {
  return (
    <>
      <StarryBackground />
      <div className="relative z-50">
        <Navbar />
      </div>

      <div>start</div>
    </>
  );
}

export default App;

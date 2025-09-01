import Nav from "./components/Nav";
import StarryBackground from "./components/StarryBackground";

function App() {
  return (
    <>
      <StarryBackground />
      <div className="relative z-50">
        <Nav />
      </div>

      <div>start</div>
    </>
  );
}

export default App;

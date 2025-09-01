import { Outlet } from "react-router";
import Public from "./layouts/Public";

function App() {
  return (
    <>
      <Public>
        <Outlet />
      </Public>
    </>
  );
}

export default App;

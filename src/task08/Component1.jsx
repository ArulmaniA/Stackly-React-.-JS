import { useContext } from "react";
import { AppContext } from "./Task08";
import Component2 from "./Component2";

function Component1() {
  const { theme } = useContext(AppContext);

  return (
    <div className="card">
      <h2>Component 1</h2>
      <p>Current Theme: {theme}</p>

      <Component2 />
    </div>
  );
}

export default Component1;
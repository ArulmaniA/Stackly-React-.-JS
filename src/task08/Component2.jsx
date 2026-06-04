import { useContext } from "react";
import { AppContext } from "./Task08";
import Component3 from "./Component3";

function Component2() {
  const { theme } = useContext(AppContext);

  return (
    <div className="card">
      <h2>Component 2</h2>
      <p>Theme from Context: {theme}</p>

      <Component3 />
    </div>
  );
}

export default Component2;
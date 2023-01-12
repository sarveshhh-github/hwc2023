import { Link } from "react-router-dom";
import React from "react";

const App = () => {
  return (
    <div>
      <h1>Check Out Teams</h1>
      <h1>
        <Link to="/pool-a">Pool A</Link>
      </h1>
      <h1>
        <Link to="/pool-b">Pool B</Link>
      </h1>
      <h1>
        <Link to="/pool-c">Pool C</Link>
      </h1>
      <h1>
        <Link to="/pool-d">Pool D</Link>
      </h1>
    </div>
  );
};

export default App;

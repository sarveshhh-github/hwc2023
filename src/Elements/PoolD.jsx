import React from "react";
import Teams from "../Teams";

const TeamsOfPoolD = Teams.filter((element) => {
  return element.pool === "D";
});
const PoolD = () => {
  return (
    <div>
      <h1>Pool D</h1>
      {TeamsOfPoolD.map((element) => (
        <div
          key={element.ranking}
          style={{ border: "1px solid black", padding: "10px", margin: "5px" }}
        >
          <img
            src={element.flag}
            style={{ height: "100px" }}
            alt={element.name}
          />
          <h3>
            <b>Name:</b> {element.name}
          </h3>
          <h3>Rank: {element.ranking}</h3>
        </div>
      ))}
    </div>
  );
};

export default PoolD;

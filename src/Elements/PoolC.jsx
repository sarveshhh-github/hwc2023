import React from 'react'
import Teams from "../Teams";

const TeamsOfPoolC = Teams.filter((element) => {
  return element.pool === "C";
});
const PoolC = () => {
  return (
    <div>
      <h1>Pool C</h1>
      {TeamsOfPoolC.map((element) => (
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
}

export default PoolC
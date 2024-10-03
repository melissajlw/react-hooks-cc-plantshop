import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  // map each plant to a PlantCard 
  const plantCards = plants.map(plant => (
    <PlantCard key={ plant.id } plant={ plant } />
  ))

  return (
    <ul className="cards">{ plantCards }</ul>
  );
}

export default PlantList;

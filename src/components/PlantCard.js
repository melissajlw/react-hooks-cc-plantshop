import React, { useState } from "react";

function PlantCard({ plant }) {
  const { name, image, price } = plant
  const [inStock, setInStock] = useState(true)

  // function toggleInStock inverts the current state of inStock
  function toggleInStock() {
    setInStock(!inStock)
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={ image } alt={ name }></img>
      <h4>{ name }</h4>
      <p>Price: { price }</p>
      {/* conditional rendering of inStock based on toggle function */}
      { inStock ? (
        <button className="primary" onClick={ toggleInStock }>In Stock</button>
      ) : (
        <button onClick={ toggleInStock }>Out of Stock</button>
      ) }
    </li>
  );
}

export default PlantCard;

import React, { useState } from "react";

function NewPlantForm({ onPlantSubmit }) {
  // state variables and functions
  const [name, setName] = useState('')
  const [img, setImage] = useState('')
  const [price, setPrice] = useState('')

  // function handleSubmit submits state for each form input field
  function handleSubmit(e) {
    e.preventDefault()

    const newPlant = {
      name: name,
      image: img,
      price: price,
    }

    onPlantSubmit(newPlant)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={ handleSubmit }>
        <input 
          type="text" 
          name="name" 
          placeholder="Plant name" 
          value={ name } 
          onChange={(e) => setName(e.target.value)}/>
        <input 
          type="text" 
          name="image" 
          placeholder="Image URL" 
          value={ img } 
          onChange={(e) => setImage(e.target.value)}/>
        <input type="number" 
          name="price" 
          step="0.01" 
          placeholder="Price" 
          value={ price } 
          onChange={(e) => setPrice(e.target.value)}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;

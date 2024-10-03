import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const url = "http://localhost:6001/plants"

  // State variables/functions
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState('')

  // fetch the data only on first render
  useEffect(() => {
    loadPlants()
  }, [])

  // filter plants to match search state
  const filteredPlants = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(search.toLowerCase())
  })

  // loadPlants() fetches the plant data from the json file
  // returns an error if the fetch fails
  async function loadPlants() {
    try {
      const resp = await fetch(url)
      const data = await resp.json()
      setPlants(data)
      console.log(data)
    } catch(error) {
      console.error('Error loading plant data.', error)
    }
  }

  // function onPlantSubmit() uses POST method to set plants non-destructively
  function onPlantSubmit(plant) {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
        },
      body: JSON.stringify(plant),
    })
      .then((resp) => resp.json())
      .then((plantResp) => setPlants([...plants, plantResp]))
  }

  return (
    <main>
      <NewPlantForm onPlantSubmit={ onPlantSubmit }/>
      <Search search={ search } setSearch={ setSearch }/>
      <PlantList plants={ filteredPlants }/>
    </main>
  );
}

export default PlantPage;

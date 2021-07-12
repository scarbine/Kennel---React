import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../location/LocationProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import { Animal } from "./Animal"
import "./Animal.css"
import { AnimalCard } from "./AnimalCard"

export const AnimalList = () => {
    const { animals, getAnimals, searchTerms } = useContext(AnimalContext)
    // const { locations, getLocations } = useContext(LocationContext)
    // const { customers, getCustomers } = useContext(CustomerContext)
    const [filteredAnimals, setFiltered] = useState([])
    const history = useHistory()
    useEffect(() => {
        console.log("AnimalList: Initial render before data")
        getAnimals()
    }, [])


    // Empty dependency array - useEffect only runs after first render
  useEffect(() => {
    getAnimals()
}, [])

// useEffect dependency array with dependencies - will run if dependency changes (state)
// searchTerms will cause a change
useEffect(() => {
  if (searchTerms !== "") {
    // If the search field is not blank, display matching animals
    const subset = animals.filter(animal => animal.name.toLowerCase().includes(searchTerms))
    setFiltered(subset)
  } else {
    // If the search field is blank, display all animals
    setFiltered(animals)
  }
}, [searchTerms, animals])

return (
  <>
    <h1>Animals</h1>

    <button onClick={() => history.push("/animals/create")}>
        Make Reservation
    </button>
    <div className="animals">
    {
      filteredAnimals.map(animal => {
        return <AnimalCard key={animal.id} animal={animal} />
      })
    }
    </div>
  </>
)
}
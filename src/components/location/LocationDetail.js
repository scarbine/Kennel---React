import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"
import { useParams, useHistory } from "react-router-dom"

export const LocationDetail = () => {
  const { getLocationById } = useContext(LocationContext)

	const [location, setLocation] = useState({})

	const {locationId} = useParams();
	const history = useHistory();

  useEffect(() => {
    console.log("useEffect", locationId)
    getLocationById(locationId)
    .then((response) => {
      setLocation(response)
    })
    }, [])

  return (
    <section className="location">
      <h3 className="location__name">{location.name}</h3>
      <div>{ location.address }</div>
      <h3>Current Employees </h3>
	{
		location.employees?.map(employee => {return (<>
			<div> {employee.name}</div>
			</>
		)})
	}
      <h3> Current Pets</h3>
     {
	     location.animals?.map(animal =>{return (<> 
	     <div> { animal.name }</div> </>)} )
     }
      {/* <div className="location__location">{location.location.name}</div> */}
      {/* What's up with the question mark???? See below.*/}
      {/* <div className="location__location">Location: {location..name}</div> */}
      
    </section>
  )
}

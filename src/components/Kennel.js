import React from "react"
import { AnimalCard } from "./animal/AnimalCard"
import { CustomerCard} from "./customer/Customer"
import { EmployeeCard} from "./employee/Employee"
import {LocationCard, LocationCard2, LocationCard3} from "./location/Locations"
import "./animal/Animal.css"
import "./employee/Employee.css"
import "./customer/Customer.css"
import "./location/Location.css"
import "./Kennel.css"


export const Kennel = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <h2>Animal</h2>
        <article className="animals">
            <AnimalCard />
            <AnimalCard />
            <AnimalCard />
        </article>
	<h2>Customer</h2>
        <article className="customers">
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
        </article>
	<h2>Employee</h2>
        <article className="employees">
            <EmployeeCard />
            <EmployeeCard />
            <EmployeeCard />
        </article>
	<h2>Location</h2>
        <article className="locations">
            <LocationCard />
            <LocationCard2 />
            <LocationCard3 />
        </article>
    </>
)

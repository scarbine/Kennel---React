import React from "react";
import "./Animal.css"

export const Animal = ({ animal, customer, location }) => (
  <>
    <section className="animal">
      <h2>{animal.name}</h2>
      <h4> {animal.breed}</h4>
      <h4> {location.name}</h4> 
     <h4> {customer.name}</h4>
    </section>
  </>
);

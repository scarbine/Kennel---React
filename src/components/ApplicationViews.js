import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home";
import { AnimalCard } from "./animal/AnimalCard";
import { EmployeeCard } from "./employee/Employee";
import { LocationCard } from "./location/Locations";
import { CustomerCard } from "./customer/Customer";

export const ApplicationViews = () => {
  return (
    <>
      {/* Render the location list when http://localhost:3000/ */}
      <Route exact path="/">
        <Home />
      </Route>

      {/* Render the animal list when http://localhost:3000/animals */}
      <Route path="/animal">
        <AnimalCard />
      </Route>

      <Route path="/customer">
        <CustomerCard />
      </Route>

      <Route path="/employee">
        <EmployeeCard />
      </Route>

      <Route path="/location">
        <LocationCard />
      </Route>
    </>
  );
};

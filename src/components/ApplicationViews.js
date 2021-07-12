import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home";
import { AnimalProvider } from "./animal/AnimalProvider";
import { CustomerProvider } from "./customer/CustomerProvider";
import { EmployeeProvider } from "./employee/EmployeeProvider";
import { LocationProvider } from "./location/LocationProvider";
import { AnimalList } from "./animal/AnimalList";
import { EmployeeList } from "./employee/EmployeeList";
import { LocationList } from "./location/LocationList";
import { CustomerList } from "./customer/CustomerList";
import { AnimalDetail } from "./animal/AnimalDetail";
import { EmployeeDetail } from "./employee/EmployeeDetail";
import { LocationDetail } from "./location/LocationDetail";
import { AnimalForm } from "./animal/AnimalForm";
import { AnimalSearch } from "./animal/AnimalSearch";

export const ApplicationViews = () => {
  return (
    <>
      {/* Render the location list when http://localhost:3000/ */}
      <Route exact path="/">
        <Home />
      </Route>

      {/* Render the animal list when http://localhost:3000/animals */}
      <AnimalProvider>
        <Route exact path="/animals/detail/:animalId(\d+)">
          <AnimalDetail />
        </Route>
      </AnimalProvider>

      <AnimalProvider>
        <CustomerProvider>
          <LocationProvider>
            <Route exact path="/animals">
              <AnimalSearch />
              <AnimalList />
            </Route>
          </LocationProvider>
        </CustomerProvider>
      </AnimalProvider>

      <AnimalProvider>
        <CustomerProvider>
          <LocationProvider>
            <Route exact path="/animals/edit/:animalId(\d+)">
              <AnimalForm />
            </Route>
          </LocationProvider>
        </CustomerProvider>
      </AnimalProvider>

   

      <CustomerProvider>
        <Route path="/customers">
          <CustomerList />
        </Route>
      </CustomerProvider>

      <EmployeeProvider>
        <Route exact path="/employees/detail/:employeeId(\d+)">
          <EmployeeDetail />
        </Route>
      </EmployeeProvider>

      <EmployeeProvider>
        <Route exact path="/employees">
          <EmployeeList />
        </Route>
      </EmployeeProvider>

      <LocationProvider>
        <Route exact path="/locations/detail/:locationId(\d+)">
          <LocationDetail />
        </Route>
      </LocationProvider>

      <LocationProvider>
        <Route exact path="/locations">
          <LocationList />
        </Route>
      </LocationProvider>
    </>
  );
};

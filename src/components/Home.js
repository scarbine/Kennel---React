import React from "react";
import { PropsAndState } from "./PropsAndState";
import { AnimalProvider } from "./animal/AnimalProvider";
import { CustomerProvider } from "./customer/CustomerProvider";
import { LocationProvider } from "./location/LocationProvider";
import { EmployeeProvider } from "./employee/EmployeeProvider";
import { AnimalList } from "./animal/AnimalList";
import { CustomerList } from "./customer/CustomerList";
import { LocationList } from "./location/LocationList";
import { EmployeeList } from "./employee/EmployeeList";

export const Home = () => (
  <>
    <h2>Nashville Kennels</h2>
    <small>Loving care when you're not there.</small>

    <address>
      <div>Visit Us at the Nashville North Location</div>
      <div>500 Puppy Way</div>
    </address>
    <PropsAndState yourName={"Sam"} yourLastName={"Carbine"} />
    <h2>Animals</h2>

    <AnimalProvider>
      <CustomerProvider>
        <LocationProvider>
      <AnimalList />
      </LocationProvider>
      </CustomerProvider>
    </AnimalProvider>

    <h2>Customers</h2>
    <CustomerProvider>
      <CustomerList />
    </CustomerProvider>

    <h2>Locations</h2>
    <LocationProvider>
      <LocationList />
    </LocationProvider>

    <h2>Employees</h2>
    <EmployeeProvider>
      <EmployeeList />
    </EmployeeProvider>
  </>
);

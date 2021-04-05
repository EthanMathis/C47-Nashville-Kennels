import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalCard } from "./animal/AnimalCard";
import { LocationsCard } from "./Locations/Locations";
import { CustomersCard } from "./Customers/Customers";
import { EmployeesCard } from "./Employees/Employees";
import { AnimalList } from "./animal/AnimalList";

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/animals">
                <AnimalList />
            </Route>

            <Route path="/locations">
            <h2>Locations</h2>
            <article className="animals">
                <LocationsCard />
                <LocationsCard />
            </article>
            </Route>

            <Route path="/customers">
            <h2>Customers</h2>
            <article className="animals">
                <CustomersCard />
                <CustomersCard />
            </article>
            </Route>

            <Route path="/employees">
            <h2>Employees</h2>
            <article className="animals">
                <EmployeesCard />
                <EmployeesCard />
            </article>
            </Route>
        </>
    )
}
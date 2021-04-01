import React from "react"
import { AnimalCard } from "./animal/AnimalCard"
import { CustomersCard } from "./Customers/Customers"
import { EmployeesCard } from "./Employees/Employees"
import "./Kennel.css"
import { LocationsCard } from "./Locations/Locations"

export const Kennel = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>
        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <h2>Animals</h2>
        <article className="animals">
            <AnimalCard />
            <AnimalCard />
            <AnimalCard />
        </article>

        <h2>Locations</h2>
        <article className="animals">
            <LocationsCard />
            <LocationsCard />
        </article>

        <h2>Employees</h2>
        <article className="animals">
            <EmployeesCard />
            <EmployeesCard />
            <EmployeesCard />
        </article>

        <h2>Customers</h2>
        <article className="animals">
            <CustomersCard />
            <CustomersCard />
            <CustomersCard />
            <CustomersCard />
        </article>
    </>
)
import React from "react"
import { AnimalCard } from "./animal/AnimalCard"
import { CustomersCard } from "./Customers/Customers"
import { EmployeesCard } from "./Employees/Employees"
import "./Kennel.css"
import { LocationsCard } from "./Locations/Locations"
import { PropsAndState } from "../PropsAndState";

export const Home = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>
        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <PropsAndState yourName="Ethan" />

    </>
)
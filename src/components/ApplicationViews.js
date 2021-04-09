import React, { useState } from "react"
import { Redirect, Route } from "react-router-dom"
import { Home } from "./Home"
import { LocationList } from "./Locations/LocationsList";
import { AnimalList } from "./animal/AnimalList";
import { CustomerList } from "./Customers/CustomerList";
import { CustomerDetail } from "./Customers/CustomerDetail";
import { EmployeeList } from "./Employees/EmployeeList";
import { AnimalDetail } from "./animal/AnimalDetail";
import { LocationDetail } from "./Locations/LocationsDetail";
import { AnimalForm } from "./animal/AnimalForm";
import { LocationForm } from "./Locations/LocationsForm";
import { EmployeeDetail } from "./Employees/EmployeeDetail";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { AnimalEditForm } from "./animal/AnimalEditForm";
import { EmployeeForm } from "./Employees/EmployeeForm";
import { CustomerEditForm } from "./Customers/CustomerFormEdit";

export const ApplicationViews = ({isAuthenticated, setAuthUser}) => {


    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>

            <Route exact path="/animals">
                {isAuthenticated ? <AnimalList /> : <Redirect to="/login" />}
            </Route>

            <Route path="/login">
                <Login setAuthUser={setAuthUser} />
            </Route>

            <Route path="/register">
                <Register setAuthUser={setAuthUser} />
            </Route>

            <Route exact path="/animals/:animalId(\d+)">
                <AnimalDetail />
            </Route>

            <Route path="/animals/create">
                <AnimalForm />
            </Route>

            <Route path="/animals/:animalId(\d+)/edit">
                <AnimalEditForm />    
            </Route>

            <Route exact path="/locations">
                <LocationList />
            </Route>

            <Route path="/locations/:locationId(\d+)">
                <LocationDetail />
            </Route>

            <Route path="/locations/create">
                <LocationForm />
            </Route>

            <Route exact path="/customers">
                <CustomerList />
            </Route>

            <Route exact path="/customers/:customerId(\d+)">
                <CustomerDetail />
            </Route>

            <Route path="/customers/:customerId(\d+)/edit">
                <CustomerEditForm />
            </Route>

            <Route exact path="/employees">
                <EmployeeList />
            </Route>

            <Route path="/employees/create">
                <EmployeeForm />
            </Route>

            <Route path="/employees/:employeeId(\d+)">
                <EmployeeDetail />
            </Route>

        </>
    )
}
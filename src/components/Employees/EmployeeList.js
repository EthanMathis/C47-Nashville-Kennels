import React, { useEffect, useState }  from "react";
import { EmployeeCard } from "./EmployeeCard";
import { getAllEmployees } from "../../modules/EmployeeManager";

export const EmployeeList = () => {
        // The initial state is an empty array
    const [employees, setEmployees] = useState([]);

    const getEmployees = () => {
        // After the data comes back from the API, we
        //  use the setAnimals function to update state
        return getAllEmployees().then(employees => {
            setEmployees(employees)
        });
    };

    // got the employees from the API on the component's first render
    useEffect(() => {
        getEmployees();
    }, []);

    // Finally we use .map() to "loop over" the employees array to show a list of employee cards
    return (
        <div className="container-cards">
            <article className="employees">
                {employees.map(emp => <EmployeeCard key={emp.id} employee={emp} />)}
            </article>
        </div>
    )
}
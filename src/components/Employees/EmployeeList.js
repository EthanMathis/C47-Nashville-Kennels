import React, { useEffect, useState }  from "react";
import { useHistory } from "react-router-dom"
import { EmployeeCard } from "./EmployeeCard";
import { deleteEmployee, getAllEmployees } from "../../modules/EmployeeManager";

export const EmployeeList = () => {
        // The initial state is an empty array
    const [employees, setEmployees] = useState([]);

    const history = useHistory();

    const getEmployees = () => {
        // After the data comes back from the API, we
        //  use the setAnimals function to update state
        return getAllEmployees().then(employees => {
            setEmployees(employees)
        });
    };

    const handleDeleteEmployees = (id) => {
        deleteEmployee(id)
        .then(getEmployees)
    }

    // got the employees from the API on the component's first render
    useEffect(() => {
        getEmployees();
    }, []);

    // Finally we use .map() to "loop over" the employees array to show a list of employee cards
    return (
        <>

        <section className="section-content">
            <button type="button"
                    className="btn"
                    onClick={() => {history.push("/employees/create")}}>
                        Add Employee
                    </button>
        </section>

        <div className="container-cards">
            <article className="employees">
                {employees.map(emp => <EmployeeCard 
                                       key={emp.id} 
                                       employee={emp} 
                                       handleDeleteEmployees={handleDeleteEmployees} />)}
            </article>
        </div>

        </>
    )
}
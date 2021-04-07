import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from "react-router-dom"
import { deleteEmployee, getEmployeeById } from '../../modules/EmployeeManager';

export const EmployeeDetail = () => {
    const [employee, setEmployee] = useState({ name: "", employer: "" });
    const [isLoading, setIsLoading] =  useState(true);

    const {employeeId} = useParams();
    const history = useHistory();

    useEffect(() => {

        getEmployeeById(employeeId)
        .then(employee => {
            console.log("empByIdObject", employee)
            setEmployee({
                name: employee.name,
                employer: employee.employer,
                address: employee.location
            });
            setIsLoading(false);
        });
    }, [employeeId]);

    const handleDelete = () => {
        setIsLoading(true);
        deleteEmployee(employeeId).then(() => 
            history.push("/employees")
        );
    };

    return (
        <section className="employee">
            <h3 className="employee__name">{employee.name}</h3>
            <div className="employee__employer">{employee.employer}</div>
            <div className="employee__address">Address: {employee.location?.address}</div>
            <button type="button" disabled={isLoading} onClick={handleDelete}>Terminate</button>
        </section>
    )

}
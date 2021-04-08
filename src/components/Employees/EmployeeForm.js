import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { addEmployee } from "../../modules/EmployeeManager"
import { getAllLocations } from '../../modules/LocationsManager';

export const EmployeeForm = () => {
    const [employee, setEmployee] = useState({
        name: "",
        locationId: 0
    });

    const [isLoading, setIsLoading] = useState(false);

    const [locations, setLocations] = useState([]);

    const history = useHistory();

    const handleInputChange = (event) => {
        const newEmployee = { ... employee }
        let selected = event.target.value

        if (event.target.id.includes("Id")) {
            selected = parseInt(selected)
        }

        newEmployee[event.target.id] = selected
        setEmployee(newEmployee)
    }

    useEffect(() => {
        getAllLocations()
        .then(response => {
            setLocations(response)
        });
    }, []);

    const handleClickSaveAnimal = (event) => {
        event.preventDefault()
        setIsLoading(true)

        const locationId = employee.locationId
        

        if (locationId === 0) {
            window.alert("Please select a location")
        } else {
            addEmployee(employee)
            .then(() => history.push("/employees"))
        }
    }

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Employee Name:</label>
                    <input type="text" id="name" 
                    onChange={handleInputChange} 
                    required autoFocus
                    className="form-control"
                    placeholder="Employee Name"
                    value={employee.name} />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="employer">Employer:</label>
                    <select value={employee.locationId} 
                    name="locationId" id="locationId" 
                    onChange={handleInputChange}
                    className="form-control">
                        <option value="0">Select an employer</option>
                        {locations.map(loc => (
                            <option key={loc.id} value={loc.id}>
                                {loc.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <button className="btn btn-primary"
                    disabled={isLoading}
                    onClick={handleClickSaveAnimal}>
                Save Employee        
            </button>
        </form>
    )
}

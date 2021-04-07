import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { addLocation } from "../../modules/LocationsManager";
import "./LocationsForm.css"


export const LocationForm = () => {

    const history = useHistory()
    const [isLoading, setIsLoading] = useState(false);


    const [location, setLocation] = useState({
        name: "",
        address: "",
    });

    const handleInputChange = (event) => {
        const newLocation = { ...location }

        let selected = event.target.value

        newLocation[event.target.id] = selected
        setLocation(newLocation)
    }

    const handleSaveLocation = (event) => {
        // event.preventDefault();

       
        if (location.name === "" || location.address === "") {
            window.alert("Please fill out the required fields")
        } else {
            setIsLoading(true)
            addLocation(location)
            .then(() => history.push("/locations"))
        }
    }

    return (
        <form className="locationForm">
            <h2 className="locationForm__title">New Location</h2>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Location Name:</label>
                    <input type="text" id="name" onChange={handleInputChange} required autoFocus className="form-control" placeholder="Location Name" value={location.name} />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="address">Location Address</label>
                    <input type="text" id="address" onChange={handleInputChange} required autoFocus className="form-control" placeholder="Location Address" value={location.address} />
                </div>
            </fieldset>
            <button type="button" disabled={isLoading} className="btn btn-primary" onClick={handleSaveLocation}>Add Location</button>
        </form>
    )
}
import React, { useEffect, useState } from 'react';
//import the components we will need
import { LocationsCard } from "./LocationsCard";
import { deleteLocation, getAllLocations } from "../../modules/LocationsManager";
import { useHistory } from "react-router-dom";

export const LocationList = () => {

    const [locations, setLocations] = useState([])
    const history = useHistory();

    const getLocations = () => {
        return getAllLocations().then(locationsFromAPI => {
            setLocations(locationsFromAPI)
        })
    }

    const handleDeleteLocation = (id) => {
        deleteLocation(id)
        .then(() => getLocations())
    }

    useEffect(() => {
        getLocations();
    }, [])


    return (
        <>
        <section className="section-content">
            <button type="button" className="btn" onClick={() => {history.push("locations/create")}}>
                Add Location
            </button>
        </section>

        <div className="container-cards">
            <article className="locations">
                {locations.map(loc => <LocationsCard 
                                       key={loc.id}  
                                       location={loc}
                                       handleDeleteLocation={handleDeleteLocation} />)}
            </article>
        </div>
        </>
    )
}
import React, { useEffect, useState } from 'react';
//import the components we will need
import { LocationsCard } from "./LocationsCard";
import { getAllLocations } from "../../modules/LocationsManager";

export const LocationList = () => {

    const [locations, setLocations] = useState([])

    const getLocations = () => {
        return getAllLocations().then(locationsFromAPI => {
            setLocations(locationsFromAPI)
        })
    }

    useEffect(() => {
        getLocations();
    }, [])


    return (
        <div className="container-cards">
            <article className="locations">
                {locations.map(loc => <LocationsCard key={loc.id} location={loc} />)}
            </article>
        </div>
    )
}
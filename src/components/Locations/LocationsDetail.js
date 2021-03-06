import React, { useState, useEffect } from 'react';
import { deleteLocation, getLocationById } from '../../modules/LocationsManager';
import './LocationDetail.css';
import { useParams, useHistory } from "react-router-dom"

export const LocationDetail = () => {
    const [location, setLocation] = useState({})
    const [isLoading, setIsLoading] = useState(true);

    const {locationId} = useParams();
    const history = useHistory();

    useEffect(() => {
        getLocationById(locationId)
        .then(location => {
            setLocation({
                name: location.name,
                address: location.address
            });
            setIsLoading(false);
        });
    }, [locationId]);

    const handleDelete = () => {

        setIsLoading(true);
        deleteLocation(locationId).then(() => 
        history.push("/locations")
        );
    };

    return (
        <section className="location">
            <h3 className="location__name">{location.name}</h3>
            <div className="location__address">{location.address}</div>
            <button type="button" disabled={isLoading} onClick={handleDelete}>
                Close Location
            </button>
        </section>
    );
}
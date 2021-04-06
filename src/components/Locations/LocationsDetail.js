import React, { useState, useEffect } from 'react';
import { getLocationById } from '../../modules/LocationsManager';
import './LocationDetail.css';
import { useParams } from "react-router-dom"

export const LocationDetail = () => {
    const [location, setLocation] = useState({})

    const {locationId} = useParams();

    useEffect(() => {
        getLocationById(locationId)
        .then(location => {
            setLocation({
                name: location.name,
                address: location.address
            });
        });
    }, [locationId]);

    return (
        <section className="location">
            <h3 className="location__name">{location.name}</h3>
            <div className="location__address">{location.address}</div>
        </section>
    )
}
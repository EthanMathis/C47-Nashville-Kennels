import React from "react"
import "./Location.css"
import { Link } from "react-router-dom";

export const LocationsCard = ({ location, handleDeleteLocation }) => (
    <section className="location">
        <h3 className="location__name">{location.name}</h3>
        <div className="location__address">{location.address}</div>
        <Link to={`/locations/${location.id}`}>
            <button>Details</button>
        </Link>
        <button type="button" onClick={() => handleDeleteLocation(location.id)}>
            Close Location
        </button>
    </section>
)
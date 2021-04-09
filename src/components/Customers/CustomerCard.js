import React from "react"
import { Link } from "react-router-dom"
import "./Customer.css"

export const CustomerCard = ({ customer, handleDeleteCustomer }) => (
        <section className="customer">
            <h3 className="customer__name">{customer.name}</h3>
            <div className="customer__address">Address: {customer.address}</div>
            <Link to={`/customers/${customer.id}`}>
                <button>Details</button>
            </Link>
            <button type="button" onClick={() => handleDeleteCustomer(customer.id)}>Remove</button>
        </section>
)
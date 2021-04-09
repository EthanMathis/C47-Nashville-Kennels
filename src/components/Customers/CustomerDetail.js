import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from "react-router-dom"
import { deleteCustomer, getCustomerById } from "../../modules/CustomerManager"

export const CustomerDetail = () => {
    const [customer, setCustomer] = useState({ name: "", email: "", address: "" });
    const [isLoading, setIsLoading] = useState(true);

    const {customerId} = useParams();
    const history = useHistory();

    useEffect(() => {
        getCustomerById(customerId)
        .then(customer => {
            setCustomer({
                name: customer.name,
                email: customer.email,
                address: customer.address,
                animal: customer.animal
            });
            setIsLoading(false);
        });
    }, [customerId]);

    const handleDelete = () => {
        setIsLoading(true);
        deleteCustomer(customerId).then(() => {
            history.push("/customers")
        });
    };

    return (
        <section className="customer">
            <h3 className="customer__name">{customer.name}</h3>
            <div className="customer__email">Email: {customer.email}</div>
            <div className="customer__address">Address: {customer.address}</div>
            <div className="customer__animal">Pet: {customer.animal?.name}</div>
            <button type="button" disabled={isLoading} onClick={handleDelete}>Remove</button>
        </section>
    )
}
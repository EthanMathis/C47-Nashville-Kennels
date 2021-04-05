import React, { useEffect, useState }  from "react";
import { CustomerCard } from "./CustomerCard";
import { getAllCustomers } from "../../modules/CustomerManager";

export const CustomerList = () => {
    // The initial state is an empty array
    const [customers, setCustomers] = useState([]);

    const getCustomers = () => {
        // After the data comes back from the API, we
        //  use the setCustomers function to update state
        return getAllCustomers().then(allCustomers => {
            setCustomers(allCustomers)
        });
    };

    // got the customers from the API on the component's first render
    useEffect(() => {
        getCustomers();
    }, []);

    // Finally we use .map() to "loop over" the customers array to show a list of customer cards
    return (
        <div className="container-cards">
            <article className="customers">
            {customers.map(customer => <CustomerCard key={customer.id} customer={customer} />)}
            </article>
        </div>
    );
};
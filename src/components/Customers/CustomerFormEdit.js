import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getAllAnimals } from '../../modules/AnimalManager';
import { getCustomerById, updateCustomer } from "../../modules/CustomerManager";

export const CustomerEditForm = () => {
    const [customer, setCustomer] = useState({
        name: "",
        email: "",
        address: ""
    });

    const [animals, setAnimals] = useState([])

    const [isLoading, setIsLoading] = useState(false);
    const {customerId} = useParams();
    const history = useHistory();

    const handleInputChange = (event) => {
        const newCustomer = {... customer}
        let selected = event.target.value
        if(event.target.id.includes("Id")) {
            selected = parseInt(selected)
        }
        newCustomer[event.target.id] = selected
        setCustomer(newCustomer)
    };

    useEffect(() => {
        getAllAnimals()
        .then(response => {
            setAnimals(response)
        });
    }, []);


    const updateExistingCustomer = event => {
        event.preventDefault()
        setIsLoading(true);

        const editedCustomer = {
            id: customerId,
            name: customer.name,
            email: customer.email,
            address: customer.address,
            animalId: customer.animalId
        };

        updateCustomer(editedCustomer)
        .then(() => history.push("/customers"))
    };

    useEffect(() => {
        getCustomerById(customerId)
        .then(customer => {
            setCustomer(customer);
            setIsLoading(false);
        });
    }, []);

    return (
        <form>
            <fieldset>
                <div className="formgrid">
                    <input type="text"
                           required
                           className="form-control"
                           onChange={handleInputChange}
                           id="name"
                           value={customer.name} />
                    <label htmlFor="name">Customer Name</label>

                    <input type="text"
                           required
                           className="form-control"
                           onChange={handleInputChange}
                           id="email"
                           value={customer.email} />
                    <label htmlFor="email">Customer Email</label>

                    <input type="text"
                           required
                           className="form-control"
                           onChange={handleInputChange}
                           id="address"
                           value={customer.address} />
                    <label htmlFor="address">Customer Address</label>

                    <select value={customer.animalId}
                            name="animalId"
                            id="animalId"
                            onChange={handleInputChange}
                            className="form-control">
                    <option value={customer.animalId}>{customer.animal?.name}</option>
                    {animals.map(a => (
                        <option key={a.id} value={a.id}>
                            {a.name}
                        </option>
                    ))}
                    </select>
                </div>
                <div className="alignRight">
                    <button type="button" disabled={isLoading}
                            onClick={updateExistingCustomer}
                            className="btn btn-primary">
                        Submit
                    </button>
                </div>
            </fieldset>
        </form>
    )
};
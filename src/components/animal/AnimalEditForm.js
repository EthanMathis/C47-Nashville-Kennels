import React, { useState, useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"
import { updateAnimal, getAnimalById } from "../../modules/AnimalManager"
import { getAllCustomers } from "../../modules/CustomerManager"
import { getAllLocations } from "../../modules/LocationsManager"
import "./AnimalForm.css"

export const AnimalEditForm = () => {
  const [animal, setAnimal] = useState({ name: "", breed: "" });
  const [isLoading, setIsLoading] = useState(false);

  const [locations, setLocations] = useState([]);
  const [customers, setCustomers] = useState([]);

  const {animalId} = useParams();
  const history = useHistory();

  const handleFieldChange = evt => {
    const newAnimal = {...animal};
    let selected = evt.target.value
    if (evt.target.id.includes("Id")) {
        selected = parseInt(selected)
    }

    newAnimal[evt.target.id] = selected;
    setAnimal(newAnimal);
  };

  useEffect(() => {
      getAllLocations()
      .then(response => {
          setLocations(response)
      });
  }, []);

  useEffect(() => {
      getAllCustomers()
      .then(response => {
        setCustomers(response)
      });
  }, []);

  const updateExistingAnimal = evt => {
    evt.preventDefault()
    setIsLoading(true);


    // This is an edit, so we need the id
    const editedAnimal = {
      id: animalId,
      name: animal.name,
      breed: animal.breed,
      locationId: animal.locationId,
      customerId: animal.customerId
    };

    updateAnimal(editedAnimal)
    .then(() => history.push("/animals")
    )
  }

  useEffect(() => {
    getAnimalById(animalId)
      .then(animal => {
          console.log("animal object", animal)
        setAnimal(animal);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={animal.name}
            />
            <label htmlFor="name">Animal name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="breed"
              value={animal.breed}
            />
            <label htmlFor="breed">Breed</label>

            <select 
                value={animal.locationId} 
                name="locationId" 
                id="locationId" 
                onChange={handleFieldChange} 
                className="form-control">
                <option value={animal.locationId}>{animal.location?.name}</option>
                {locations.map(loc => (
                    <option key={loc.id} value={loc.id}>
                        {loc.name}
                    </option>
                ))}
            </select>

            <select 
                value={animal.customerId}
                name="customerId"
                id="customerId"
                onChange={handleFieldChange}
                className="form-control">
                <option value={animal.customerId}>{animal.customer?.name}</option>
                {customers.map(cus => (
                    <option key={cus.id} value={cus.id}>
                        {cus.name}
                    </option>
                ))}
            </select>
          </div>
          
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingAnimal}
              className="btn btn-primary">
                Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
  }
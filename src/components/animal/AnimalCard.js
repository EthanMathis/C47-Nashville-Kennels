import React from "react"
import "./Animal.css"

export const AnimalCard = ({ animal, handleDeleteAnimal }) => (
    <section className="animal">
        <h3 className="animal__name">{animal.name}</h3>
        <div className="animal__breed">Breed: {animal.breed}</div>
        <button type="button" onClick={() => handleDeleteAnimal(animal.id)}>Discharge</button>
    </section>
)
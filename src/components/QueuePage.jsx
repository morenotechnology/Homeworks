// QueuePage.jsx
import React, { useState } from "react";
import { Person, Queue } from "./Queue"; // Importamos la cola y la clase Person

const QueuePage = () => {
  const [queue] = useState(new Queue()); // Creamos la cola
  const [people, setPeople] = useState(queue.print()); // Estado para mostrar la cola
  const [newPerson, setNewPerson] = useState({ name: "", withdrawalAmount: "" });

  // Función para agregar una nueva persona a la cola
  const handleAddPerson = (e) => {
    e.preventDefault();
    const { name, withdrawalAmount } = newPerson;
    if (name && withdrawalAmount) {
      const person = new Person(name, withdrawalAmount);
      queue.enqueue(person); // Agregar persona a la cola
      setPeople(queue.print()); // Actualizar la cola en el estado
      setNewPerson({ name: "", withdrawalAmount: "" }); // Limpiar el formulario
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>💳 Cola de Personas en el Cajero Automático</h2>

      {/* Formulario para agregar una nueva persona */}
      <form onSubmit={handleAddPerson} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Nombre"
          value={newPerson.name}
          onChange={(e) => setNewPerson({ ...newPerson, name: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Monto de Retiro"
          value={newPerson.withdrawalAmount}
          onChange={(e) =>
            setNewPerson({ ...newPerson, withdrawalAmount: e.target.value })
          }
          required
        />
        <button type="submit">Agregar Persona</button>
      </form>

      {/* Mostrar la cola de personas */}
      <h3>Personas en la Cola:</h3>
      <ul>
        {people.map((person, index) => (
          <li key={index}>
            {person.name} - Retiro: ${person.withdrawalAmount}
          </li>
        ))}
      </ul>

      {/* Mensaje si la cola está vacía */}
      {queue.isEmpty() && <p>La cola está vacía.</p>}
    </div>
  );
};

export default QueuePage;

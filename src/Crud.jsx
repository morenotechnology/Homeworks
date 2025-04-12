import useCollection from "./useCollection";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Importamos useNavigate para redirigir al Dashboard

export const Crud = () => {
  const [user, setUser] = useState({ name: "" });
  const [editingId, setEditingId] = useState(null);
  const { add, getAll, isPending, results, update, deleteD } = useCollection("users");
  const [loading, setLoading] = useState(false); // Estado adicional para manejar el cargando
  const navigate = useNavigate(); // Inicializamos useNavigate

  // Función para obtener todos los documentos de la colección
  const getAllDocs = async () => {
    setLoading(true); // Activar cargando
    await getAll([]);
    setLoading(false); // Desactivar cargando
  };

  // Función para guardar el usuario, ya sea para agregar o actualizar
  const save = async () => {
    setLoading(true); // Activar cargando mientras se guarda
    if (editingId) {
      await update(editingId, user);
      setEditingId(null);
    } else {
      await add(user);
    }
    setUser({ name: "" });
    await getAllDocs();
    setLoading(false); // Desactivar cargando
  };

  // Función para editar un usuario existente
  const edit = (item) => {
    setUser({ name: item.name });
    setEditingId(item.id);
  };

  // Función para eliminar un usuario
  const del = async (id) => {
    setLoading(true); // Activar cargando mientras se elimina
    await deleteD(id);
    await getAllDocs();
    setLoading(false); // Desactivar cargando
  };

  // Maneja el cambio en el campo de texto
  const handleSetUser = (event) => {
    setUser({ name: event.target.value });
  };

  useEffect(() => {
    getAllDocs();
  }, []);

  // Función para regresar al Dashboard
  const handleGoBack = () => {
    navigate("/Dashboard"); // Redirige al Dashboard
  };

  return (
    <>
      <h1>CRUD</h1>
      <hr />
      <input type="text" onChange={handleSetUser} value={user.name} placeholder="Añade un nombre" />
      <br />
      <br />
      <button type="button" onClick={save}>
        {editingId ? "Actualizar" : "Guardar"}
      </button>
      {loading || isPending ? <span> Cargando...</span> : null} {/* Muestra 'Cargando...' mientras se procesa */}
      <ul>
        {results.map((item) => (
          <li key={item.id}>
            {item.name}{" "}
            <button onClick={() => edit(item)}>Editar</button>{" "}
            <button onClick={() => del(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <button onClick={handleGoBack}>Regresar al Dashboard</button> {/* Botón para regresar al Dashboard */}
    </>
  );
};

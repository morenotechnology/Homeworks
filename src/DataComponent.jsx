import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fethFirebaseData, addDataToFirebase } from "./store/slices/firebaseThunk";
import { useNavigate } from "react-router-dom";  // Usamos useNavigate para redirigir

const DataComponent = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.firebase);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fethFirebaseData());  // Carga los datos desde Firebase
  }, [dispatch]);

  const handleAddData = () => {
    const newData = { name: "Nuevo dato", value: Math.random() };  // Agrega un nuevo dato con valor aleatorio
    dispatch(addDataToFirebase(newData));
  };

  const handleGoBack = () => {
    navigate("/Dashboard");  // Regresa al Dashboard
  };

  return (
    <div>
      <h2>Datos</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        data.map((item, index) => (
          <p key={index}>
            {item.name}: {item.value}
          </p>
        ))
      )}
      <button onClick={handleAddData}>Agregar Dato</button>
      <button onClick={handleGoBack}>Regresar al Dashboard</button>
    </div>
  );
};

export default DataComponent;

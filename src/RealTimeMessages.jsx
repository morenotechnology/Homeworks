import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fethFirebaseData, addDataToFirebase } from "./store/slices/firebaseThunk";
import { useNavigate } from "react-router-dom";  // Usamos useNavigate para redirigir

const RealTimeMessages = () => {
    const dispatch = useDispatch();
    const { data: messages, loading } = useSelector((state) => state.firebase);
    const [messageText, setMessageText] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fethFirebaseData()); // Carga los mensajes en tiempo real desde Firebase
    }, [dispatch]);

    const handleSendMessage = () => {
        if (messageText.trim()) {
            const newMessage = {
                text: messageText,
            };
            dispatch(addDataToFirebase(newMessage)); // Envía el mensaje a Firebase
            setMessageText("");
        }
    };

    const handleGoBack = () => {
        navigate("/Dashboard");  // Redirige al Dashboard
    };

    return (
        <div>
            <h2>Chat en tiempo real</h2>
            <div>
                <input
                    type="text"
                    placeholder="Escribe un mensaje..."
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                />
                <br />
                <br />
                <button onClick={handleSendMessage}>Enviar</button>
            </div>
            <hr />
            <h2>mensajes enviados:</h2>
            {loading ? (
                <p>Cargando mensajes...</p>
            ) : (
                <div>
                    {messages.map((msg, index) => (
                        <p key={index}>
                            {msg.text}
                        </p>
                    ))}
                </div>
            )}
            <button onClick={handleGoBack}>Regresar al Dashboard</button> {/* Botón para regresar al Dashboard */}
        </div>
    );
};

export default RealTimeMessages;

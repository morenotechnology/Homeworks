import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerAuth } from "./store/slices/registerAuth";
import { useNavigate, Link } from "react-router-dom";
import { MdEmail, MdLock } from "react-icons/md";
import styles from "./styles/Registro.module.scss"; 

const Registro = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formState, setFormState] = useState({
        email: 'morenotechnology@gmail.com',
        password: 'password'
    });

    const onInputChange = (evt) => {
        const { name, value } = evt.target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(formState);
        dispatch(registerAuth(formState.email, formState.password));
    };

    return (
        <div className={styles.container}>
            <div className={styles.registroCard}>
                <h1>Registro</h1>
                <hr />
                <form onSubmit={onSubmit}>
                    <div className={styles.inputGroup}>
                        <MdEmail className={styles.icon} />
                        <input
                            name="email"
                            type="email"
                            placeholder="morenotechnology@gmail.com"
                            onChange={onInputChange}
                            value={formState.email}
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <MdLock className={styles.icon} />
                        <input
                            name="password"
                            type="password"
                            placeholder="password"
                            onChange={onInputChange}
                            value={formState.password}
                        />
                    </div>
                    <div className={styles.registroButtonGroup}>
                        <button type="submit">Registro</button>
                    </div>
                </form>
                <p className={styles.loginText}>
                    ¿Ya tienes una cuenta? <Link to="/Login">Inicia sesión</Link>
                </p>
            </div>
        </div>
    );
};

export default Registro;

import { useSelector, useDispatch } from "react-redux";
import { logoutAuth } from "./store/slices/logoutAuth";
import { useNavigate } from "react-router-dom";
import styles from "./styles/Home.module.scss";

const Home = () => {
    const { displayName, email, photoUrl } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onLogout = () => {
        dispatch(logoutAuth());
        navigate("/Login");
    };

    return (
        <div className={styles.homeContainer}>
        <div className={styles.card}>
            {photoUrl && <img src={photoUrl} alt="Profile" />}
            <h2>Welcome, {displayName || "User"}!</h2>
            <p>Email: {email}</p>
            <button onClick={onLogout}>Logout</button>
        </div>
        </div>
    );
};

export default Home;

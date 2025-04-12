import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logoutAuth } from "./store/slices/logoutAuth";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const { displayName, email, photoUrl } = useSelector((state) => state.auth);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onLogout = () => {
        dispatch(logoutAuth())
        navigate("/Login")
    }

    return (
        <div>
        <h2>Welcome, { "User"}!</h2>
        <p>Email: {email}</p>
        {photoUrl && <img src={photoUrl} alt="Profile" width="100" />}
        <button onClick={onLogout}>Logout</button>
        </div>
    );
};

export default Home;

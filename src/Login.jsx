import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react"
import { loginAuth } from "./store/slices/loginAuth"
import { useNavigate } from "react-router-dom"
import { googleAuth } from "./store/slices/googleAuth"
import { MdEmail, MdLock } from "react-icons/md"
import { FcGoogle } from "react-icons/fc"
import styles from "./styles/Login.module.scss"

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { stats, errorMessage } = useSelector((state) => state.auth)

    const onLogin = (event) => {
        event.preventDefault()
        dispatch(loginAuth({ email, password }))
    }

    const onGoogleLogin = (event) => {
        event.preventDefault()
        dispatch(googleAuth())
    }

    useEffect(() => {
        if (stats === "authenticated") {
            navigate("/Home")
        }
    }, [stats, navigate])

    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginCard}>
                <h1>Iniciar Sesión</h1>
                <form onSubmit={onLogin} className={styles.loginForm}>
                    <div className={styles.inputGroup}>
                        <MdEmail className={styles.inputIcon} />
                        <input
                            value={email}
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <MdLock className={styles.inputIcon} />
                        <input
                            value={password}
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                        />
                    </div>
                    <div className={styles.loginButtonGroup}>
                        <button type="submit">Login</button>
                    </div>
                </form>

                <div className={styles.forgotPasswordContainer}>
                    <a href="/forgot-password" className={styles.forgotPassword}>Forgot Password?</a>
                </div>

                {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}

                <div className={styles.extraButtons}>
                    <button onClick={onGoogleLogin} className={styles.googleButton}>
                        <FcGoogle className={styles.googleIcon} /> Iniciar con Google
                    </button>
                </div>

                <p className={styles.signUpText}>
                    Don’t have an account? <a href="/" className={styles.signUpLink}>Sign up</a>
                </p>
            </div>
        </div>
    );
}

export default Login

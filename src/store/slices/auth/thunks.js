import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { auth } from "../../../firebase/config";
import { register, logout, setError } from "./authSlice";

// Validación del correo electrónico
const validateEmail = (email) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
};

// Validación de la contraseña
const validatePassword = (password) => {
  return password.length >= 6;
};

// ✅ Registro con correo y contraseña
export const registerAuth = (email, password) => {
  return async (dispatch) => {
    try {
      if (!validateEmail(email)) {
        throw new Error("Correo electrónico inválido");
      }

      if (!validatePassword(password)) {
        throw new Error("La contraseña debe tener al menos 6 caracteres");
      }

      const response = await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(auth.currentUser, {
        displayName: "Usuario nuevo",
        photoURL: ""
      });

      const { uid, displayName, email: userEmail, photoURL } = auth.currentUser;

      dispatch(register({
        uid,
        email: userEmail,
        displayName,
        photoUrl: photoURL
      }));

    } catch (error) {
      dispatch(setError(error.message));
      throw error;
    }
  };
};

// ✅ Login con correo y contraseña
export const loginWithEmailPassword = (email, password) => {
  return async (dispatch) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const { uid, displayName, email: userEmail, photoURL } = result.user;

      dispatch(register({
        uid,
        displayName,
        email: userEmail,
        photoUrl: photoURL
      }));

    } catch (error) {
      dispatch(setError(error.message));
      throw error;
    }
  };
};

// ✅ Login con Google
export const registerWithGoogle = () => {
  return async (dispatch) => {
    try {
      const provider = new GoogleAuthProvider();
      const response = await signInWithPopup(auth, provider);

      const { uid, displayName, email, photoURL } = response.user;

      await updateProfile(auth.currentUser, {
        displayName: displayName || "Usuario de Google",
        photoURL: photoURL || "",
      });

      dispatch(register({
        uid,
        email,
        displayName,
        photoUrl: photoURL
      }));

    } catch (error) {
      dispatch(setError("Google login failed"));
      throw new Error("Google login failed");
    }
  };
};

// ✅ Logout
export const startLogout = () => {
  return async (dispatch) => {
    await signOut(auth);
    dispatch(logout());
  };
};

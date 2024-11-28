import { createContext, useContext, useEffect, useState } from 'react'
import { signInWithEmailAndPassword, onAuthStateChanged, signOut, sendPasswordResetEmail, fetchSignInMethodsForEmail } from 'firebase/auth';
import { auth } from '../firebase';

const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext)
  if (!context) throw new Error('There is not auth provider');
  return context
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (dni, password) => {
    try {
      const userCredentials = await signInWithEmailAndPassword(auth, `${dni}@gmail.com`, password);
      return userCredentials;
    } catch (error) {
      throw new Error("Contraseña incorrecta");
    }
  }

  const checkDni = async (dni) => {
    try {
      if (!dni) {
        throw new Error("Por favor, ingresa tu documento");
      }
      // Verify if the email exists
      const email = `${dni}@gmail.com`;
      const signInMethods = await fetchSignInMethodsForEmail(auth, email);

      return signInMethods;
    } catch (error) {
      console.error("Error verificando el DNI:", error.message);
      throw error; // Propagamos el error para manejarlo en `handleSubmit`.
    }
  };

  const logout = async () => {
    await signOut(auth)
  }

  const sendResetPassword = async (email) => {
    await sendPasswordResetEmail(auth, email);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <authContext.Provider
      value={{
        login,
        user,
        logout,
        loading,
        sendResetPassword,
        checkDni
      }}
    >
      {children}
    </authContext.Provider>
  )
}
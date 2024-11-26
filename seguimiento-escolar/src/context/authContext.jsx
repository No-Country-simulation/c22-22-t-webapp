import { createContext, useContext, useEffect, useState } from 'react'
import { /* createUserWithEmailAndPassword, */ signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase';

const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext)
    if (!context) throw new Error('There is not auth provider');
    return context
}

export function AuthProvider({children}) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  /* const register = async (email, password, fullname, photo) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    await updateProfile(user, {
      displayName: fullname,
      photoURL: photo
    });
    return userCredential.user;
  }  */

  const login = async (email, password) => {
    const userCredentials = await signInWithEmailAndPassword(auth, email, password);
    console.log(userCredentials);
    
    return userCredentials
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    await signOut(auth)
  }

/*   const resetPassword = async (email) => {
    await sendPasswordResetEmail(auth, email)
  } */

  return <authContext.Provider value={{ /* register, */ login, user, logout, loading/* , resetPassword */ }}>{children}</authContext.Provider>
}
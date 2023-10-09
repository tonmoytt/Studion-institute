import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../../../Firebase/Firebase.config";



export const Authmainprovider = createContext(null)
const google = new GoogleAuthProvider()
const auth = getAuth(app);
const Provider = ({ children }) => {

    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth,email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleAuth = () => {
        signInWithPopup(auth, google)
    }

    const SingOutLog = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current user', currentUser);
            setUser(currentUser);
        });
        return unsubscribe()
    }, [])




    const authInfo = {
        user,
        createUser,
        signInUser,
        SingOutLog,
        googleAuth
    }
    return (
        <div>
            <Authmainprovider.Provider value={authInfo}>
                {children}
            </Authmainprovider.Provider>
        </div>
    );
};

export default Provider;
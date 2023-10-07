import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../../../Firebase/Firebase.config";



export const Authmainprovider = createContext(null)
const auth = getAuth(app);
const Provider = ({ children }) => {

    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const GoogleProvider=()=>{
        return GoogleAuthProvider()
    }
    const  SingOutLog=()=>{
        return signOut(auth)
    }

    useEffect(() =>{
      const unsubscribe=  onAuthStateChanged(auth,currentUser=>{
            console.log('current user',currentUser);
            setUser(currentUser);
        });
        return unsubscribe()
    },[])

    
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        user,
        createUser,
        signInUser,
        SingOutLog,
        GoogleProvider
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
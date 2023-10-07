import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth"; 
import app from "../../../Firebase/Firebase.config";
 

 
export const Authmainprovider=createContext(null) 
const auth = getAuth(app);
const Provider = ({ children }) => {
  
    const [user,setUser]=useState(null);

    const createUser=(name,photo,email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signinUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const authinfo={
        user,
        createUser,
        signinUser
    }
    return (
        <div>
            <Authmainprovider.Provider value={authinfo}>
                {children}
            </Authmainprovider.Provider>
        </div>
    );
};

export default Provider;
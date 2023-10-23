import React, { Children, createContext, useEffect, useState } from 'react';
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, deleteUser, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';


 export const AuthContext=createContext()
const AuthProvider = ({children}) => {
    const auth=getAuth(app)
    const googleProvider= new GoogleAuthProvider();
    const facebookProvider= new FacebookAuthProvider();
    const [user,setUser]=useState(null)
    const [loading, setLoading]=useState(true)
    const User=auth.currentUser;
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const googleLogIn=()=>{
        return signInWithPopup(auth, googleProvider)
    }

    const facebookLogIn=()=>{
        return signInWithPopup(auth,facebookProvider)
    }

    const logIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut=()=>{
        return signOut(auth)
    }
    const deleteProfile=()=>{
        return deleteUser(User)
    }

    useEffect(()=>{
        const uns=onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false)
        })

        return ()=>{
            return uns();
        }
    },[])



    const authInfo={
        user,
        loading,
        createUser,
        googleLogIn,
        facebookLogIn,
        logIn,
        logOut,
        deleteProfile,


    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;
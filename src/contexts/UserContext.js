import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app)

const UserContext = ({ children }) => {

    const [user, setUser] = useState(null)

    const createEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    const createWithGmail = (provider) => {
        return signInWithPopup(auth, provider)
    }

    const createWithGithub = (provider) => {
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('state change', currentUser)
            setUser(currentUser)
        })

        return () => unSubscribe();

    }, [])



    const authInfo = { user, signInEmail, logOut, createWithGmail, createWithGithub, createEmail, }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;
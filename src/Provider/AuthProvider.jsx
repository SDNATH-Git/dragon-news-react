import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // console.log(user);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const Login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (updatedata) => {
        return updateProfile(auth.currentUser, updatedata);
    }

    useEffect(() => {
        const Unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            Unsubscribe();
        }
    }, [])

    const Logout = () => {
        return signOut(auth);
    }


    const AuthData = {
        user,
        setUser,
        createUser,
        Login,
        Logout,
        loading,
        setLoading,
        updateUser,
    }

    return (
        <div>
            <AuthContext value={AuthData}>
                {children}
            </AuthContext>
        </div>
    );
};

export default AuthProvider;
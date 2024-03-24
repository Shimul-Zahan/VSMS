import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';
import auth from './firebase.config';

export const MyContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvide = new GoogleAuthProvider();

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvide)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser, 'current user');
            setUser(currentUser);
            setLoading(false)
            const userInfo = {
                name: currentUser.reloadUserInfo?.displayName,
                email: currentUser.reloadUserInfo?.email,
                image: currentUser.reloadUserInfo?.photoUrl,
                role: 'user',
                verifyEmail: true,
                from: 'goole'
            }
            console.log(userInfo);
            const res = axios.post('http://localhost:8000/login', userInfo);
            console.log(res.data);
        })
        return (() => {
            unSubscribe();
        })
    }, [])

    // sidebar works here
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // const toggleSidebar = () => {
    //     setIsSidebarOpen(!isSidebarOpen);
    // };

    // darkmode // for darkmode here
    const [darkMode, setDarkMode] = useState(() => {
        const storedPreference = localStorage.getItem('darkMode');
        return storedPreference ? JSON.parse(storedPreference) : false;
    });

    useEffect(() => {
        const htmlElement = document.documentElement;
        if (darkMode) {
            htmlElement.classList.add('dark');
        } else {
            htmlElement.classList.remove('dark');
        }
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }, [darkMode]);

    const contenxtProperty = {
        user,
        loading,
        googleLogin,
        logOut,
        setIsSidebarOpen,
        isSidebarOpen,
        setDarkMode,
        darkMode
    }

    return (
        <MyContext.Provider value={contenxtProperty}>
            {children}
        </MyContext.Provider>
    )
}

export default AuthProvider
import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext()

export default function AuthProvider({ children }) {
    const auth = getAuth(app);
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const provider = new GoogleAuthProvider();

    const googlesignin = () => {
        return signInWithPopup(auth, provider)
    }

    const signinfunction = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const profileUpdate = (newData) => {
        return updateProfile(auth.currentUser, newData)
    }
    const userlogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const currentuser = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)

        })
        return () => {
            currentuser()
        }
    }, [])

    const logoutfunction = () => {
        return signOut(auth)
    }

    const authData = {
        signinfunction,
        setUser,
        user,
        profileUpdate,
        userlogin,
        logoutfunction,
        loading,
        googlesignin
    }
    return <AuthContext value={authData}>{children}</AuthContext>
}
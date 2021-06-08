import React, {useEffect, useState} from "react"
import firebase from 'firebase/app'
import {auth, database} from "../firebase/firebase"
import {authContextType, ChildrenProps, SingleMovieResponseType} from "../types/types"



// Context creation
export const AuthContext = React.createContext<authContextType | null>(null)


export const AuthProvider: React.FC<ChildrenProps> = ({children}) => {
    const [currentUser, setCurrentUser] = useState<null | firebase.User>(null)
    const [loading, setLoading] = useState(true)

    async function signup(email: string, password: string) {
        const dbDefaults = {
            favorites: [],
        }

        const signData = await auth
            .createUserWithEmailAndPassword(email, password)

        // Set default data for new users
        await database.collection("users").doc(currentUser?.uid).set(dbDefaults)

        return signData
    }

    //login user
    function login(email: string, password: string) {
        return auth
            .signInWithEmailAndPassword(email, password)
    }

    const getUserData = async () => {
        /* Get user data from database */
        const userData = database.collection("users").doc(currentUser?.uid)
        const doc = await userData.get()

        if (!doc.exists) {
            return null
        }

        return doc.data()
    }

    const addUserContent = async (movie: SingleMovieResponseType, isExist?: boolean) => {
        /* Add content to user favorites  */
        // prevent making changes to other data

        const userData = await database.collection("users").doc(currentUser?.uid)
        const doc = await userData.get()
        let data = doc.data()

        if (isExist && data) {
            // to remove from data if already exist
            data['favorites'] = data['favorites'].filter((item: SingleMovieResponseType) => item.id !== movie.id)
            return userData.set({
                ...data,
                ["favorites"]: data["favorites"],
            })
        }

        if (data?.favorites) {
            return userData.set({
                favorites: [...data.favorites, movie]
            })
        }
        return userData.set({
            favorites: [movie]
        })

    }

    function logout() {
        return auth
            .signOut()
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setLoading(false)
            setCurrentUser(user)
        })
        return unsubscribe
    }, [])

    const value = {
        currentUser,
        signup,
        logout,
        login,
        getUserData,
        addUserContent
    }



    return (
        // @ts-ignore
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

// Use context custom hook
export const useAuth = () => {
    const context = React.useContext(AuthContext)
    if (!context) {
        throw new Error(`useFilms must be used within FilmsProvider`)
    }
    return context
}

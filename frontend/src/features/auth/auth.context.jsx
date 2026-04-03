import { createContext, useState } from "react";

export const AuthContext = createContext()

export const AuthProvider = ( {children}) => {

    const [user, setUser] = useState(null) // starting mai koi bhi user logged in nhi hot ah 
    const [loading, setLoading] = useState(false) /// jab user ko rehydrate karte hai tb ise by default true rakhte hai
     
    return (
        <AuthContext.Provider value = {{user,setUser,loading,setLoading}} >
            {children}
        </AuthContext.Provider>
    )
}

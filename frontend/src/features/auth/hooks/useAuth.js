import { useContext } from "react";
import { AuthContext } from "../auth.context";
import { login, register, logout, getme } from "../services/auth.api"

export const useAuth = () => {
      
    const context = useConext(AuthContext)
    const { user, setUser, loading, setLoading } = context

    const handleLogin = async ({ email, password}) => {
        setLoading(true)
        const data = await login ( {email, password} ) 
        setUser(data.user)
        setLoading(false)
    }
}
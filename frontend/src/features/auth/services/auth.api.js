// frontend ko backend se communicate karne k liye ek package require hota ha that is axios
import axios from 'axios'

const api = axios.create({
    baseURL : "http://localhost:3000",
    withCredentials : true
})

export async function register({username, email, password}){
     try{

         // taking these 3 para from user as an object
    const response = await api.post('http://localhost:3000/api/auth/register', {
        username ,email, password
        //  axios cookies ka access nhi deta server ko isliye ise 
        // hum ek flag k sath bhejte hai which is withcredentials true  
    }) 

     }
     catch (err) {
        console.log(err)
     }

}

export async function login({email, password}){
    try {
        const response = await api.post('http://localhost:3000/api/auth/login',{
            email, password
        })
        return response.data
    }catch (err){
       console.log(err)
    }
}

export async function logout(){
    try{
        const response = await api.get('http://localhost:3000/api/auth/logout')
        return response.data
    }catch (e){
        console.log(e)
    }
}

export async function getme(){
    try{
        const response = await api.get('http://localhost:3000/api/auth/get-me')
        return response.data
    }catch (e){
        console.log(e)
    }
}
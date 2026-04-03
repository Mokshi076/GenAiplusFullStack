import { RouterProvider } from "react-router";
import { router } from "./app.routes.jsx";
import { AuthProvider } from  "./features/auth/auth.context.jsx"




function App() {  

  return (
    // poori app ko authProvider mai wrap kar diya isse 
    // value = {{user,setUser,loading,setLoading}} iska access poori applicarion ko mil jayega
      <AuthProvider>
        < RouterProvider router={router} />
      </AuthProvider>


  )
}

export default App

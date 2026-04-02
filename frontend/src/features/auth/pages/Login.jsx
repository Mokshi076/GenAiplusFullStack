import React from 'react'
import "./auth.form.scss"
import { useNavigate,Link } from 'react-router'


const Login = () => {
  
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <main>
        <div className="form-container">
          <h1>Login</h1>

          <form onSubmit = {handleSubmit}>
            <div className="input-group">

              <label htmlFor="email">email</label>
              <input type="email"  id="email" name="email" placeholder="enter your email" />

            </div>
            <div className="input-group">

              <label htmlFor="Password">Password</label>
              <input type="Password"  id="Password" name="Password" placeholder="enter your Password" />

            </div>
            <button className="button primary-button" >login</button>
          </form>
          <p>Account does not exist. <Link to={"/Register"}>Register</Link></p>
        </div>
    </main>
  )
}

export default Login
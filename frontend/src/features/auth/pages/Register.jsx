import React from 'react'
import "./auth.form.scss"
import { useNavigate,Link } from 'react-router'


const Register = () => {

  
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <main>
        <div className="form-container">
          <h1>Register</h1>

          <form onSubmit = {handleSubmit}>
            <div className="input-group">

              <label htmlFor="Username">Username</label>
              <input type="text"  id="Username" name="Username" placeholder="enter Username" />

            </div>

            <div className="input-group">

              <label htmlFor="email">email</label>
              <input type="email"  id="email" name="email" placeholder="enter your email" />

            </div>

            <div className="input-group">

              <label htmlFor="Password">Password</label>
              <input type="Password"  id="Password" name="Password" placeholder="enter your Password" />

            </div>
            <button className="button primary-button" >Register</button>
          </form>
          <p>Already have an account?  <Link to={"/Login"}>Login</Link></p>
        </div>
    </main>
  )
}

export default Register
import React from 'react'

const Login = () => {
  return (
    <div>
      <div className="">
        <h4 className="center">Login</h4>
        <form id="login">
          <label htmlFor="email">Email</label>
          <input type="email" name="email"/>
          <label htmlFor="password">Password</label>
          <input type="password" name="password"/>
          <input type="submit" />
        </form>
      </div>
    </div>
  )
}

export default Login

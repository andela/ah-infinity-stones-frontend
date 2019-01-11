import React from 'react';
import Logo from '../logo.png'
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="Navbar container">
      <Link to="/"><img src={Logo} alt="Authors Haven Logo"/></Link>
        <ul className="container">
          <li><NavLink to="/">Home</NavLink></li>
          <li><input type="text" className="form-control" placeholder="Search"></input></li>
          <li><NavLink to='/login'>Login</NavLink></li>
          <li><NavLink to='/articles'>Articles</NavLink></li>
        </ul>
      </div>
    </nav> 
  )
}
export default Navbar

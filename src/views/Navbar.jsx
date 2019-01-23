import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../logo.png';

const isLoggedIn = () => {
  const token = localStorage.getItem('Token');
  if (token == null || token === undefined) {
    return <li><NavLink to="/login">Login</NavLink></li>;
  }
  return (
    <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {localStorage.getItem('user')}

      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
        <button className="dropdown-item" type="button">Profile</button>
        <button className="dropdown-item" type="button">My Stories</button>
        <button className="dropdown-item" type="button">Logout</button>
      </div>
    </div>
  );
};

const Navbar = () => (
  <nav className="nav-wrapper red darken-3">
    <div className="Navbar container">
      <Link to="/"><img src={Logo} alt="Authors Haven Logo" /></Link>
      <ul className="container">
        <li><NavLink to="/">Home</NavLink></li>
        <li><input type="text" className="form-control" placeholder="Search" /></li>
        <li><NavLink to="/articles">Articles</NavLink></li>
        { isLoggedIn()}
      </ul>

    </div>
  </nav>
);
export default Navbar;

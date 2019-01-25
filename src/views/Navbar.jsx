import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../logo.png';

const Navbar = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const loginPath = window.location.pathname === '/login';
  const signupPath = window.location.pathname === '/signup';
  return (
    <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
      <Link className="navbar-brand" to="/"><img src={Logo} alt="Logo" /></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active"><NavLink className="nav-link" to="#">About</NavLink></li>
          <li className="nav-item dropdown">
            <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Categories</NavLink>
          </li>
        </ul>
        <form className="navbar-form navbar-right" id="nav-search-form" action="">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search" />
            <div className="input-group-btn">
              <button className="btn btn-success" id="home-search-btn" type="button"><span><i className="fas fa-search" /></span></button>
            </div>
          </div>
        </form>
        <ul className="nav navbar-nav navbar-right">
          {isLoggedIn
            && !loginPath
            && <li><NavLink to="/logout">Logout</NavLink></li>
          }
          {!isLoggedIn
            && !loginPath && <li><NavLink to="/login">Login</NavLink></li>
          }
          {!isLoggedIn
            && !signupPath && <li><NavLink to="/signup">Sign Up</NavLink></li>
          }
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;

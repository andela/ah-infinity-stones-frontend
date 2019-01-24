/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './LoginForm.scss';
import SocialLogin from '../../../views/Login/SocialLogin';

const LoginForm = ({
  handleLogin, handleChange, errorClass,
  errors, submitEnabled, email, password,
}) => (
    <div className="container" id="loginForm">
      <form>
        <div className="head">Login</div>
        <hr />
        <div className="form-group">
          <label htmlFor="email">
            Email address
    </label>
          <input
            type="email"
            className={`form-control ${errorClass(errors.inputErrors.email)}`}
            name="email"
            value={email}
            placeholder="Enter email"
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">{errors.inputErrors.email}</div>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className={`form-control ${errorClass(errors.inputErrors.password)}`}
            name="password"
            value={password}
            placeholder="Enter Password"
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">{errors.inputErrors.password}</div>
        </div>
        <button
          type="submit"
          className="btn btn-primary login-button"
          onClick={handleLogin}
          disabled={!submitEnabled}
        >
          Submit
      </button>
      <Link to="/reset" className="forgot">Forgot password?</Link>
      <p id="signup">
        Dont have an account?
      {' '}
        <Link to="/register">Sign Up</Link>
      </p>

      </form>
    </div>


  );
LoginForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  errorClass: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    inputErrors: PropTypes.object.isRequired,
  }).isRequired,
  submitEnabled: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

export default LoginForm;

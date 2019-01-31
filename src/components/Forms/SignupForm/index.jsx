import React from 'react';
import PropTypes from 'prop-types';

const SignupForm = ({
  handleChange, handleSubmit, handleSuccess, messages, error,
}) => (
  <form onSubmit={handleSubmit} className='authenticationForm'>
    <div className='head'>Signup</div>
    <hr />
    <div className='form-group'>
      <label htmlFor='username'>Username</label>
      <input
        type='text'
        name='username'
        onChange={handleChange}
        placeholder='Enter username'
        className='form-control'
        required
      />
      <span id='username'>{messages.usernameError}</span>
    </div>
    <div className='form-group'>
      <label htmlFor='email'>Email</label>
      <input
        type='email'
        name='email'
        onChange={handleChange}
        placeholder='Enter email'
        className='form-control'
        required
      />
      <span id='email'>{messages.emailError}</span>
    </div>
    <div className='form-group'>
      <label htmlFor='password'>Password</label>
      <input
        type='password'
        name='password'
        onChange={handleChange}
        placeholder='Enter password'
        className='form-control'
        required
      />
      <span id='password'>{messages.passwordError}</span>
    </div>
    <div className='form-group'>
      <label htmlFor='cpassword'>Confirm Password</label>
      <input
        type='password'
        name='cpassword'
        onChange={handleChange}
        placeholder='Confirm password'
        className='form-control'
        required
      />
      <span id='cpassword'>{messages.cpasswordError}</span>
    </div>
    <div className='form-group'>
      <button type='submit' className='btn btn-primary login-button' disabled={handleSuccess}>
        Sign Up
      </button>
    </div>
    <div className='form-group'>
      <span id='serverMsgs'>
        {error.email || error.username ? 'Email or username already in use' : ''}
      </span>
    </div>
  </form>
);
SignupForm.propTypes = {
  signupAction: PropTypes.func,
  signedUp: PropTypes.bool,
  success: PropTypes.object,
  error: PropTypes.object,
};

export default SignupForm;

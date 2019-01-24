import React, { Component } from 'react';
import './ResetPassword.scss';
import ResetPasswordForm from '../../Forms/PasswordResetform/index';

class ResetPassword extends Component {
  render() {
    return (
      <div className="form_container">
        <h1>Reset Password</h1>
        <hr />
        <h5>
          <p>

          </p>

        </h5>

        <ResetPasswordForm />


      </div>
    );
  }
}


export default ResetPassword;

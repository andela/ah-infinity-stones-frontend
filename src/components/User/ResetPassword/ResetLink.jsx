import React, { Component } from 'react';
import './ResetPassword.scss';
import ResetLinkForm from '../../Forms/PasswordResetform/Resetlink';

class ResetLink extends Component {
  render() {
    return (
      <div className="form_container">
        <h1>Reset Password Email</h1>
        <hr />
        <h5>
          <p>
          </p>
        </h5>

        <ResetLinkForm />
      </div>
    );
  }
}

export default ResetLink;

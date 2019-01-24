/* eslint-disable no-useless-escape */
import React from 'react';
import './ResetPassword.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { requestPasswordResetUpdateStart } from '../../../redux/actions/passwordResetAction';


export class ResetPasswordForm extends React.Component {
  state = {
    password: '',
    repeatPassword: '',
    match: null,
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('repeatPassword').value;
    if (password === confirmPassword) {
      this.setState({ match: true });
    } else {
      this.setState({ match: false });
    }
  }

  handpasswordlSubimt = (e) => {
    e.preventDefault();
    const { password } = this.state;
    this.props.requestPasswordResetUpdateStart({ password });
  }

  validateEmail(inputText) {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return inputText.match(mailformat);
  }

  render() {
    return (
      this.props.success ? <Redirect to="/login" />
        : (
          <div>
            <div className="alert">{this.props.success}</div>
            {this.state.match === false ? <div className="alert">Passwords Don't Match</div> : null}
            <form>
              <span className="new_password_label">
                New password:
                </span>
              <input id="password" type="password" name="password" className="input" placeholder="Enter Password" onChange={this.handleChange} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required />
              <br />
              <br />
              <span className="repeat_password_label">
                Repeat password:
                </span>
              <input id="repeatPassword" type="password" name="repeatPassword" className="input" placeholder="Repeat Password" onChange={this.handleChange} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required />
              <br />
              <br />
              <span>
                <button type="button" disabled={!this.state.match} className={this.state.match ? 'button-success' : 'button-success disabled'} onClick={this.handpasswordlSubimt}>Submit</button>
              </span>

            </form>

          </div>
        )
    );
  }
}


const mapStateToProps = state => ({
  success: state.passwordReset.success,
});

ResetPasswordForm.propTypes = {
  success: PropTypes.string,
  error: PropTypes.string,
  requestPasswordResetUpdateStart: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

const actionCreators = { requestPasswordResetUpdateStart };


export default connect(mapStateToProps, actionCreators)(ResetPasswordForm);

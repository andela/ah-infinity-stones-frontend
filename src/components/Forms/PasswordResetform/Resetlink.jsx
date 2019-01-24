/* eslint-disable no-useless-escape */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './ResetPassword.scss';
import { passwordReset } from '../../../services/passwordResetmail';
import { requestPasswordResetStart } from '../../../redux/actions/passwordResetAction';


class ResetlinkForm extends React.Component {
    state = {
      email: '',
      error: null,
      success: null,
    }

    handleChange = (e) => {
      const { name, value } = e.target;
      this.setState({ [name]: value });
    };

    handleEmailSubimt = (e) => {
      e.preventDefault();
      const { email } = this.state;
      this.props.requestPasswordResetStart({ email });

      if (!this.validateEmail(email)) {
        this.setState({ error: 'You have entered an invalid email address!' });
        return;
      }
      this.setState({ error: null });
      passwordReset(email).then((response) => {
        this.setState({ success: response.Message });
      }).catch((error) => {
    
      });
      this.setState({ success: null });
    };


    validateEmail(inputText) {
      const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return inputText.match(mailformat);
    }

    render() {
      const { error, success } = this.state;
      return (
        <div>
          <form>
            {error ? <p>{error}</p> : ''}
            {success ? <p>{success}</p> : ''}
            <span className="new_password_label">
                        Enter your email:
            </span>

            <input id="email" type="text" name="email" className="input" value={this.state.email} onChange={this.handleChange} />
            <br />
            <br />

            <br />
            <span>
              <button type="button" className="button-success" onClick={this.handleEmailSubimt}>Submit</button>
            </span>
          </form>

        </div>

      );
    }
}

const mapStateToProps = state => ({
  reset: state.passwordReset,
});

ResetlinkForm.propTypes = {
  success: PropTypes.string,
  error: PropTypes.string,
  requestPasswordResetStart: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

const actionCreators = { requestPasswordResetStart };


export default connect(mapStateToProps, actionCreators)(ResetlinkForm);

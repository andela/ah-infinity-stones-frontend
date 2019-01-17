import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import validator, {handleSuccess} from './validate';
import { successMessage} from '../../helpers/messages';
import { signupRequestAction } from '../../redux/actions/signupActions';
import SignupForm from '../../components/Forms/SignupForm'
import Loader from '../Loader';

class SignUp extends Component{
    state = {
      username: '',
      email: '',
      password:'',
      cpassword: ''
    };
    pageLoading = {
      loading: false,
    };
  handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  clearInputs = () => {
    this.setState({
      ...this.state,
      username: '',
      email: '',
      password: '',
      cpassword: ''
    });
    }
    handleSubmit = (e) => {
      e.preventDefault();
      let formValidate = validator(this.state);
      if(document.getElementById('serverMsgs').innerHTML === ""){
        this.pageLoading.loading = true;
      }
      else{
        this.pageLoading.loading = false;
      }
      if(formValidate.success !== ""){
      const { signupAction  } = this.props;
      signupAction (this.state);
    }
    };
    render(){
        let{error, success} = this.props;
        let messages = validator(this.state);
        if (success.Message) {
        this.clearInputs();
        successMessage(success.Message);
        return <Redirect to="/" />;
        }
        return (
            <div className="container" id="loginContainer">
                {this.pageLoading.loading === true ? <Loader /> : null}
                <SignupForm
                    handleChange = {this.handleChange}
                    handleSubmit = {this.handleSubmit}
                    messages = {messages}
                    error = {error}
                    handleSuccess = {handleSuccess(this.state)}
                />
            </div>
        )
    }
}
const mapStateToProps = state => ({
  error: state.signupReducer.error,
  success: state.signupReducer.success,
  payload: state.signupReducer.payload,
  signedUp: state.signupReducer.signedUp
});

const mapDispatchToProps = { signupAction: signupRequestAction};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
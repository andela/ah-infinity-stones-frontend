import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GoogleLogin from 'react-google-login';
import { socialLoginRequest } from '../../redux/actions/socialLoginActions';
import socialConfigs from '../../helpers/socialAuthHelpers';

export class SocialLogin extends PureComponent {
  static propTypes = {
    socialLoginRequest: PropTypes.func.isRequired,
    success: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  };

  static defaultProps = {
    success: null,
  };

  handleTwitter = async (event) => {
    event.preventDefault();
    const { socialLoginRequest: login } = this.props;
    login('twitter');
  }

  handleFacebookLogin = async (event) => {
    event.preventDefault();
    const { socialLoginRequest: login } = this.props;
    login('facebook');
  }

  handleGoogleLogin = (response) => {
    const info = socialConfigs.google(response);
    const { socialLoginRequest: login } = this.props;
    login('google', info);
  };

  handleRedirect = () => { window.location.href = '/'; };

  render() {
    const { success } = this.props;
    return (
      <div className="social-auth">
        { success ? this.handleRedirect() : null }
        <button
          type="button"
          onClick={this.handleFacebookLogin}
          className="kep-login-facebook "
        >
          Facebook
        </button>
        <GoogleLogin
          clientId="31802512181-sh97b417crdhtjtuvabt05chc1e5tn9s.apps.googleusercontent.com"
          buttonText="Google"
          onSuccess={this.handleGoogleLogin}
          onFailure={this.handleGoogleLogin}
        />
        <button
          type="button"
          onClick={this.handleTwitter}
          id="twitter"
        >
          Twitter
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { socialLoginReducer: { success } } = state;
  return { success };
};

const mapDispatchToProps = { socialLoginRequest };

export default connect(mapStateToProps, mapDispatchToProps)(SocialLogin);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Alert } from 'reactstrap';
import PropTypes from 'prop-types';
import {
  getProfile,
  updateProfile,
} from '../../../redux/actions/profileActions';

class ProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: props.firstname || '',
      lastname: props.lastname || '',
      birthday: props.birthday || '',
      image: props.image || '',
      bio: props.bio || '',
      alertVisible: false,
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.toggleAlert = this.toggleAlert.bind(this);
  }

  componentWillMount() {
    const { getProfile } = this.props;
    getProfile();
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const {
      firstname, lastname, birthday, image, bio,
    } = this.state;
    const data = {
      firstname,
      lastname,
      birthday,
      image,
      bio,
    };
    const { updateProfile } = this.props;
    updateProfile(data);
  }

  toggleAlert() {
    const { alertVisible } = this.state;
    this.setState({ alertVisible: !alertVisible });
  }

  raiseAlert() {
    this.setState({ alertVisible: true });
  }

  render() {
    const {
      firstname,
      lastname,
      birthday,
      image,
      bio,
      alertVisible,
    } = this.state;

    return (
      <section>
        <div className='row'>
          <div className='col-sm-12'>

            <p>
              <strong>
                <i className='fa fa-pencil' />
                {' '}
Please edit your profile and save changes.
              </strong>
            </p>
            <form onSubmit={this.onSubmit}>
              <div className='m-profile'>
                <span>First Name</span>
                <br />
                <input
                  type='text'
                  name='firstname'
                  value={firstname}
                  onChange={this.onChange}
                />
              </div>
              <div className='m-profile'>
                <span>Last Name</span>
                <br />
                <input
                  type='text'
                  name='lastname'
                  value={lastname}
                  onChange={this.onChange}
                />
              </div>
              <div className='m-profile'>
                <span>Birthday</span>
                <br />
                <input
                  type='text'
                  name='birthday'
                  value={birthday}
                  onChange={this.onChange}
                />
              </div>
              <div className='m-profile'>
                <span>Image</span>
                <br />
                <input
                  type='text'
                  name='image'
                  value={image}
                  onChange={this.onChange}
                />
              </div>

              <div className='m-profile'>
                <span>Bio</span>
                <br />
                <textarea
                  name='bio'
                  value={bio}
                  onChange={this.onChange}
                  rows='4'
                  placeholder='I am..'
                />
              </div>

              <br />
              <Alert
                color='warning'
                isOpen={alertVisible}
                toggle={this.toggleAlert}
                className='p-5'
              >
                <h2 className='alert-msg'>
                  You successfully updated your profile!
                </h2>
              </Alert>
              <button
                type='submit'
                onClick={this.raiseAlert.bind(this)}
                className='button button-theme'
              >
                <i className='mdi mdi-floppy mdi-24px' />
                {' '}
Update
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

ProfileForm.propTypes = {
  getProfile: PropTypes.func.isRequired,
  updateProfile: PropTypes.func.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  birthday: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  user: state.profileReducer.user,
  item: state.profileReducer.item,
});

export default connect(
  mapStateToProps,
  { updateProfile, getProfile },
)(ProfileForm);

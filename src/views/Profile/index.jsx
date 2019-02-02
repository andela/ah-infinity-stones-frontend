import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../../components/Profile/containers/Button';
import ProfileItem from '../../components/Profile/containers/ProfileItem';
import LoadingProfile from '../../components/Profile/containers/LoadingProfile';
import {
  firstname,
  lastname,
  birthday,
  bio,
  followers,
  image,
} from '../../services/profile.service';
import ProfileForm from '../../components/Profile/containers/ProfileForm';
import { getProfile } from '../../redux/actions/profileActions';

class App extends Component {
  componentWillMount() {
    this.props.getProfile();
  }
  render() {
    return (
      <div>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12'>
              <Button />
              <hr />
              <h4 className='theme'>My Profile</h4>
              <LoadingProfile />
              <ProfileItem />
              <hr />
            </div>

            <div className='col-sm-6' />
            <div className='col-sm-6'>
              <ProfileForm
                firstname={firstname}
                lastname={lastname}
                birthday={birthday}
                bio={bio}
                followers={followers}
                image={image}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { getProfile },
)(App);

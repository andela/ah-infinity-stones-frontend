import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProfile } from '../../../redux/actions/profileActions';

let Button = ({ getProfile }) => (
  <div>
    <div className='jumbotron text-center'>
      <h1>My Profile</h1>
    </div>
    <button type='button' className='button'>
      <span className='theme'>
        <i className='mdi mdi-book-open-page-variant mdi-24px' />
      </span>
      {' '}
      My Articles
    </button>
    {' '}
    <button type='button' onClick={getProfile} className='button button-theme'>
      <i className='mdi mdi-reload mdi-24px' />
      Reload
    </button>
  </div>
);

Button.propTypes = {
  getProfile: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  getProfile,
};

Button = connect(
  null,
  mapDispatchToProps,
)(Button);

const Compo = Button;

export default Compo;

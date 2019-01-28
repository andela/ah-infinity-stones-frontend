import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProfile } from '../../../redux/actions/profileActions';

let Button = ({ getProfile }) => (
  <div>
    <p>&nbsp;</p>
    <button type='button' className='button'>
      <span className='theme'>
        <i className='mdi mdi-book-open-page-variant mdi-24px' />
      </span>
      {' '}
      My Articles
    </button>
    {' '}
    <Link to='/bookmarks'>
      <button type='button' className='button'>

        <span className='theme'>
          <i className='mdi mdi-bookmark mdi-24px' />
        </span>
        {' '}
        Bookmarks

      </button>
    </Link>
    {' '}
    <button type='button' onClick={getProfile} className='button button-theme'>
      <span className='theme'>
        <i className='mdi mdi-reload mdi-24px' />
      </span>
      {' '}
      Refresh
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

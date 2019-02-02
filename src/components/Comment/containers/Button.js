import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getComments, getTopic } from '../../../redux/actions/commentActions';

let Button = ({ getComments, getTopic }) => (
  <div>
    <div className='jumbotron text-center'>
      <h1>Comments</h1>
    </div>
    <button type='button' className='button'>
      <span className='theme'>
        <i className='mdi mdi-book-open-page-variant mdi-24px' />
      </span>
      {' '}
      My Articles
    </button>
    {' '}
    <button type='button' onClick={getComments} className='button button-theme'>
      <i className='mdi mdi-reload mdi-24px' />
      Reload Comments
    </button>
    {' '}
    <button type='button' onClick={getTopic} className='button button-theme'>
      <i className='mdi mdi-send mdi-24px' />
      Get Topic
    </button>
  </div>
);

Button.propTypes = {
  getComments: PropTypes.func.isRequired,
  getTopic: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  getComments,
  getTopic,
};

Button = connect(
  null,
  mapDispatchToProps,
)(Button);

const Compo = Button;

export default Compo;

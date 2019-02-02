import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getComments } from '../../../redux/actions/commentActions';

let Button = ({ getComments }) => (
  <div>
    <button type='button' onClick={getComments} className='btn btn-link'>
      <i className='mdi mdi-reload mdi-24px' />
      {' '}
Reload Comments
    </button>
    {' '}
  </div>
);

Button.propTypes = {
  getComments: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  getComments,
};

Button = connect(
  null,
  mapDispatchToProps,
)(Button);

const Compo = Button;

export default Compo;

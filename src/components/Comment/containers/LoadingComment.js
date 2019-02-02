import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import img from '../../../assets/images/loading_spinner.gif';

let LoadingComment = ({ loading }) => (loading ? (
  <div style={{ textAlign: 'center' }}>
    <img src={img} alt='loading' />
  </div>
) : null);

LoadingComment.propTypes = {
  loading: PropTypes.bool.isRequired,
};
const mapStateToProps = state => ({ loading: state.commentReducer.loading });

LoadingComment = connect(
  mapStateToProps,
  null,
)(LoadingComment);

const Compo = LoadingComment;

export default Compo;

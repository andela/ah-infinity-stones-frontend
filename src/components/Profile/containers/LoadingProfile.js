import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import img from '../../../assets/images/loading_spinner.gif';

let LoadingProfile = ({ loading }) => (loading ? (
  <div style={{ textAlign: 'center' }}>
    <img src={img} alt='loading' />
  </div>
) : null);

// let LoadingProfile = ({ loading }) => {
//     <div style={{ textAlign: 'center' }}>
//       <img src={img} alt='loading' />
//     </div>
//     loading ? (<p>Loading</p>):(<p>Not loading</p>)
// };

LoadingProfile.propTypes = {
  loading: PropTypes.bool.isRequired,
};
const mapStateToProps = state => ({ loading: state.profileReducer.loading });

LoadingProfile = connect(
  mapStateToProps,
  null,
)(LoadingProfile);

const Compo = LoadingProfile;

export default Compo;

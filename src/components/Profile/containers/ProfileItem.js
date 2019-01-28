import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function buffer(item, val = null) {
  localStorage.setItem(item, val);
}

let ProfileItem = ({ item, user }) => (item ? (
  <section>
    <div className='container'>
      <div className='row'>
        <div className='col-sm-12'>
          <div className='profile-list'>
            <img className='icon-user' src={item.image} alt='' />
            {buffer('image', item.image)}
            <h5 className='theme'>
@
              {user.username}
            </h5>
            <strong>
              <i className='mdi mdi-email-variant' />
            </strong>
            {' '}
            <a href={`mailto:${user.email}`} className='colored'>
              {user.email}
            </a>
            <br />
            <strong>Firstname: </strong>
            <i>{item.firstname}</i>
            {buffer('firstname', item.firstname)}
            <br />
            <strong>Lastname: </strong>
            <i>{item.lastname}</i>
            {buffer('lastname', item.lastname)}
            <br />
            <strong>Birthday: </strong>
            <i>{item.birthday}</i>
            {buffer('birthday', item.birthday)}
            <br />
            <strong>Bio: </strong>
            <i>{item.bio}</i>
            {buffer('bio', item.bio)}
            <br />
            <strong>Followers: </strong>
            <i>{item.followers}</i>
            {buffer('followers', item.followers)}
          </div>
        </div>
      </div>
    </div>
  </section>
) : null);

ProfileItem.propTypes = {
  item: PropTypes.arrayOf(PropTypes.string).isRequired,
  user: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = state => ({
  user: state.profileReducer.user,
  item: state.profileReducer.item,
});

ProfileItem = connect(
  mapStateToProps,
  null,
)(ProfileItem);

const Compo = ProfileItem;

export default Compo;

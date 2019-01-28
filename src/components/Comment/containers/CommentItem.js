import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

let CommentItem = ({ item0 }) => (item0 ? (
  <div>
    <hr className='theme' />
    <strong className='theme'>Recent Comment </strong>
    <br />
    <ul>
      <li>
        <img className='icon-user' src={item0.author.image} alt='' />
        <div>{item0.comment}</div>
        <span>
            By
          {' '}
          <strong>{item0.author.username}</strong>
        </span>
        <br />
      </li>
    </ul>
  </div>
) : null);

CommentItem.propTypes = {
  item0: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = state => ({
  item0: state.commentReducer.item0,
});

CommentItem = connect(
  mapStateToProps,
  null,
)(CommentItem);

const Compo = CommentItem;

export default Compo;

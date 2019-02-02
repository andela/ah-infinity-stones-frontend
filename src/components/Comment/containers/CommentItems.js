import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TimeAgo from 'react-timeago';
import CommentOne from './CommentOne';
import ThreadItems from './ThreadItems';
import { niceTime } from '../../../services/comment.service';

class CommentItems extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { items } = this.props;

    if (items) {
      return (
        <div>
          <hr className='theme' />
          <p>
            <strong className='theme'>All Comments</strong>
          </p>

          <ul>
            {items
              .reverse()
              .filter(c => c.thread === null)
              .map(it => (
                <li key={it.id}>
                  <img className='icon-user' src={it.author.image} alt='' />
                  <div>{it.comment}</div>
                  <span>
                    By
                    {' '}
                    <strong>{it.author.username}</strong>
                  </span>
                  <div className='pull-right'>
                    <TimeAgo
                      className='TimeAgo'
                      date={niceTime(it.created_at)}
                    />
                  </div>
                  <CommentOne thread={it.id} canReply />
                  <div className='threadly'>
                    <ThreadItems parent={it.id} />
                  </div>

                  <hr />
                </li>
              ))}
          </ul>
        </div>
      );
    }
    return <p>There are no comments on this article</p>;
  }
}

CommentItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapDispatchToProps = state => ({
  items: state.commentReducer.items,
});

export default connect(
  mapDispatchToProps,
  {},
)(CommentItems);

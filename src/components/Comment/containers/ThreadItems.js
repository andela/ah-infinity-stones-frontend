import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';
import TimeAgo from 'react-timeago';
import CommentOne from './CommentOne';
import { niceTime } from '../../../services/comment.service';

class ThreadItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alertVisible: false,
      toggleButtonMsg: 'All Replies',
    };
    this.toggleAlert = this.toggleAlert.bind(this);
    this.raiseAlert = this.raiseAlert.bind(this);
    this.raiseAlert = this.raiseAlert.bind(this);
  }

  toggleAlert() {
    const { alertVisible } = this.state;
    this.setState({ alertVisible: !alertVisible });
    if (!alertVisible) {
      this.setState({ toggleButtonMsg: 'Hide Replies' });
    } else {
      this.setState({ toggleButtonMsg: 'All Replies' });
    }
  }

  raiseAlert() {
    this.setState({ alertVisible: true });
  }

  render() {
    const { alertVisible, toggleButtonMsg } = this.state;
    const { items, parent } = this.props;

    if (items) {
      return (
        <div>
          <button
            type='button'
            className='btn btn-link'
            onClick={this.toggleAlert}
          >
            {toggleButtonMsg}
          </button>

          <Alert color='light' isOpen={alertVisible} className='p-5 m-0'>
            <strong>Replies</strong>
            <ul>
              {items
                .filter(c => c.thread === parent)
                .map(it => (
                  <li key={it.id}>
                    <img className='icon-user' src={it.author.image} alt='' />
                    <div>
                      {it.comment}
                      <br />
                    </div>
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
                    <CommentOne thread={it.id} canReply={false} />

                    <hr />
                  </li>
                ))}
            </ul>
          </Alert>
        </div>
      );
    }
    return <p>There are no comments on this article</p>;
  }
}

ThreadItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  parent: PropTypes.string.isRequired,
};

const mapDispatchToProps = state => ({
  items: state.commentReducer.items,
});

export default connect(
  mapDispatchToProps,
  {},
)(ThreadItems);

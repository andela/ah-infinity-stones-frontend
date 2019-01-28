import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Alert, Fade } from 'reactstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { postComment } from '../../../redux/actions/commentActions';
import { Surfer } from '../../../services/comment.service';

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: props.comment || '',
      thread: props.thread || null,
      pertinentMessage: props.message || '',
      pertinentMessageBtn: props.messageBtn || 'Post',
      alertVisible: false,
      fadeIn: false,
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.toggleAlert = this.toggleAlert.bind(this);
    this.toggleFadeIn = this.toggleFadeIn.bind(this);
    this.raiseAlert = this.raiseAlert.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const { comment, thread } = this.state;
    const data = {
      comment,
      thread,
    };
    const { postComment } = this.props;
    if (comment === '') {
      // do nothing
    } else {
      postComment(data);
      this.raiseAlert();
      setTimeout(() => {
        this.toggleAlert();
      }, 2000);
    }
    this.setState({ comment: '' });
  }

  toggleAlert() {
    const { alertVisible } = this.state;
    this.setState({ alertVisible: !alertVisible });
  }

  toggleFadeIn() {
    const { fadeIn } = this.state;
    this.setState({ fadeIn: !fadeIn });
  }

  raiseAlert() {
    this.setState({ alertVisible: true });
  }

  render() {
    const {
      comment,
      alertVisible,
      thread,
      pertinentMessage,
      pertinentMessageBtn,
      fadeIn,
    } = this.state;

    const placeholder = Surfer();
    return (
      <div>
        <p>{pertinentMessage}</p>
        <form onSubmit={this.onSubmit}>
          <div className='comment'>
            <br />
            <input type='hidden' name='thread' value={thread} />
            <textarea
              name='comment'
              value={comment}
              onChange={this.onChange}
              onClick={this.toggleFadeIn}
              rows='4'
              placeholder={placeholder}
            />
          </div>

          <Alert color='light' isOpen={alertVisible} className='p-2 m-b-2'>
            <h6 className='alert-msg'>
              <span className='theme'>
                <i className='mdi mdi-checkbox-marked-circle-outline mdi-24px' />
              </span>
              {' '}
              comment posted
            </h6>
          </Alert>

          {localStorage.getItem('Token') === null ? (
            <Fade in={fadeIn} tag='h5' className='mt-3'>
              <Link to='/login'>Please login to comment</Link>
            </Fade>
          ) : (
            <button type='submit' className='button button-theme'>
              {pertinentMessageBtn}
            </button>
          )}
        </form>
      </div>
    );
  }
}

CommentForm.propTypes = {
  postComment: PropTypes.func.isRequired,
  comment: PropTypes.string.isRequired,
  thread: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  messageBtn: PropTypes.string.isRequired,
};

const mapDispatchToProps = state => ({
  items: state.commentReducer.items,
  item: state.commentReducer.item,
});

export default connect(
  mapDispatchToProps,
  { postComment },
)(CommentForm);

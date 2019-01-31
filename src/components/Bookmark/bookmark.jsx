import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bookmarkRequest } from '../../redux/actions/bookmarkActions';
import './bookmarks.scss';
import { successMessage, errorMessage } from '../../helpers/messages';

export class BookMark extends PureComponent {
  state = { className: 'fas fa-bookmark' };

  static propTypes = {
    bookmarkRequest: PropTypes.func.isRequired,
    slug: PropTypes.string.isRequired,
    message: PropTypes.string,
    error: PropTypes.string,
    prevMessage: PropTypes.string,
    prevError: PropTypes.string,
  };

  static defaultProps = {
    message: '',
    error: '',
    prevMessage: '',
    prevError: '',
  };

  componentDidUpdate(prevProps) {
    const { message, error } = this.props;
    const { prevMessage, prevError } = prevProps;
    if (message !== prevMessage && message !== null) {
      this.handleSuccess(message);
    } else if (prevError !== error) {
      this.handleError(error);
    }
  }

  handleBookMark = (event) => {
    const {
      slug, bookmarkRequest: bookmark,
    } = this.props;
    event.preventDefault();
    bookmark(slug);
  };

  handleSuccess = (message) => {
    successMessage(message);
    this.setState({ className: 'fas fa-bookmark' });
  };

  handleError = (error) => {
    errorMessage(error);
    this.setState({ className: 'far fa-bookmark' });
  };

  render() {
    const { className } = this.state;
    return (
      <div>
        <button
          type='button'
          className='fav-btn'
          onClick={this.handleBookMark}
        >
          <i className={className} />
          &nbsp;
          <strong>Bookmark</strong>
        </button>

      </div>
    );
  }
}

const mapDispatchToProps = { bookmarkRequest };

const mapStateToProps = (state) => {
  const { bookmarkReducer: { message, error } } = state;

  return { message, error };
};


export default connect(mapStateToProps, mapDispatchToProps)(BookMark);

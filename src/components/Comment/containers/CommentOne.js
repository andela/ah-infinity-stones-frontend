import React, { Component } from 'react';
import { Alert, Collapse } from 'reactstrap';
import PropTypes from 'prop-types';
import CommentForm from './CommentForm';

class CommentOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alertVisible: false,
      collapse: true,
    };
    this.toggleAlert = this.toggleAlert.bind(this);
    this.raiseAlert = this.raiseAlert.bind(this);
  }

  toggleAlert() {
    const { alertVisible, collapse } = this.state;
    this.setState({ alertVisible: !alertVisible });
    this.setState({ collapse: !collapse });
  }

  raiseAlert() {
    this.setState({ alertVisible: true });
    this.setState({ collapse: false });
  }

  render() {
    const { alertVisible, collapse } = this.state;
    const { thread, canReply } = this.props;

    return (
      <div>
        <Alert
          color='light'
          isOpen={alertVisible}
          toggle={this.toggleAlert}
          className='p-0 m-b-0'
        >
          <CommentForm message='' thread={thread} />
        </Alert>

        <Collapse isOpen={collapse}>
          {canReply ? (
            <button
              type='button'
              onClick={this.raiseAlert}
              className='btn btn-link m-b-2'
            >
              <i className='mdi mdi-forum-outline mdi-24px' />
              Reply
            </button>
          ) : (
            <h6 className='Cannot Reply to Nested Comments'>&nbsp;</h6>
          )}
        </Collapse>
      </div>
    );
  }
}

CommentOne.propTypes = {
  thread: PropTypes.string.isRequired,
  canReply: PropTypes.bool.isRequired,
};

export default CommentOne;

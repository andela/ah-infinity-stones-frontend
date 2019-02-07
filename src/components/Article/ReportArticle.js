/* eslint-disable rule camelcase */
/* eslint-disable camelcase */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ReportArticle extends Component {
  constructor(props) {
    super(props);
    this.handleReport = this.handleReport.bind(this);
    this.state = {
      reportMessage: '',
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleReport() {
    const { reportMessage } = this.state;
    const {
      props: {
        article: { art_slug },
        reportArticleAction,
      },
    } = this.props;
    const message = {
      artSlug: art_slug,
      report_msg: reportMessage,
    };
    reportArticleAction(message);
  }

  render() {
    const { reportMessage } = this.state;
    const modalContent = (
      <div className='modal-dialog modal-dialog-centered' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>Report Article</h5>
            <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className='modal-body'>
            <form id='reportMessageForm'>
              <input type='radio' name='reportMessage' value='Spam' onClick={this.onChange} />
              Spam
              <br />
              <input
                type='radio'
                name='reportMessage'
                value='Harrassment'
                onClick={this.onChange}
              />
              Harrassment
              <br />
              <input
                type='radio'
                name='reportMessage'
                value='Rules Violation'
                onClick={this.onChange}
              />
              Rules Violation
            </form>
          </div>
          <div className='modal-footer'>
            <button type='button' className='btn btn-secondary' data-dismiss='modal'>
              Cancel
            </button>
            <button
              type='button'
              className='btn btn-danger'
              id='modalSubmitReport'
              data-dismiss='modal'
              disabled={!reportMessage}
              onClick={this.handleReport}
            >
              Report
            </button>
          </div>
        </div>
      </div>
    );
    return (
      <div
        className='modal fade'
        id='reportArticleModal'
        tabIndex='-1'
        role='dialog'
        aria-labelledby='reportArticleModalTitle'
        aria-hidden='true'
      >
        {modalContent}
      </div>
    );
  }
}

ReportArticle.propTypes = {
  props: PropTypes.objectOf(PropTypes.objectOf(PropTypes.any)).isRequired,
};

export default ReportArticle;

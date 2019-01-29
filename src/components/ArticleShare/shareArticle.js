import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share';


class SocialShare extends Component {
  componentDidMount() { }

  render() {
    const { title, slug } = this.props;
    return (
      <div className='row'>
        <WhatsappShareButton
          url={`${process.env.REACT_APP_FRONTEND_URL}articles/${slug}`}
          className='share-icon'
        >
          <WhatsappIcon size={30} round />
        </WhatsappShareButton>
        <TwitterShareButton
          url={`${process.env.REACT_APP_FRONTEND_URL}articles/${slug}`}
          title={title}
          className='share-icon'
        >
          <TwitterIcon size={30} round />
        </TwitterShareButton>
        <FacebookShareButton
          url={`${process.env.REACT_APP_FRONTEND_URL}articles/${slug}`}
          quote={title}
          className='share-icon'
        >
          <FacebookIcon size={30} round />
        </FacebookShareButton>
        <EmailShareButton
          url={`${process.env.REACT_APP_FRONTEND_URL}articles/${slug}`}
          title={title}
        >
          <EmailIcon size={30} round />
        </EmailShareButton>
      </div>
    );
  }
}

SocialShare.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default SocialShare;

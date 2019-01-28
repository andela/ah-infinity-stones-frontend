import React, { Component } from 'react';
import CommentsMenu from '../../components/Comment/containers/CommentsMenu';
import CommentItems from '../../components/Comment/containers/CommentItems';
import CommentItem from '../../components/Comment/containers/CommentItem';
import LoadingComment from '../../components/Comment/containers/LoadingComment';
import CommentForm from '../../components/Comment/containers/CommentForm';
import '../../components/Comment/Comment.scss';
import { getComments, getTopic } from '../../redux/actions/commentActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // if standalone, use below and import TopicItem
      // use slug: this.props.match.params.art_slug || null,
      // after integration, use
      slug: this.props.slug || null,
    };
  }

  buffer(item, val = null) {
    localStorage.setItem(item, val);
  }

  componentWillMount() {
    const slug = this.state.slug;
    const { getComments, getTopic } = this.props;
    getTopic();
    getComments();
    this.buffer('slug', slug);
  }

  render() {
    return (
      <section>
        <CommentsMenu />
        <LoadingComment />
        <CommentForm message='' />
        <CommentItem />
        <br />
        <CommentItems eyeColor='Green' />

        <hr className='theme' />
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
      </section>
    );
  }
}

App.propTypes = {
  getTopic: PropTypes.func.isRequired,
  getComments: PropTypes.func.isRequired,
};

export default connect(
  null,
  { getComments, getTopic },
)(App);


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import './Article.scss';
import { getOneArticleRequestAction, deleteArticleAction } from '../../redux/actions/articleActions';
import jwtDecode from '../../../node_modules/jwt-decode';

class Article extends Component {
  constructor(props) {
    super(props);
    this.handleEditArticle = this.handleEditArticle.bind(this);
    this.handleDeleteArticle = this.handleDeleteArticle.bind(this);
    this.author_only = React.createRef();
    this.reader_only = React.createRef();
  }

  componentDidMount() {
    if (localStorage.getItem('Token') === null) {
      if (Object.keys(this.props.article).length === 0) {
        this.props.getOneArticleRequestAction(this.props.match.params.art_slug);
        return <Redirect to={this.props.article.art_slug} />;
      }
      this.author_only.current.style.visibility = 'hidden';
      this.author_only.current.style.display = 'none';
    } else {
      const token = `${localStorage.getItem('Token')}`;
      const decoded = jwtDecode(token);
      const tokenUsername = decoded.username;
      if (Object.keys(this.props.article).length === 0) {
        this.props.getOneArticleRequestAction(this.props.match.params.art_slug);
        this.props.history.push(this.props.article.art_slug);
      } else {
          if (tokenUsername === this.props.article.author.username) {
            this.reader_only.current.style.visibility = 'hidden';
            this.reader_only.current.style.display = 'none';
          } else {
            this.author_only.current.style.visibility = 'hidden';
            this.author_only.current.style.display = 'none';
        }
      }
    }
  }

  componentDidUpdate() {
    if (this.props.article.author) {
      if (!(localStorage.getItem('Token') === null)) {
        const token = `${localStorage.getItem('Token')}`;
        const decoded = jwtDecode(token);
        const tokenUsername = decoded.username;
        if (tokenUsername === this.props.article.author.username) {
          this.reader_only.current.style.visibility = 'hidden';
          this.reader_only.current.style.display = 'none';
        } else {
          this.author_only.current.style.visibility = 'hidden';
          this.author_only.current.style.display = 'none';
        }
      }
    }
  }

  handleEditArticle() {
    this.props.history.push(this.props.article.art_slug+'/edit');
  }

  handleDeleteArticle(event) {
    event.preventDefault();
    this.props.deleteArticleAction(this.props.article.art_slug);
    this.props.history.push('/');
  }

  render() {
    const article = Object.keys(this.props.article).length ? (
      <div className="article">
        <div className="row article">
          <div className="col-2">
            <div className="article-data">
              <div className="row">
                <span className="article-likes">
                  Likes Count: {this.props.article.likes_count}
                </span>
              </div>
              <div className="row">
                <span className="article-dislikes">
                  Dislikes Count: {this.props.article.dislikes_count}
                </span>
              </div>
              <div className="row">
                <span className="article-rating">
                  Rating: {this.props.article.rating_average}
                </span>
              </div>
            </div>
          </div>
          <div className="col-8">
            <h4 className="article-title">{this.props.article.title}</h4>
            <div className="article-stats">
              <span className="article-author">{this.props.article.author.username}</span>
              <span className="article-read_time"> {this.props.article.read_time}-Min Read</span>
            </div>
            <div className="article-body">{ReactHtmlParser(this.props.article.body)}</div>
            <div className="article-tags">{this.props.article.tags}</div>
            <div className="row reader-only" ref={this.reader_only}>
              <div className="col article-report">
                <button type="button" id="reportArticleButton" className="btn btn-danger" onClick={this.handleEditArticle}><i className="mdi mdi-alert"></i>REPORT</button>
              </div>
              <div className="col article-like-dislike">
                <i className="mdi mdi-thumb-up-outline" />
                <i className="mdi mdi-thumb-down-outline" />
              </div>
              <div className="col" id="myRating">
                <i className="mdi mdi-star-outline" />
                <i className="mdi mdi-star-outline" />
                <i className="mdi mdi-star-outline" />
                <i className="mdi mdi-star-outline" />
                <i className="mdi mdi-star-outline" />
              </div>
            </div>
            <div className="col article-social_media_urls">
              <Link to={this.props.article.share_urls.twitter}>
                <i className="mdi mdi-twitter" />
              </Link>
              <Link to={this.props.article.share_urls.facebook}>
                <i className="mdi mdi-facebook" />
              </Link>
              <Link to={this.props.article.share_urls.email}>
                <i className="mdi mdi-gmail" />
              </Link>
            </div>
            <div id="article-comments">
              <h3>Comments</h3>
              <input type="text" placeholder="Write a comment..." />
            </div>
            <div />
          </div>
          <div className="col-2">
            <div className="author-only" ref={this.author_only}>
              <button type="button" id="editArticleButton" className="btn btn-primary" onClick={this.handleEditArticle}>
                <i className="mdi mdi-pencil" />
                EDIT
              </button>
              <button type="button" id="deleteArticleButton" className="btn btn-danger" onClick={this.handleDeleteArticle}>
                <i className="mdi mdi-delete" />
                DELETE
              </button>
            </div>
          </div>
        </div>
        <div className="row" id="featured-articles">
          <div className="col" />
          <div className="col" />
          <div className="col" />
        </div>
        <div className="row" id="article-comment">
          <div className="col-2" />
          <div className="col-8" />
          <div className="col-2" />
        </div>
      </div>
    ) : (
      <div className="article">Unfortunately, we cannot fetch this article. Try again later...</div>
    );
    return (
      <div className="container">
        {article}
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  const artSlug = ownProps.match.params.art_slug;
  if (state.articleReducer.articles.length === 0) {
    return {
      article: state.articleReducer.article,
    };
  }
  return {
    article: state.articleReducer.articles[0].find(article => article.art_slug === artSlug),
  };
};
const actionCreators = {
  getOneArticleRequestAction,
  deleteArticleAction,
};

export default connect(mapStateToProps, actionCreators)(Article);

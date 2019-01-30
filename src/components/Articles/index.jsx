import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { getAllArticlesRequestAction } from '../../redux/actions/articleActions';
import { errorMessage } from '../../helpers/messages';

class GetAllArticles extends Component {
  componentDidMount() {
    this.props.getAllArticlesRequestAction();
  }

  render() {
    const articles = this.props.articles[0];
    const { errorMsg } = this.props;
    if (errorMsg) {
      errorMessage(errorMsg);
    }
    const articlesList = articles && articles.length ? (
      articles.map(article => (
        <div
          className='card bg-light text-dark'
          classstyle='width: 18rem;'
          key={article.art_slug}
        >
          <div className='card-header'>
            <span className='card-title'>{article.title}</span>
          </div>
          <div className='card-body'>
            <p className='card-text'>{article.description}</p>
          </div>
          <div className='card-footer text-center'>
            <Link to={`/articles/${article.art_slug}`} className='btn btn-primary' id='read-more'>
                Read More...
            </Link>
          </div>
        </div>
      ))
    ) : (
      <div className='card'>Loading...</div>
    );
    return (
      <div>
        <div className='page-header text-center'>
          <h3>{this.props.header}</h3>
        </div>
        <div className='container' id='allArticles'>
          <div className='card-columns'>{articlesList}</div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  articles: state.articleReducer.articles,
  header: state.articleReducer.header,
  errorMsg: state.articleReducer.searchErrorMsg,
});
GetAllArticles.propTypes = {
  errorMsg: PropTypes.func,
};
const actionCreators = {
  getAllArticlesRequestAction,
};

export default connect(
  mapStateToProps,
  actionCreators,
)(GetAllArticles);

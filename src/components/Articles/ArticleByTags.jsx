import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getByTagsRequest } from '../../redux/actions/articleActions';
import './ArticleTags.scss';


class ArticleByTags extends PureComponent {
  static propTypes = {
    match: PropTypes.instanceOf(Object).isRequired,
    results: PropTypes.instanceOf(Array).isRequired,
    getByTagsRequest: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const {
      match: { params: { tag } },
      getByTagsRequest: getArticles,
    } = this.props;
    getArticles(tag);
  }

  render() {
    const { results, match: { params: { tag } } } = this.props;
    const noOfArticles = results.length;
    const elements = () => (
      results.map(article => (
        <div className="row hght" key={article.art_slug}>
          <div className="col-md-8">
            <h4 className="num">
              {`${noOfArticles} Articles Found With The Tag `}
              <strong>"{tag}"</strong>
            </h4>
            <h3>{article.title}</h3>

            <div className="row">
              <div className="col-sm-4">

                <h6>
                  <i className="mdi mdi-calendar-clock mdi-24px" />
                  &nbsp;
                  {article.read_time}
                  &nbsp;minute read
                </h6>
              </div>
              <div className="col-sm-4">
                {
                  article.tag.map(articleTag => (
                    <button type="button" className="btn btn-sm btn-outline-success art">
                      {articleTag}
                    </button>
                  ))
                }
              </div>

            </div>

            <i>{article.description}</i>
            <p className="body">{article.body}</p>
            <div className="read">
              <Link className="art-link" to={`/articles/${article.art_slug}`}>Read More...</Link>
            </div>
            <hr/>
          </div>
          <hr />
        </div>
      ))
    );

    return (
      <div className="row">
        <div className="col-md-4 num">
          Search Results
        </div>
        <div className="col-md-8">
          <div className="article">
            { elements() }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { articleTagsReducer: { results, error } } = state;
  return { results, error };
};

const mapDispatchToProps = { getByTagsRequest };

export default connect(mapStateToProps, mapDispatchToProps)(ArticleByTags);

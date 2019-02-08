import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './articleUpdate.scss';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import EditorToolbar from '../EditorToolbar';
import { getOneArticleRequestAction, updateArticleAction } from '../../../../redux/actions/articleActions';


class ArticleUpdate extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    if (!this.props.article) {
      this.props.getOneArticleRequestAction(this.props.match.params.art_slug);
      console.log('force update')
    } else {
      this.state = {
        articleTitle: this.props.article.title,
        articleDescription: this.props.article.description,
        articleTags: this.props.article.tag,
      };
    }
    this.onChange = this.onChange.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    console.log(props);
    if (!props.article) {
      console.log('nothing');
      props.history.push(`/articles/${props.match.params.art_slug}`);
    }
  }

  componentDidMount() {
    if (!this.props.article) {
      this.props.getOneArticleRequestAction(this.props.match.params.art_slug);
      console.log('did mount force update');
      console.log(this.props);
      this.forceUpdate();
    }
  }

  componentDidUpdate() {
    console.log('did update')
    console.log(this.props)
    if (this.props.article) {
      this.state = {
        articleTitle: this.props.article.title,
        articleDescription: this.props.article.description,
        articleTags: this.props.article.tag,
      };
      console.log('aww yea')
    } else {

    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const article = {
      title: this.state.articleTitle,
      description: this.state.articleDescription,
      body: document.getElementById('articleBody').value,
      tag: this.state.articleTags,
      artSlug: this.props.match.params.art_slug
    };
    this.props.updateArticleAction(article);
    this.props.history.push('/');
  }

  render() {
    if (this.props.article) {
      console.log(this.props)
      const articleBody = this.props.article.body;
      return (
        <div>
          <div className="container">
            <form id="articleUpdateForm" method="post" encType="multipart/form-data" onSubmit={this.handleSubmit} >
              <ul className="article-update-form">
                <li><label htmlFor="articleTitle">Title</label></li>
                <li><input type="text" name="articleTitle" id="articleTitle" required defaultValue={this.props.article.title} onChange={this.onChange} /></li>
                <li><label htmlFor="articleDescription" >Description</label></li>
                <li><textarea name="articleDescription" id="articleDescription" required defaultValue={this.props.article.description} onChange={this.onChange} /></li>
                <li><label htmlFor="articleBody">Body</label></li>
                <div id="toolbar-container" />
                <li><EditorToolbar article_body={articleBody} /></li>
                <li><label htmlFor="articleTags" >Tags</label></li>
                <li><input type="text" name="articleTags" id="articleTags" required defaultValue={this.props.article.tag} onChange={this.onChange} /></li>
                <li><button type="submit" id="publishBtn">Submit</button></li>
              </ul>
            </form>
          </div>
        </div>
      );
    }
    return (<div> reload </div>);
  }
}
const mapStateToProps = (state, ownProps) => {
  const artSlug = ownProps.match.params.art_slug;
  const articleArray = state.articleReducer.articles.map(
    a => a.find(article => article.art_slug === artSlug),
  );
  return {
    article: articleArray[0],
  };
};
const mapDispatchToProps = { getOneArticleRequestAction, updateArticleAction };
export default connect(mapStateToProps, mapDispatchToProps)(ArticleUpdate);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import './articleCreation.scss';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import EditorToolbar from '../EditorToolbar';
import { createArticleAction } from '../../../../redux/actions/articleActions';


class ArticleCreation extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      articleTitle: '',
      articleDescription: '',
      articleBody: '',
      articleTags: '',
    };
    this.onChange = this.onChange.bind(this);
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
      tag: this.state.articleTags.split(','),
    };
    this.props.createArticleAction(article);
  }

  render() {
    return (
      <div>
        <div className="container">
          <form id="articleForm" method="post" encType="multipart/form-data" onSubmit= {this.handleSubmit}>
            <ul className="article-creation-form">
              <li><label htmlFor="articleTitle">Title</label></li>
              <li><input type="text" name="articleTitle" id="articleTitle" placeholder="Title" required onChange={this.onChange} /></li>
              <li><label htmlFor="articleDescription">Description</label></li>
              <li><textarea name="articleDescription" id="articleDescription" placeholder="Add a two-line version of your story." required onChange={this.onChange} /></li>
              <li><label htmlFor="articleBody">Body</label></li>
              <div id="toolbar-container" />
              <li><EditorToolbar /></li>
              <li><label htmlFor="articleTags">Tags</label></li>
              <li><input type="text" name="articleTags" id="articleTags" placeholder="Tags" required onChange={this.onChange} /></li>
              <li>
                <button type="submit" className="btn btn-primary" id="publishBtn">
                  <i className="mdi mdi-pencil icon-publish" />
                  Publish
                </button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    article: state.articleReducer.article,
  };
};

const mapDispatchToProps = { createArticleAction };
export default connect(mapStateToProps, mapDispatchToProps)(ArticleCreation);

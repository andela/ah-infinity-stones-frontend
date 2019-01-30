import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { searchArticlesRequest } from '../../redux/actions/articleActions';

class Search extends Component {
  state = {
    author: '',
    title: '',
    tag: '',
    q: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  clearInputs = () => {
    this.setState({
      ...this.state,
      author: '',
      title: '',
      tag: '',
      q: '',
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { searchArticleAction } = this.props;
    searchArticleAction(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='navbar-form navbar-right' id='nav-search-form'>
        <div className='btn-group' role='group'>
          <button
            type='button'
            className='btn btn-secondary dropdown-toggle'
            data-toggle='dropdown'
            aria-haspopup='true'
            aria-expanded='false'
          >
            Search articles
          </button>
          <div className='dropdown-menu ' aria-labelledby='btnGroupDrop1'>
            <div className='input-group mb-3'>
              <div className='input-group-prepend'>
                <div className='input-group-text'>Author</div>
              </div>
              <input
                type='text'
                name='author'
                id='author'
                onChange={this.handleChange}
                className='form-control'
                aria-label='Author input field'
              />
            </div>
            <div className='input-group mb-3'>
              <div className='input-group-prepend'>
                <div className='input-group-text'>Title</div>
              </div>
              <input
                type='text'
                name='title'
                id='title'
                onChange={this.handleChange}
                className='form-control'
                aria-label='Title text input'
              />
            </div>
            <div className='input-group mb-3'>
              <div className='input-group-prepend'>
                <div className='input-group-text'>Tag</div>
              </div>
              <input
                type='text'
                name='tag'
                if='tag'
                onChange={this.handleChange}
                className='form-control'
                aria-label='Tag text input'
              />
            </div>
            <div className='input-group mb-3'>
              <div className='input-group-prepend'>
                <div className='input-group-text'>Keyword</div>
              </div>
              <input
                type='text'
                name='q'
                id='q'
                onChange={this.handleChange}
                className='form-control'
                aria-label='Keyword text input'
              />
            </div>
          </div>
          <div className='input-group-btn'>
            <button
              className='btn btn-success'
              id='home-search-btn'
              type='submit'
              onClick={this.handleSubmit}
            >
              <span>
                <i className='fas fa-search' />
              </span>
            </button>
          </div>
        </div>
      </form>
    );
  }
}
Search.propTypes = {
  searchArticleAction: PropTypes.func,
  article: PropTypes.object,
  error: PropTypes.object,
};
const mapStateToProps = state => ({
  error: state.articleReducer.error,
  articles: state.articleReducer.articles,
});

const actionCreators = {
  searchArticleAction: searchArticlesRequest,
};

export default connect(
  mapStateToProps,
  actionCreators,
)(Search);

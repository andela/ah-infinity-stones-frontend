/* eslint-disable arrow-body-style */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Bookmark = ({ bookmark }) => {
  return (
    <Fragment>
      <div className='list-group'>
        <Link to={`/articles/${bookmark.article_slug}`} className='list-group-item list-group-item-action'>
          <div className='d-flex w-100 justify-content-between'>
            <h5 className='mb-1'>{ bookmark.article_title}</h5>
            <small>
              By &nbsp;
              <strong>
                {bookmark.article_author}
              </strong>
            </small>
          </div>
        </Link>
      </div>
    </Fragment>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.shape({
    bookmark: PropTypes.object,
  }).isRequired,
};

export default Bookmark;

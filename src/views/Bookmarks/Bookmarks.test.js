/* global it, expect, mount */
/* eslint-disable no-undef */
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Bookmarks from '.';
import Bookmark from '../../components/Bookmark';
import store from '../../redux/store';

describe('Bookmarks Component', () => {
  let bookmarksContainer;
  let reduxBookmarks;
  let reduxBook;
  const bookmark = {
    article_title: 'test',
    article_author: 'justo1',
    article_slug: 'test',
  };
  beforeEach(() => {
    bookmarksContainer = shallow(<Bookmarks />);
    reduxBookmarks = mount(
      <Provider store={store}>
        <Router>
          <Bookmarks />
        </Router>
      </Provider>,
    );
  });

  it('Bookmarks renders successfully', () => {
    expect(reduxBookmarks.exists()).toEqual(true);
  });
  it('Should match snapshot', () => {
    expect(bookmarksContainer).toMatchSnapshot();
  });
  it('Bookmark mounts successfully', () => {
    reduxBook = mount(
      <Provider store={store}>
        <Router>
          <Bookmark bookmark={bookmark} />
        </Router>
      </Provider>,
    );
    expect(reduxBook.exists()).toEqual(true);
  });
});

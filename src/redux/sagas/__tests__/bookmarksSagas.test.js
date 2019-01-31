/* eslint-disable import/named */
import { call } from 'redux-saga/effects';
import { bookmarksSaga } from '../bookmarksSagas';
import bookmarksService from '../../../services/bookmarks.service';

describe('Bookmarks Sagas', () => {
  it('works with sagas', () => {
    const generator = bookmarksSaga();
    expect(generator.next().value).toEqual(call(bookmarksService));
  });
});

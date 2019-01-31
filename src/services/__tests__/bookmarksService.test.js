import bookmarksService from '../bookmarks.service';

describe('Bookmarks service', () => {
  it('it calls the api', async () => {
    const data = await bookmarksService();
    expect(data.detail).toEqual('Your token is invalid. ');
  });
});

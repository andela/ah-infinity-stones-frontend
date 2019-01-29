import sinon from 'sinon';
import * as bookmarkServices from '../bookmark';


describe('', () => {
  sinon.stub(bookmarkServices, 'bookmark').returns({
    message: 'bookmarked',
  });
  sinon.stub(bookmarkServices, 'unbookmark').returns({ message: 'Successfully removed from bookmark' });
  const { bookmark, unbookmark } = bookmarkServices;

  it('Should handle bookmark request', async () => {
    const resp = await bookmark();
    expect(resp).toEqual({ message: 'bookmarked' });
  });

  it('Should handle unbookmark request', async () => {
    const resp = await unbookmark();
    expect(resp).toEqual({ message: 'Successfully removed from bookmark' });
  });
});

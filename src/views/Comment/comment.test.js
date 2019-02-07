import reducer from '../../redux/reducers/commentReducer';
import * as types from '../../redux/actions/actionTypes';
// import * as actions from '../../redux/actions/commentActions';

describe('Reducers', () => {
  const payload = [
    {
      id: 128,
      article: 2,
      thread: null,
      comment: 'This is awesome',
      author: {
        username: 'PromasterGuru12',
        bio: '',
        image: '',
        following: '',
      },
      created_at: '2019-02-07T17:11:17.267051+03:00',
      updated_at: '2019-02-07T17:11:17.267104+03:00',
    },
  ];

  it('can get the topic of an article to comment', () => {
    expect(
      reducer(undefined, {
        type: types.GET_TOPIC,
      }),
    ).toEqual({
      loading: false,
      loadingTopic: true,
      success: false,
    });
  });

  it('can receive topics', () => {
    expect(
      reducer(undefined, {
        type: types.TOPIC_RECEIVED,
      }),
    ).toEqual({
      loading: false,
      loadingTopic: false,
      topic: undefined,
      success: false,
    });
  });

  it('can get comments', () => {
    expect(
      reducer(undefined, {
        type: types.GET_COMMENTS,
      }),
    ).toEqual({
      loading: true,
      success: false,
    });
  });

  it('can receive comments', () => {
    expect(
      reducer(undefined, {
        type: types.COMMENTS_RECEIVED,
        payload,
      }),
    ).toEqual({
      loading: false,
      success: true,
      items: payload.reverse(),
      item0: payload[0],
      item1: payload[1],
      item2: payload[2],
    });
  });

  it('can post comments', () => {
    const data = {
      comment: 'This is cool',
      thread: null,
    };
    expect(
      reducer(undefined, {
        type: types.POST_COMMENT,
        data,
      }),
    ).toEqual({
      isPosted: false,
      loading: false,
      success: false,
    });
  });

  it('can post successful comments', () => {
    expect(
      reducer(undefined, {
        type: types.COMMENT_POSTED,
        payload,
      }),
    ).toEqual({
      isPosted: true,
      loading: false,
      success: false,
      items: payload.reverse(),
      item0: payload[0],
      item1: payload[1],
      item2: payload[2],
    });
  });
});

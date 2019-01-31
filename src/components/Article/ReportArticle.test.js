/* eslint-disable no-unused-vars */
/* eslint-disable import/default */
import * as types from '../../redux/actions/actionTypes';
import * as actions from '../../redux/actions/articleActions';
import reducer from '../../redux/reducers/articleReducer';
import { reportArticle } from '../../services/articlePayload';

describe('Action creators', () => {
  let payload = {};

  beforeEach(() => {
    payload = {
      artSlug: 'promaster-is-back-from-shanghai-00rf0e0r09r0',
      report_msg: 'Spam',
    };
  });

  it('should create an action to report an article', () => {
    const expectedAction = {
      type: types.REPORT_ARTICLE,
      payload,
    };
    expect(actions.reportArticleAction(payload)).toEqual(expectedAction);
  });
});


describe('Test article reporting Api call', () => {
  let payload = {};
  let response = {};
  beforeEach(() => {
    payload = {
      artSlug: 'learn-react-in-two-months-3eaAFEAGEedese#',
      report_msg: 'Spam',
    };
    response = reportArticle(payload);
  });

  it('A promise is returned from article rating api call', () => {
    expect(response).toBeTruthy();
  });

  it('Promise has data', () => {
    response.then((objects) => {
      expect(objects).toHaveLength(1);
    });
  });
});

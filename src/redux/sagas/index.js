import { all } from 'redux-saga/effects';
import { watchLogin } from './loginSaga';

import watchSignupSaga from './signupSaga';
import watchSocialLogin from './socialLoginSaga';
import { watchSendResetLink, watchPasswordreset } from './passworwordResetSagas';
import watchGetArticleByTagsSaga from './articleTagsSaga';
import {
  watchCreateArticleSaga,
  watchGetOneArticleSaga,
  watchGetAllArticlesSaga,
  watchDeleteArticleSaga,
  watchUpdateArticleSaga,
  watchRateArticleSaga,
  watchReportArticleSaga,
  watchSearchArticleSaga,
} from './articleSaga';
import watchBookmark from './bookmarkSaga';
import watchProfile from './profileSagas';
import watchComment from './commentSagas';

import { watchLike } from './likeSagas';
import watchBookmarks from './bookmarksSagas';

export default function* rootSaga() {
  yield all([
    watchSignupSaga(),
    watchLogin(),
    watchSignupSaga(),
    watchSocialLogin(),
    watchCreateArticleSaga(),
    watchGetOneArticleSaga(),
    watchGetAllArticlesSaga(),
    watchSendResetLink(),
    watchPasswordreset(),
    watchUpdateArticleSaga(),
    watchGetOneArticleSaga(),
    watchDeleteArticleSaga(),
    watchLike(),
    watchRateArticleSaga(),
    watchProfile(),
    watchGetArticleByTagsSaga(),
    watchReportArticleSaga(),
    watchBookmarks(),
    watchSearchArticleSaga(),
    watchBookmark(),
    watchComment(),
  ]);
}

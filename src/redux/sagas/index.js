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
} from './articleSaga';
import watchProfile from './profileSagas';

import { watchLike } from './likeSagas';

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
  ]);
}

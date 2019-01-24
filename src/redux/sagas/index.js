import { all } from 'redux-saga/effects';
import { watchLogin } from './loginSaga';

import watchSignupSaga from './signupSaga';
import watchSocialLogin from './socialLoginSaga';
import { watchSendResetLink, watchPasswordreset } from './passworwordResetSagas';
import {
  watchCreateArticleSaga,
  watchGetOneArticleSaga,
  watchGetAllArticlesSaga,
  watchDeleteArticleSaga,
  watchUpdateArticleSaga,
  watchRateArticleSaga,
} from './articleSaga';

import { watchLike } from './likeSagas';

export default function* rootSaga() {
  yield all([
    watchLogin(),
    watchSignupSaga(),
    watchSocialLogin(),
    watchCreateArticleSaga(),
    watchGetAllArticlesSaga(),
    watchSendResetLink(),
    watchPasswordreset(),
    watchUpdateArticleSaga(),
    watchGetOneArticleSaga(),
    watchDeleteArticleSaga(),
    watchLike(),
    watchRateArticleSaga(),
  ]);
}

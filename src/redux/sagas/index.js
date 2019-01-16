import { all } from 'redux-saga/effects';
import { watchLogin } from './loginSaga';
import watchSignupSaga from './signupSaga';
import watchSocialLogin from './socialLoginSaga';
import { watchSendResetLink, watchPasswordreset } from './passworwordResetSagas';
import {
  watchCreateArticleSaga, watchGetOneArticleSaga,
  watchGetAllArticlesSaga, watchDeleteArticleSaga, watchUpdateArticleSaga,
} from './articleSaga';

export default function* rootSaga() {
  yield all([
    watchSignupSaga(),
    watchLogin(),
    watchSocialLogin(),
    watchSendResetLink(),
    watchPasswordreset(),
    watchCreateArticleSaga(),
    watchUpdateArticleSaga(),
    watchGetOneArticleSaga(),
    watchGetAllArticlesSaga(),
    watchDeleteArticleSaga(),
  ]);
}

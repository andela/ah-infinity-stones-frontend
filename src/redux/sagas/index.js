import { all } from 'redux-saga/effects';
import {
    watchIncrement,
} from './incrementSaga';

export default function* rootSaga() {
  yield all([
    watchIncrement(),
  ]);
}

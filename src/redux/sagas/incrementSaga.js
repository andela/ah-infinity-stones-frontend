import { put, takeLatest } from "redux-saga/effects";

import { receiveIncrement } from "../actions/articleActions";
import { REQUEST_INCREMENT } from "../actions/actionTypes";

// worker Saga: will be fired once user request actions
function* incrementSaga(action) {
  try {
    // do an api call here
    yield put(receiveIncrement());
  } catch (e) {
    console.log(e);
  }
}
//watcher saga
// once the REQUEST_INCREMENT action type is called, incrementSaga method is run
export function* watchIncrement() {
  yield takeLatest(REQUEST_INCREMENT, incrementSaga);
}
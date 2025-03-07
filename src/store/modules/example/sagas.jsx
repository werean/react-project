import { call, put, all, takeLatest } from "redux-saga/effects";
import * as actions from "./actions";
import * as types from "../types";
const request = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 600);
  });

function* exampleRequest() {
  // isso aqui é uma função geradora
  try {
    yield call(request);
    yield put(actions.clickedButtonSuccess());
  } catch {
    yield put(actions.clickedButtonFailure());
  }
}

export default all([takeLatest(types.CLICKED_BUTTON_REQUEST, exampleRequest)]);

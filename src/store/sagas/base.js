import { call, put, all, takeEvery } from 'redux-saga/effects';
import * as API from 'services/api';
import Types from '../types';
import Lorem from 'utils/loremIpsumInstance';
import {USER_DESCRIPTION_PARAGRAPHS_COUNT} from 'utils/constants';

function * fetchUserDetails () {
  try {
    const data = yield call(API.fetchUser);
    yield put({ type: Types.SET_USER, payload: data });
  } catch (error) {
    throw new Error(error);
  }
}

function * fetchUserBrands () {
  try {
    const data = yield call(API.fetchUserBrands);
    yield put({ type: Types.SET_BRANDS, payload: data });
  } catch (error) {
    throw new Error(error);
  }
}

function * fetchUserDescription () {
  try {
    const text= Lorem.generateParagraphs(USER_DESCRIPTION_PARAGRAPHS_COUNT);
    yield put({ type: Types.SET_DESCRIPTION, payload: text });
  } catch (error) {
    throw new Error(error);
  }
}

function * fetchUserData ({ payload }) {
  try {
    if(!payload?.initial) {
      yield put({ type: Types.RESET_STATE });
    }

    yield fetchUserDetails();
    yield fetchUserBrands();
    yield fetchUserDescription();
  } catch (error) {
    yield put({ type: Types.SET_ERROR, payload: error.message });
  } finally {
    yield put({ type: Types.TOGGLE_APP_LOADING, payload: false });
  }
}

export default function * baseSaga () {
  yield all([
    takeEvery(Types.FETCH_USER_DATA, fetchUserData),
  ]);
}
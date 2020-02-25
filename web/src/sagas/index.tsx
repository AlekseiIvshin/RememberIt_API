import { call, put, takeEvery, takeLatest, takeLeading } from 'redux-saga/effects'
import config from '../constants/config';
import { signUpSaga } from './signUp';
import { ACTION_SIGN_UP } from '../screens/SignUp/reducer';

function* rootSaga() {
    yield takeLeading(ACTION_SIGN_UP, signUpSaga);
}

export default rootSaga;
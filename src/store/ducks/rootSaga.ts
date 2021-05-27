import {all, takeLatest} from 'redux-saga/effects';

import {CharacterTypes} from './Characters/types';
import {load} from './Characters/sagas';

export default function* rootSaga(): any{
  return yield all([takeLatest(CharacterTypes.LOAD_REQUEST, load)]);
}
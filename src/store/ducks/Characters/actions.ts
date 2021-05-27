import {action} from 'typesafe-actions';
import {CharacterTypes, All} from './types';

export const loadRequest = () => action(CharacterTypes.LOAD_REQUEST);

export const loadSuccess = (data: All[]) => action(CharacterTypes.LOAD_SUCCESS, {data});

export const loadFailure = () => action(CharacterTypes.LOAD_FAILURE);
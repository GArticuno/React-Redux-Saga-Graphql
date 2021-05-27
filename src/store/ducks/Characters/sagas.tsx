import {call, put} from 'redux-saga/effects';
import api from '../../../services/api';

import {loadSuccess, loadFailure} from './actions';
import { All } from './types';

function Query(page: number){
  const query = `
    {
      characters(page: ${page}){
      info{
        count
        pages
        next
        prev
      }
      results {
        id
        name
        status
        species
        image
        location{
          id
          name
          dimension
        }
      }
    }}
  `
  return {query}
}

export function* load(): any{
    let data: All[] = [];
    
    try {
      for(var i = 1; i <= 34; i++){
        const response = yield call(api.post, '/graphql', Query(i))
        data.push(response.data.data.characters)
      }

      yield put(loadSuccess(data))
    } catch (error) {
      yield put(loadFailure())
    }
  
}
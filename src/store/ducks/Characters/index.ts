import { Reducer } from 'redux';
import {CharacterState, CharacterTypes} from './types';

const INITIAL_STATE: CharacterState = {
  data: [],
  error: false,
  loading: false
}

const reducer: Reducer<CharacterState> = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case CharacterTypes.LOAD_REQUEST:
      return{
        ...state, 
        loading: true 
      };
    case CharacterTypes.LOAD_SUCCESS:
      return{
        ...state, 
        loading: false, 
        error: false, 
        data: action.payload.data,
      };
    case CharacterTypes.LOAD_FAILURE:
      return{...state, 
        data: [],
        info: {
          count:0,
          pages:0,
          next:0,
          prev:0
        },
        error: true,
        loading: false 
      };
    default:
      return state;
  }
}

export default reducer;
import { FETCH_USER_FROM_API, GET_USER } from '../dater/actions/getGitUserACT';

const initialState = {};

export default function userReducer(state = initialState, action){
  switch(action.type){
    case FETCH_USER_FROM_API:
      return { ...state, loading: true };
    case GET_USER:
      return { ...state, loading: false, user: action.payload };
    default:
      return state;
  }
}

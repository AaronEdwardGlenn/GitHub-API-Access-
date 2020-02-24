import { FETCH_ALL_REPOS, GET_REPOS } from '../dater/actions/getAllReposACT';

const initialState = {
  loading: true,
  repos: []
};

export default function repoReducer(state = initialState, action){
  switch(action.type){
    case FETCH_ALL_REPOS:
      return { ...state, loading: true };
    case GET_REPOS:
      return { ...state, loading: false, repos: action.payload };
    default:
      return state;
  }
}

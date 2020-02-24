import { getGitUser } from '../../services/githubApi';

export const FETCH_USER_FROM_API = 'FETCH_USER_FROM_API';
export const GET_USER = 'GET_USER';
export const getUserFromAPI = username => dispatch => {
  dispatch({ type: FETCH_USER_FROM_API });
  return getGitUser(username)
    .then(user => dispatch({
      type: GET_USER,
      payload: user
    }));
};

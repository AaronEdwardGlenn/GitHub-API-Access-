import { getGitUser } from '../../src/services/githubApi';

export const GET_USER_FROM_API = 'GET_USER_FROM_API';
export const GET_USER = 'GET_USER';
export const getUserFromAPI = username => dispatch => {
  dispatch({ type: GET_USER_FROM_API });
  return getGitUser(username)
    .then(user => dispatch({
      type: GET_USER,
      payload: user
    }));
};

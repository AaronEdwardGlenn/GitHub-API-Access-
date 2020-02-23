import { getAllRepos } from '../../services/githubApi';

export const FETCH_ALL_REPOS = 'FETCH_ALL_REPOS';
export const GET_REPOS = 'GET_REPOS';
export const fetchRepos = url => dispatch => {
  dispatch({ type: FETCH_ALL_REPOS });
  return getAllRepos(url)
    .then(repos => dispatch({
      type: GET_REPOS,
      payload: repos
    }));
};

import { FETCH_ALL_REPOS, GET_REPOS, fetchRepos } from './getAllReposACT';

jest.mock('../../services/__mocks__/githubApi');

describe('get all REPS Action', () => {
  it('initiates the FetchRepos ACT', () => {
    const dispatch = jest.fn();
    const action = fetchRepos('url');
    return action(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({ type: FETCH_ALL_REPOS });
        expect(dispatch).toHaveBeenCalledWith({
          type: GET_REPOS,
          payload: [
          ]
        });
      });
  });
});

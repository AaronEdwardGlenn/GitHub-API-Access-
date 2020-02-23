import { FETCH_ALL_REPOS, GET_REPOS, fetchRepos } from './repoActions';

jest.mock('../../services/githubAPI.js');

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
            {
              name: 'Hella Hella',
              description: 'Hella Tight'
            },
            {
              name: 'Cool Cool',
              description: 'Description is Great'
            }
          ]
        });
      });
  });
});

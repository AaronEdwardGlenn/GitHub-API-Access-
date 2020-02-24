import { FETCH_USER_FROM_API, getUserFromAPI, GET_USER } from './getGitUserACT';

jest.mock('../../services/__mocks__/githubApi');

describe('ACTions', () => {
  it('getUserFromAPI functions properly', () => {
    const dispatch = jest.fn();
    const action = getUserFromAPI('user');
    return action(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: FETCH_USER_FROM_API
        });
        expect(dispatch).toHaveBeenCalledWith({
          type: GET_USER,
          payload: {
            name: 'Ilya Solovyov',
            numFollowers: 36,
            numFollowing: 4,
            repos_url: 'https://api.github.com/users/user/repos',
            url: 'https://github.com/user'
          }
        });
      });
  });
});

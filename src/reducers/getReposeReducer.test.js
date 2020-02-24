import { FETCH_ALL_REPOS, GET_REPOS } from '../dater/actions/getAllReposACT';
import repoReducer from './getReposeReducer';

describe('repo reducer', () => {
  it('sorts the repo load', () => {
    const action = { type: FETCH_ALL_REPOS };
    const initialState = {
      loading: false,
      repos: []
    };
    const newState = repoReducer(initialState, action);
    expect(newState).toEqual({ loading: true, repos: [] });
  });

  it('sorts the repo fetch', () => {
    const action = { 
      type: GET_REPOS,
      payload: [
        {
          name: 'Calvin',
        },
        {
          name: 'Coolidge',
        }
      ]
    };
    const initialState = {
      loading: true,
      repos: []
    };
    const newState = repoReducer(initialState, action);
    expect(newState).toEqual({
      loading: false,
      repos: [
        {
          name: 'Calvin',
        },
        {
          name: 'Coolidge',
        }
      ]
    });
  });
});

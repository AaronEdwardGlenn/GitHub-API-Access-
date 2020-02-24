import { fetchReposeLoading, fetchRepos } from './getReposSelector';

describe('repo selectors', () => {
  it('selects repo loading state', () => {
    const state = {
      repos: { 
        loading: true,
        repos: [] 
      }
    };
    const loading = fetchReposeLoading(state);
    expect(loading).toEqual(true);
  });

  it('selects repos from state', () => {
    const state = {
      repos: {
        loading: false,
        repos: [
          {
            name: 'Calvin',
          },
          {
            name: 'Coolidge',
          }
        ]
      }
    };
    const repos = fetchRepos(state);
    expect(repos).toEqual([
      {
        name: 'Calvin',
      },
      {
        name: 'Coolidge',
      }
    ]);
  });
});

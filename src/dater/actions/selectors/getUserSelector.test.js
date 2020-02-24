import { fetchUserLoading, fetchUser } from './getUserSelector';

describe('user selectors', () => {
  it('selects the user loading state', () => {
    const state = {
      user: {
        loading: true,
        user: null
      }
    };
    const loading = fetchUserLoading(state);
    expect(loading).toEqual(true);
  });

  it('selects the user from state', () => {
    const state = {
      user: {
        loading: false,
        user: {
          id: 1234,
          name: 'Calvin Coolidge'
        }
      }
    };
    const user = fetchUser(state);
    expect(user).toEqual({
      id: 1234,
      name: 'Calvin Coolidge'
    });
  });
});

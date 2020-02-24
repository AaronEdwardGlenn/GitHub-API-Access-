import { FETCH_USER_FROM_API, GET_USER } from '../dater/actions/getGitUserACT';
import userReducer from './getUserReducer';


describe('user reducer', () => {
  it('handles a fetch user loading action', () => {
    const action = { type: FETCH_USER_FROM_API };
    const initialState = {
      loading: false,
      user: null
    };
    const newState = userReducer(initialState, action);
    expect(newState).toEqual({
      loading: true,
      user: null
    });
  });
  
  it('handles a fetch user action', () => {
    const action = {
      type: GET_USER,
      payload: {
        id: 1234,
        name: 'Calvin Coolidge'
      }
    };
    const initialState = { loading: true, user: null };
    const newState = userReducer(initialState, action);
    expect(newState).toEqual({
      loading: false,
      user: {
        id: 1234,
        name: 'Calvin Coolidge'
      }
    });
  });
});
  

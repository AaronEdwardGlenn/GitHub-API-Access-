import { combineReducers } from 'redux';
import user from './getUserReducer';
import repos from './getReposeReducer';


export default combineReducers({
  user,
  repos,
});

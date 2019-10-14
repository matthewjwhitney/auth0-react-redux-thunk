import { combineReducers } from 'redux';
import Reducer1 from './reducer1';
import Auth_Reducer from './auth_reducer';

const rootReducer = combineReducers({
  reducer1: Reducer1,
  auth_reducer: Auth_Reducer
})

export default rootReducer;

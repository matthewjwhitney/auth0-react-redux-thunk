// Handles Authentication state
import * as ACTION_TYPES from '../actions/action_types';

const initialState = {
  isAuthenticated: false,
  UserProfile: null
}

const Auth_Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOGIN_SUCCESS:
      return  {
        ...state,
        isAuthenticated: true
      }
    case ACTION_TYPES.LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false
      }
    case ACTION_TYPES.GET_PROFILE:
      return {
        ...state,
        UserProfile: action.payload
      }
    case ACTION_TYPES.REMOVE_PROFILE:
      return {
        ...state,
        UserProfile: null
      }
    default:
      return state
    }
}

export default Auth_Reducer;

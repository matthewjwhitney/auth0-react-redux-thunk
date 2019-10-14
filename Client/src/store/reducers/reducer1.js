//Plain Reducer Example
import * as ACTION_TYPES from '../actions/action_types';

const initialState = {
  server_response: null,
  stateprop: false
}

const Reducer1 = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SERVER_SUCCESS:
      return  {
        ...state,
        server_response: action.payload
      }
    case ACTION_TYPES.SERVER_FAILURE:
      return  {
        ...state,
        server_response: null
      }
    case ACTION_TYPES.SUCCESS:
      return  {
        ...state,
        stateprop: true
      }
    case ACTION_TYPES.FAILURE:
      return {
        ...state,
        stateprop: false
      }
    default:
      return state
    }
}

export default Reducer1;

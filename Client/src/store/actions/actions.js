/*eslint-disable */
import * as ACTION_TYPES from './action_types';


// Plain non-async Action Example
 { type: ACTION_TYPES.SUCCESS }

 { type : ACTION_TYPES.FAILURE }



 //Async actions to handle authentication state with Redux Thunk
 export function login_success() {
   return dispatch => {
      dispatch({type: ACTION_TYPES.LOGIN_SUCCESS})
   }
 }

 export function login_failure() {
   return dispatch => {
     dispatch({type: ACTION_TYPES.LOGIN_FAILURE})
   }
 }


 //Actions for  getting profile with Redux Thunk
 export function get_profile(profile) {
   return dispatch => {
     dispatch({type: ACTION_TYPES.GET_PROFILE, payload: profile})
   }
 }

 export function remove_profile() {
   return dispatch => {
      dispatch({type: ACTION_TYPES.REMOVE_PROFILE})
   }
 }


 //Actions for  getting server response with Redux Thunk
 export function set_server_res(res) {
   return dispatch => {
     dispatch({type: ACTION_TYPES.SERVER_SUCCESS, payload: res})
   }
 }

 export function remove_server_res() {
   return dispatch => {
      dispatch({type: ACTION_TYPES.SERVER_FAILURE})
   }
 }

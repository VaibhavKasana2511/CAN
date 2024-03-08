// authActions.js

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_USER = 'LOGOUT_USER';
export const FETCH_STATES = 'FETCH_STATES';

export const loginSuccess = userData => ({
  type: LOGIN_SUCCESS,
  payload: userData,
});

export const fetchStates = states => ({
  type: FETCH_STATES,
  payload: states,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});

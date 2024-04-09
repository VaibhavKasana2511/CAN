// authActions.js

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_USER = 'LOGOUT_USER';
export const FETCH_STATES = 'FETCH_STATES';
export const MY_PROFILE = 'MY_PROFILE';

export const loginSuccess = userData => ({
  type: LOGIN_SUCCESS,
  payload: userData,
});

export const fetchMyProfile = data => ({
  type: MY_PROFILE,
  payload: data,
});

export const fetchStates = states => ({
  type: FETCH_STATES,
  payload: states,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});

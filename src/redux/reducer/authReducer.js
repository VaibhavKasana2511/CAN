// authReducer.js

import {
  LOGIN_SUCCESS,
  LOGOUT_USER,
  FETCH_STATES,
  MY_PROFILE,
} from '../action/authAction';

const initialState = {
  user: null,
  allstates: null,
  myProfile: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case MY_PROFILE:
      return {
        ...state,
        myProfile: action.payload,
      };
    case FETCH_STATES:
      return {
        ...state,
        allstates: action.payload,
      };

    case LOGOUT_USER:
      return {...state, user: null};

    default:
      return state;
  }
};

export default authReducer;

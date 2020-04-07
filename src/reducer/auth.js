import axios from 'axios';
import {fetchRequest} from "../helper/helper";
import {baseApiUrl} from "../helper/config";

/**
 * @type {string}
 */
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const AUTHORIZATION_FAILURE = "AUTHORIZATION_FAILURE";
export const AUTHORIZATION_SUCCESS = "AUTHORIZATION_SUCCESS";
export const AUTHORIZATION_REQUEST = "AUTHORIZATION_REQUEST";

export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAIL = "SIGN_UP_FAIL";

export const UPDATE_REQUEST = "UPDATE_REQUEST";
export const UPDATE_SUCCESS = "UPDATE_SUCCESS";
export const UPDATE_FAILURE = "UPDATE_FAILURE";

export const RESET_AUTH_DATA = "RESET_AUTH_DATA";


const initialState = {
  isFetching: false,
  isAuthenticated: false,
  isLogout: false,
  error: {},
  user: {},
  role: 'Buyer',
};

/**
 * Reducer
 * @param state
 * @param action
 * @returns {*}
 */
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
        user: action.fields
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        user: action.user,
        error: {}
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        error: action.error
      };
    case AUTHORIZATION_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case AUTHORIZATION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        user: action.user
      };
    case AUTHORIZATION_FAILURE:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        error: action.error
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        name: "",
        role: "",
        isAuthenticated: false
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    case SIGN_UP_REQUEST:
      return {
        ...state,
        isFetching: true,
        user: action.fields
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };
    case SIGN_UP_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    case UPDATE_REQUEST:
      return {
        ...state,
        isFetching: true,
        params: action.fields
      };
    case UPDATE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        user: action.payload
      };
    case UPDATE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    case RESET_AUTH_DATA:
      return initialState;
    default:
      return state;
  }
}

/**
 * Actions
 */
export function requestSignUp(params) {
  dispatch({ type: SIGN_UP_REQUEST});

  fetchRequest(`${baseApiUrl}register`, params, "post")
    .then(res => {
      dispatch({ type: SIGN_UP_SUCCESS, result: res.data });
    })
    .catch(err => {
      dispatch({
        type: SIGN_UP_FAIL,
        error: err.response.data.errormsg,
      });
    });
}

export function requestSingIn(params) {
  dispatch({ type: LOGIN_REQUEST});

  fetchRequest(`${baseApiUrl}login`, params, "post")
    .then(res => {
      dispatch({ type: LOGIN_SUCCESS, result: res.data });
    })
    .catch(err => {
      dispatch({
        type: LOGIN_FAILURE,
        error: err.response.data.errormsg,
      });
    });
}

export function requestUpdateProfile(params) {
  dispatch({ type: UPDATE_REQUEST});

  fetchRequest(`${baseApiUrl}update-profile`, params, "post")
    .then(res => {
      dispatch({ type: UPDATE_SUCCESS, result: res.data });
    })
    .catch(err => {
      dispatch({
        type: UPDATE_FAILURE,
        error: err.response.data.errormsg,
      });
    });
}

export function requestLogout() {
  dispatch({ type: LOGOUT_REQUEST});

  fetchRequest(`${baseApiUrl}update-profile`, params, "post")
    .then(res => {
      dispatch({ type: LOGOUT_SUCCESS, result: res.data });
    })
    .catch(err => {
      dispatch({
        type: LOGOUT_FAILURE,
        error: err.response.data.errormsg,
      });
    });
}

export function checkAuth() {
  return {
    type: AUTHORIZATION_REQUEST,
    isFetching: true
  };
}

export function authorizationSuccess(user) {
  return {
    type: AUTHORIZATION_SUCCESS,
    isFetching: false,
    user
  };
}

export function authorizationFailure(error) {
  return {
    type: AUTHORIZATION_FAILURE,
    isFetching: false,
    error
  };
}

export function resetAuthData() {
  return {
    type: RESET_AUTH_DATA
  };
}

import {fetchRequest} from "../helper/helper";
import {baseApiUrl} from "../helper/config";

export const API_GET_REQUEST = 'API_GET_REQUEST'
export const API_RESPONSE_SUCCESS = 'API_RESPONSE_SUCCESS'
export const API_GET_SINGLE_RESOURCE_REQUEST = 'API_GET_SINGLE_RESOURCE_REQUEST'
export const API_REQUEST_ERROR = 'API_REQUEST_ERROR'
export const API_REQUEST_FAILURE = 'API_REQUEST_FAILURE'
export const API_POST_REQUEST = 'API_POST_REQUEST'
export const API_PUT_REQUEST = 'API_PUT_REQUEST'
export const API_DELETE_REQUEST = 'API_DELETE_REQUEST'
export const FLUSH_API_DATA = 'FLUSH_API_DATA'

/* action type */
export const REQUEST = 'REQUEST'
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'

/* api entities */
export const USER = 'USER'
export const DEPARTMENT = 'DEPARTMENT'
export const LEAVE = 'LEAVE'
export const FINANCE = 'FINANCE'
export const TASK = 'TASK'

/* entity fetching action */
export const LOAD_DEPARTMENT = 'LOAD_DEPARTMENT'
export const LOAD_USER = 'LOAD_USER'
export const LOAD_DASHBOARD = 'LOAD_DASHBOARD'
export const SAVE_DRUGS = 'SAVE_DRUGS'
export const SAVE_SUB = 'SAVE_SUB'
export const SAVE_SUB_SUCCESS = 'SAVE_SUB_SUCCESS'
export const RESET_DATA = 'RESET_DATA'


const initialState = {
  token: window.localStorage.getItem("access_token"),
  result: [],
  resultDetail: {},
  isFetching: false,
  error: {}
};

function customizer(objValue, srcValue) {
  if (_.isArray(objValue)) {
    return objValue.concat(srcValue);
  }
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case API_RESPONSE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        result: action.result || []
      };
    case API_GET_REQUEST:
      return {
        ...state,
        isFetching: true,
        params: action.params || {}
      };
    case API_POST_REQUEST:
      return {
        ...state,
        isFetching: true,
        params: action.params || {}
      };
    case API_REQUEST_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    case FLUSH_API_DATA:
      return state;
    case LOAD_DASHBOARD:
      return {
        ...state,
        isFetching: true,
        params: action.params
      };
    case SAVE_DRUGS:
      return {
        ...state,
        isFetching: true,
        params: action.params || {}
      };
    case SAVE_SUB:
      return {
        ...state,
        isFetching: true,
        params: action.params || {}
      };
    case "SET_DETAIL":
      return {
        ...state,
        resultDetail: action.resultDetail
      };
    case RESET_DATA:
      return initialState;
    case SAVE_SUB_SUCCESS:
      let obj = {};
      let url = action.result.url;
      url = url.charAt(0).toLowerCase() + url.slice(1);
      obj[url] = [action.result.result];
      const res = mergeWith(state.result, obj, customizer);
      return {
        ...state,
        isFetching: false,
        result: res || []
      };
    default:
      return state;
  }
}


/**
 * Actions
 */
export function fetchApi(endpoints, params) {
  dispatch({ type: API_GET_REQUEST});

  fetchRequest(`${baseApiUrl}${endpoints}`, {}, "get", params)
    .then(res => {
      dispatch({ type: API_RESPONSE_SUCCESS, result: res.data });
    })
    .catch(err => {
      dispatch({
        type: API_REQUEST_FAILURE,
        error: err.response.data.errormsg,
      });
    });
}

export function fetchPostApi(endpoints, params) {
 dispatch({ type: API_POST_REQUEST});

  fetchRequest(`${baseApiUrl}${endpoints}`, {}, "get", params)
    .then(res => {
      dispatch({ type: API_RESPONSE_SUCCESS, result: res.data });
    })
    .catch(err => {
      dispatch({
        type: API_REQUEST_FAILURE,
        error: err.response.data.errormsg,
      });
    });
}

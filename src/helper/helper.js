import axios from "axios";

/**
 * get access token
 */
export function getAccessToken() {
  // return `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ3ZWlsaUBjb2RpZ28uc2ciLCJyb2xlcyI6WyJST0xFX1VTRVIiXSwiaWF0IjoxNTUzODQ3NTEzLCJleHAiOjE1NTY0Mzk1MTN9.DtTX260PyBzef_G-T0uXfbyL4Wlfd0sG6_kBduuBlis`;
  return window.localStorage.getItem("jwtToken");
}

/**
 *
 * @param { string } url        fetch url
 * @param { object } body       request body
 * @param { string } method     request method
 * @param { object } params     request params
 * @returns { AxiosStatic }
 */
export function fetchRequest(url, data = {}, method = "get", params = {}) {
  // const header = { Authorization: `Bearer ${getAccessToken()}` };
  return axios({
    method,
    url,
    data,
    params: params,
  });
}

export function downloadRequest(url, data = {}, method = "get", params = {}) {
  const header = { Authorization: `Bearer ${getAccessToken()}` };
  return axios({
    method,
    url,
    data,
    params: params,
    headers: header,
    responseType: "blob"
  });
}

/**
 * simple jwt validation
 * performs base64 decode and validate values
 * @param  {string} 	token 	JWT
 * @return {boolean}       		whether JWT is valid
 */
export const isValidJWT = token => {
  if (!token) return null;
  let base64Url;
  let base64;
  let data;

  try {
    base64Url = token.split(".")[1];
    base64 = base64Url.replace("-", "+").replace("_", "/");
    data = JSON.parse(window.atob(base64));
  } catch (err) {
    return false;
  }

  switch (true) {
    case data.role && data.role.length < 1:
    case Array.isArray(data.roles) && data.roles.length < 1:
    case data.exp * 1000 < new Date().getTime():
      return false;
    default:
    //do nothing
  }

  return true;
};

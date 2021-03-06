import axios from 'axios';
import * as actionTypes from './actionTypes';
import * as urls from './actionUrls';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    userId: userId
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
  localStorage.removeItem("userId");

  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

export const checkAuthenticationTimeout = (expirationTime) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 30000); // 30 days
  };
};

// Authentication
export const auth = (email, password, isSignup) => {
  return dispatch => {
    dispatch(authStart());
    
    const authData = {
      email: email,
      password: password
    };
    
    let url = urls.POST_LOGIN;
    axios.post(url, authData)
    .then(response => {
      // 30 days
      const expirationDate = new Date(new Date().getTime() + 2592000 * 1000);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("expirationDate", expirationDate);
      localStorage.setItem("userId", response.data.token);

      console.log(localStorage.getItem("token"));
      dispatch(authSuccess(response.data.token, response.data.token));
      dispatch(checkAuthenticationTimeout(2592000));
    })
    .catch(err => {
      dispatch(authFail(err.response.data.error));
    });
  };
};

export const setAuthRedirectPath = (path) => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path: path
  };
};

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        const userId = localStorage.getItem("userId");
        dispatch(authSuccess(token,userId));
        dispatch(checkAuthenticationTimeout(expirationDate.getTime() - new Date() / 100));
      }
    }
  };
};

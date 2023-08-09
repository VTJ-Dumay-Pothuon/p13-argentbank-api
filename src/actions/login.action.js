import axios from 'axios';

// Action types
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

// Action creators
export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = token => ({
  type: LOGIN_SUCCESS,
  payload: token,
});

export const loginFailure = error => ({
  type: LOGIN_FAILURE,
  payload: error,
});

// Async action to perform login
export const loginUser = (email, password) => {
  return dispatch => {
    dispatch(loginRequest());
    axios
      .post('http://localhost:3001/api/v1/user/login', {
        email,
        password,
      })
      .then(response => {
        const token = response.data.token;
        dispatch(loginSuccess(token));
      })
      .catch(error => {
        console.error("An error occurred:", error);
        dispatch(loginFailure(error.message));
      });
  };
};

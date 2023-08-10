import axios from 'axios'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

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
    dispatch(loginRequest())
    axios
      .post('http://localhost:3001/api/v1/user/login', {email, password} )
      .then(response => {
        const token = response.data.body.token
        import('js-cookie').then(jsCookie => {
          jsCookie.default.set('token', token, { expires: 7, sameSite: 'none', secure: true })
        });
        dispatch(loginSuccess(token))
      })
      .catch(error => {
        dispatch(loginFailure(error.message))
      });
  };
};

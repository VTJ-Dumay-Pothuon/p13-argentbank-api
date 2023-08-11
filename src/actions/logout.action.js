import jsCookie from 'js-cookie';

export const LOGOUT = 'LOGOUT';

export const logout = () => {
  return dispatch => {
    dispatch({ type: LOGOUT })
    jsCookie.remove('token')
  };
};

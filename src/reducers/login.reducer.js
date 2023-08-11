import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/login.action'
import { LOGOUT } from '../actions/logout.action'

const initialState = {
  loading: false,
  token: null,
  error: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        token: null,
        error: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        profileData: null,
        loading: false,
        token: null,
        error: null,
      };
    default:
      return state;
  }
};

export default loginReducer
import {
    FETCH_PROFILE_REQUEST,
    FETCH_PROFILE_SUCCESS,
    FETCH_PROFILE_FAILURE,
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAILURE,
  } from '../actions/profile.action'
  
  const initialState = {
    profileData: null,
    loading: false,
    error: null,
  };
  
  const profileReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_PROFILE_REQUEST:
      case UPDATE_PROFILE_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_PROFILE_SUCCESS:
      case UPDATE_PROFILE_SUCCESS:
        return {
          ...state,
          loading: false,
          profileData: action.payload,
        };
      case FETCH_PROFILE_FAILURE:
      case UPDATE_PROFILE_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
export default profileReducer
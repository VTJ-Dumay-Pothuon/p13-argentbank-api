import axios from 'axios'
import jsCookie from 'js-cookie'

// Read
export const FETCH_PROFILE_REQUEST = 'FETCH_PROFILE_REQUEST'
export const FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS'
export const FETCH_PROFILE_FAILURE = 'FETCH_PROFILE_FAILURE'

export const fetchProfileRequest = () => ({
  type: FETCH_PROFILE_REQUEST,
});

export const fetchProfileSuccess = profile => ({
  type: FETCH_PROFILE_SUCCESS,
  payload: profile
});

export const fetchProfileFailure = error => ({
  type: FETCH_PROFILE_FAILURE,
  payload: error
});


// Update
export const UPDATE_PROFILE_REQUEST = 'UPDATE_PROFILE_REQUEST'
export const UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS'
export const UPDATE_PROFILE_FAILURE = 'UPDATE_PROFILE_FAILURE'

export const fetchUserProfile = () => {
    return dispatch => {
      dispatch(fetchProfileRequest())
  
      const token = jsCookie.get('token')

      if (!token) { return }
  
      axios.post('http://localhost:3001/api/v1/user/profile', null, {
        headers: {Authorization: `Bearer ${token}`}
      })
      .then(response => {
        const profileData = response.data
        dispatch(fetchProfileSuccess(profileData))
      })
      .catch(error => {
        console.error("An error occurred:", error)
        dispatch(fetchProfileFailure(error.message))
      });
    };
};


export const updateProfileRequest = () => ({
  type: UPDATE_PROFILE_REQUEST,
});

export const updateProfileSuccess = updatedProfile => ({
  type: UPDATE_PROFILE_SUCCESS,
  payload: updatedProfile
});

export const updateProfileFailure = error => ({
  type: UPDATE_PROFILE_FAILURE,
  payload: error
});


export const updateUserProfile = (updatedData) => {
  return dispatch => {
    dispatch(updateProfileRequest());
    
    const token = jsCookie.get('token');

    axios.put('http://localhost:3001/api/v1/user/profile', updatedData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      const updatedProfile = response.data
      dispatch(updateProfileSuccess(updatedProfile))
    })
    .catch(error => {
      console.error("An error occurred:", error)
      dispatch(updateProfileFailure(error.message))
    });
  };
};

// Types d'actions pour le profil utilisateur
export const PROFILE_REQUEST = 'PROFILE_REQUEST';
export const PROFILE_SUCCESS = 'PROFILE_SUCCESS';
export const PROFILE_FAILURE = 'PROFILE_FAILURE';
export const PROFILE_UPDATE_REQUEST = 'PROFILE_UPDATE_REQUEST';
export const PROFILE_UPDATE_SUCCESS = 'PROFILE_UPDATE_SUCCESS';
export const PROFILE_UPDATE_FAILURE = 'PROFILE_UPDATE_FAILURE';

// Action creators pour le profil utilisateur
export const profileRequest = () => ({
  type: PROFILE_REQUEST,
});

export const profileSuccess = (profileData) => ({
  type: PROFILE_SUCCESS,
  payload: profileData,
});

export const profileFailure = (error) => ({
  type: PROFILE_FAILURE,
  payload: error,
});

export const profileUpdateRequest = () => ({
  type: PROFILE_UPDATE_REQUEST,
});

export const profileUpdateSuccess = (updatedProfileData) => ({
  type: PROFILE_UPDATE_SUCCESS,
  payload: updatedProfileData,
});

export const profileUpdateFailure = (error) => ({
  type: PROFILE_UPDATE_FAILURE,
  payload: error,
});
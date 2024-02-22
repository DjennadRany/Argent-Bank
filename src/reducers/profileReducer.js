// Types d'actions potentielles pour le profil utilisateur
const PROFILE_REQUEST = 'PROFILE_REQUEST';
const PROFILE_SUCCESS = 'PROFILE_SUCCESS';
const PROFILE_FAILURE = 'PROFILE_FAILURE';
const PROFILE_UPDATE = 'PROFILE_UPDATE';

// État initial du profil utilisateur
const initialState = {
  loading: false,
  profile: null,
  error: null,
};

// Reducer pour le profil utilisateur
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        profile: action.payload,
        error: null,
      };
    case PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case PROFILE_UPDATE:
      return {
        ...state,
        profile: { ...state.profile, ...action.payload },
        error: null,
      };
    default:
      return state;
  }
};

export default profileReducer;
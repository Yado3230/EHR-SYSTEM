import { userActionTypes } from './userTypes';

const INITIAL_STATE = {
  role: {},
  hospitalID: null,
  hospitalData: {},
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.TOGGLE_ROLE:
      return {
        ...state,
        role: action.payload,
      };
    case userActionTypes.SET_HOSPITAL_ID:
      return {
        ...state,
        hospitalID: action.payload,
      };
    case userActionTypes.SET_HOSPITAL_DATA:
      return {
        ...state,
        hospitalData: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;

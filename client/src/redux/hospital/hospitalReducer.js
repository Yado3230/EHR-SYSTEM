import { userActionTypes } from './hospitalTypes';

const INITIAL_STATE = {
  hospitalData: {},
};

const hospitalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SET_HOSPITAL_DATA:
      return {
        ...state,
        hospitalData: action.payload,
      };
    default:
      return state;
  }
};

export default hospitalReducer;

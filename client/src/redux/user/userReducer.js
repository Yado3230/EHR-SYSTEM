import { userActionTypes } from './userTypes';

const INITIAL_STATE = {
  role: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.TOGGLE_ROLE:
      return {
        ...state,
        role: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;

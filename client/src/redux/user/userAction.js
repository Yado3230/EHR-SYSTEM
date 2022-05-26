import { userActionTypes } from './userTypes';
export const toggleRole = item => ({
  type: userActionTypes.TOGGLE_ROLE,
  payload: item,
});

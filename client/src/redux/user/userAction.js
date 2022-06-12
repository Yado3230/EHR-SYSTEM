import { userActionTypes } from './userTypes';
export const toggleRole = item => ({
  type: userActionTypes.TOGGLE_ROLE,
  payload: item,
});
export const setHospitalID = item => ({
  type: userActionTypes.SET_HOSPITAL_ID,
  payload: item,
});
export const setHospitalData = item => ({
  type: userActionTypes.SET_HOSPITAL_DATA,
  payload: item,
});

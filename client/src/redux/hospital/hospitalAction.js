import { userActionTypes } from './hospitalTypes';
export const setHospitalData = item => ({
  type: userActionTypes.SET_HOSPITAL_DATA,
  payload: item,
});


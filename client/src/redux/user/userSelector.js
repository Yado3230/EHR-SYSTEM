import { createSelector } from 'reselect';

const selectData = state => state.user;

export const selectRole = createSelector([selectData], user => user.role);
export const selectHospitalID = createSelector(
  [selectData],
  user => user.hospitalID
);
export const selectHospitalData = createSelector(
  [selectData],
  user => user.hospitalData
);

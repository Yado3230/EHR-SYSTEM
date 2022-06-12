import { createSelector } from 'reselect';

const selectData = state => state.hospital;

export const selectHospitalData = createSelector(
  [selectData],
  user => user.hospitalData
);

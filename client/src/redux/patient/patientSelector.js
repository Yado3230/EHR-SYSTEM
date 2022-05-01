import { createSelector } from "reselect";

const selectData = (state) => state.patientData;

export const selectReceptionistData = createSelector(
  [selectData],
  (doctorData) => doctorData.data
);
export const selectActive = createSelector(
  [selectData],
  (doctorData) => doctorData.active
);
export const selectHiddenToggle = createSelector(
  [selectData],
  (doctorData) => doctorData.content
);
export const selectHidden = createSelector(
  [selectData],
  (doctorData) => doctorData.hidden
);

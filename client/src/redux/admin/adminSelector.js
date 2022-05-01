import { createSelector } from "reselect";

const selectData = (state) => state.adminData;

export const selectReceptionistData = createSelector(
  [selectData],
  (adminData) => adminData.data
);
export const selectActive = createSelector(
  [selectData],
  (adminData) => adminData.active
);
export const selectHiddenToggle = createSelector(
  [selectData],
  (adminData) => adminData.content
);
export const selectHidden = createSelector(
  [selectData],
  (adminData) => adminData.hidden
);

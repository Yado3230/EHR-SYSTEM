import { createSelector } from 'reselect';

const selectData = state => state.menuBarData;

export const selectReceptionistData = createSelector(
  [selectData],
  menuBarData => menuBarData.data
);
export const selectActive = createSelector(
  [selectData],
  menuBarData => menuBarData.active
);
export const selectHiddenToggle = createSelector(
  [selectData],
  menuBarData => menuBarData.content
);
export const selectHidden = createSelector(
  [selectData],
  menuBarData => menuBarData.hidden
);

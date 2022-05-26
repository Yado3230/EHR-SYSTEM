import { createSelector } from 'reselect';

const selectData = state => state.user;

export const selectRole = createSelector(
  [selectData],
  user => user.role
);
// export const selectActive = createSelector(
//   [selectData],
//   menuBarData => menuBarData.active
// );
// export const selectHiddenToggle = createSelector(
//   [selectData],
//   menuBarData => menuBarData.content
// );
// export const selectHidden = createSelector(
//   [selectData],
//   menuBarData => menuBarData.hidden
// );

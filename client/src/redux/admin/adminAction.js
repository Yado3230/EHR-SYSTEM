import { userActionTypes } from "./adminTypes";
export const toggleActiveMenu = () => ({
  type: userActionTypes.TOGGLE_ACTIVE_MENU,
});
export const toggleHiddenItem = (item) => ({
  type: userActionTypes.TOGGLE_HIDDEN_ITEM,
  payload: item,
});
export const toggleHidden = () => ({
  type: userActionTypes.TOGGLE_HIDDEN,
});

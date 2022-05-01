import { userActionTypes } from "./adminTypes";
import { AdminMenuData } from "../SideBarData";

const INITIAL_STATE = {
  data: AdminMenuData,
  active: false,
  content: [],
  hidden: AdminMenuData.hidden,
};

const adminReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.TOGGLE_ACTIVE_MENU:
      return {
        ...state,
        active: !state.active,
      };
    case userActionTypes.TOGGLE_HIDDEN_ITEM:
      return {
        ...state,
        content: state.data.filter((data) => data.id === action.payload.id),
      };
    case userActionTypes.TOGGLE_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};

export default adminReducer;

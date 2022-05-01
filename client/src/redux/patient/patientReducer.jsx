import { userActionTypes } from "./patientTypes";
import { PatientMenuData } from "../SideBarData";

const INITIAL_STATE = {
  data: PatientMenuData,
  active: false,
  content: [],
  hidden: PatientMenuData.hidden,
};

const patientReducer = (state = INITIAL_STATE, action) => {
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

export default patientReducer;

import { combineReducers } from 'redux';
import receptionistReducer from './receptionist/receptionistReducer';
import doctorReducer from './doctor/doctorReducer';
import adminReducer from './admin/adminReducer';
import patientReducer from './patient/patientReducer';

export default combineReducers({
  menuBarData: receptionistReducer,
  doctorData: doctorReducer,
  adminData: adminReducer,
  patientData: patientReducer,
});

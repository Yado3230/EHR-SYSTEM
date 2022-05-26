import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import receptionistReducer from './receptionist/receptionistReducer';
import doctorReducer from './doctor/doctorReducer';
import adminReducer from './admin/adminReducer';
import patientReducer from './patient/patientReducer';
import userReducer from './user/userReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
};
const rootReducer = combineReducers({
  menuBarData: receptionistReducer,
  doctorData: doctorReducer,
  adminData: adminReducer,
  patientData: patientReducer,
  user: userReducer,
});

export default persistReducer(persistConfig, rootReducer);

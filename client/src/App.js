import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Admin from './dashboards/Admin/Admin';
import Doctor from './dashboards/Doctor/Doctor';
import Patient from './dashboards/Patient/Patient';
import Receptionist from './dashboards/Receptionist/Receptionist.component';
import Login from './pages/login/Login';
import ForgotPassword from './components/Password/ForgotPassword';
import ResetPassword from './components/Password/ResetPassword';
import CheckEmail from './components/Password/CheckEmail';
// import ProtectedRoutes from './protectedRoutes/ProtectedRoutes';
import Layout from './components/Layout/Layout';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Unauthorized from './utils/Unauthorized';
import EditUser from './components/Patients/AddPatient/EditUser';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Login />} />
        <Route element={<RequireAuth allowedRoles={['receptionist']} />}>
          <Route path="/receptionist/*" element={<Receptionist />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={'doctor'} />}>
          <Route path="/doctor/*" element={<Doctor />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={'admin'} />}>
          <Route path="/admin/*" element={<Admin />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={'patient'} />}>
          <Route path="/patient/*" element={<Patient />} />
        </Route>
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/resetPassword" element={<CheckEmail />} />
        <Route path="/edit" element={<EditUser />} />
        <Route
          path="/api/auth/resetPassword/:token"
          element={<ResetPassword />}
        />
      </Route>
    </Routes>
  );
};

export default App;

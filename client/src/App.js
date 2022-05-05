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

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/receptionist/*" element={<Receptionist />} />
        <Route path="/doctor/*" element={<Doctor />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/patient/*" element={<Patient />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/resetPassword" element={<CheckEmail />} />
        <Route
          path="/api/auth/resetPassword/:token"
          element={<ResetPassword />}
        />
      </Routes>
    </div>
  );
};

export default App;

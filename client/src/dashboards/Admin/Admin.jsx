import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddAppointment from '../../components/Appointment/AddAppointment';
import Appointment from '../../components/Appointment/Appointment';
import DoctorList from '../../components/doctors/DoctorList';
import Header from '../../components/Header/Header';
import AddStaff from '../../components/HumanResources/addNewStaff';
import HumanResource from '../../components/HumanResources/HumanResource';
import PatientList from '../../components/Patients/Patient List/PatientList';
import Profile from '../../components/Profile/Profile';
import Schedule from '../../components/Schedule/Schedule';
import AdminSideBar from '../../components/sidebar/individuals/AdminSideBar';
import AdminDashboard from './AdminDashboard';

const Admin = () => {
  return (
    <div className="flex text-xl">
      <AdminSideBar />
      <div className="flex flex-col flex-1">
        <Header />
        <Routes>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="patients/lists" element={<PatientList />} />
          <Route path="doctors/lists" element={<DoctorList />} />
          <Route path="schedule/schedules" element={<Schedule />} />
          <Route path="humanresouces/:role" element={<HumanResource />} />
          <Route path="humanresouces/addnew/:role" element={<AddStaff />} />
          <Route path="appointment/lists" element={<Appointment />} />
          <Route
            path="appointment/lists/add_appointment"
            element={<AddAppointment />}
          />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
};
export default Admin;

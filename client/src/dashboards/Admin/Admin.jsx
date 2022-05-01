import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DoctorList from '../../components/doctors/DoctorList';
import Header from '../../components/Header/Header';
import PatientList from '../../components/Patients/Patient List/PatientList';
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
        </Routes>
      </div>
    </div>
  );
};
export default Admin;

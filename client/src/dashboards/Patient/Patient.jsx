import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Profile from '../../components/Profile/Profile';
import PatientSideBar from '../../components/sidebar/individuals/PatientSideBar';

const Patient = () => {
  return (
    <div className="flex text-xl">
      <PatientSideBar />
      <div className="flex flex-col flex-1">
        <Header />
        <Routes>
          <Route path="profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
};
export default Patient;

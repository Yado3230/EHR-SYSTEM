import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../../components/Header/Header';
import PatientList from '../../components/Patients/Patient List/PatientList';
import Prescription from '../../components/prescription/Prescription';
import DoctorSideBar from '../../components/sidebar/individuals/DoctorSideBar';
import AddTreatment from '../../components/Treatment/AddTreatment';

const Doctor = () => {
  return (
    <div className="flex text-xl">
      <DoctorSideBar />
      <div className="flex flex-col flex-1">
        <Header />
        <Routes>
          <Route path="patients/lists" element={<PatientList />} />
          <Route path="treatment/add_treatment" element={<AddTreatment />} />
          <Route path="prescription" element={<Prescription />} />
        </Routes>
      </div>
    </div>
  );
};
export default Doctor;

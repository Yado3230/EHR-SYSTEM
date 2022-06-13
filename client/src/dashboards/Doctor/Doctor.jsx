import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SearchForPatients from '../../components/FromOtherHospital/SearchForPatients';
import Header from '../../components/Header/Header';
import PatientList from '../../components/Patients/Patient List/PatientList';
import Prescription from '../../components/prescription/Prescription';
import Profile from '../../components/Profile/Profile';
import DoctorSideBar from '../../components/sidebar/individuals/DoctorSideBar';
import AddTreatment from '../../components/Treatment/AddTreatment';
import TreatmentList from '../../components/Treatment/TreatmentList';

const Doctor = () => {
  return (
    <div className="flex text-xl">
      <DoctorSideBar />
      <div className="flex flex-col flex-1">
        <Header />
        <Routes>
          <Route path="patients/lists" element={<PatientList />} />
          <Route path="treatment/add_treatment" element={<AddTreatment />} />
          <Route path="treatment/treatment_list" element={<TreatmentList />} />
          <Route path="prescription" element={<Prescription />} />
          <Route
            path="patients/searchpatients"
            element={<SearchForPatients />}
          />

          <Route path="profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
};
export default Doctor;

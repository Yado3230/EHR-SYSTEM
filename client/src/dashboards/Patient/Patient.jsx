import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../../components/Header/Header";
import AddPatient from "../../components/Patients/AddPatient/AddPatient";
import PatientSideBar from "../../components/sidebar/individuals/PatientSideBar";

const Patient = () => {
  return (
    <div className="flex text-xl">
      <PatientSideBar />
      <div className="flex flex-col flex-1">
        <Header />
        <Routes>
          <Route path="patients/add_patient" element={<AddPatient />} />
        </Routes>
      </div>
    </div>
  );
};
export default Patient;
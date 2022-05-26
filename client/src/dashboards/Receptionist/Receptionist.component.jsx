import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddAppointment from '../../components/Appointment/AddAppointment';
import Appointment from '../../components/Appointment/Appointment';
import Calender from '../../components/Calendar/Calender';
import Header from '../../components/Header/Header';
import PatientRegistration from '../../components/Patients/AddPatient/PatientRegistration';
import PatientList from '../../components/Patients/Patient List/PatientList';
import Profile from '../../components/Profile/Profile';
import Schedule from '../../components/Schedule/Schedule';
import ReceptionistSideBar from '../../components/sidebar/individuals/ReceptionistSideBar';
import UserActivity from '../../components/UserActivities/UserActivity';
import ReceptionistDashboard from './ReceptionistDashboard';

const Receptionist = () => {
  return (
    <div className="flex text-xl">
      <ReceptionistSideBar />
      <div className="flex flex-col flex-1">
        <Header />
        <Routes>
          <Route
            path="patients/lists/add_patient"
            element={<PatientRegistration />}
          />
          <Route path="dashboard" element={<ReceptionistDashboard />} />
          <Route path="patients/lists" element={<PatientList />} />
          <Route path="schedule/schedules" element={<Schedule />} />
          <Route
            path="appointment/lists"
            element={<Appointment />}
          />
          <Route
            path="appointment/lists/add_appointment"
            element={<AddAppointment />}
          />
          <Route path="profile" element={<Profile />} />
          <Route path="calender" element={<Calender />} />
          <Route path="user_activity" element={<UserActivity />} />
        </Routes>
      </div>
    </div>
  );
};
export default Receptionist;

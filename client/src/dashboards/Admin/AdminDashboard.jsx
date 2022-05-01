import React from 'react';
import CountUp from 'react-countup';
import patients from '../../assets/patients.png';

const AdminDashboard = () => {
  return (
    <div className=" border shadow flex bg-white p-4 m-4">
      <div className="border shadow w-56 flex justify-between p-2 my-2 mx-4">
        <div>
          <img className="w-16 h-16" src={patients} alt="patients" />
        </div>
        <div className="p-2">
          <div className="value">
            <CountUp
              className="text-blue-700 text-3xl font-medium mb-3 justify-self-end"
              start={0}
              end={80}
              duration={2.5}
              delay={0}
            />
          </div>
          <div className="label">Doctors</div>
        </div>
      </div>
      <div className="border shadow w-56 flex justify-between p-2 mx-4 my-2">
        <div>
          <img className="w-16 h-16" src={patients} alt="patients" />
        </div>
        <div className="p-2">
          <div className="value">
            <CountUp
              className="text-blue-700 text-3xl font-medium mb-3"
              start={0}
              end={1320}
              duration={2.5}
              delay={0}
            />
          </div>
          <div className="label">Patients</div>
        </div>
      </div>
      <div className="border shadow w-56 flex justify-between p-2 mx-4 my-2">
        <div>
          <img className="w-16 h-16" src={patients} alt="patients" />
        </div>
        <div className="p-2">
          <div className="value">
            <CountUp
              className="text-blue-700 text-3xl font-medium mb-3"
              start={0}
              end={120}
              duration={2.5}
              delay={0}
            />
          </div>
          <div className="label text-xl">Staffs</div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

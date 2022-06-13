import React, { useEffect, useState } from 'react';
import { API1 } from '../../utils/API';
import { useNavigate } from 'react-router-dom';

const Appointment = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchdata = async () => {
      const result = await API1.get('api/system/appointment');
      setData(result.data.data.appointments);
    };
    fetchdata();
  }, []);

  const handleAddClick = () => {
    navigate('add_appointment');
  };
  return (
    <div
      className={`add-patient flex flex-col col-span-8 my-6 mx-12 bg-white border-gray-700 rounded-md shadow}`}
    >
      <div className="add-patient-header flex justify-between text-black px-2 h-11 rounded-tr-md flex items-center rounded-tl-md">
        <h3>Appointment</h3>
        <button
          className="text-sm rounded shadow bg-sky-400 p-2 text-white"
          onClick={handleAddClick}
        >
          Add Appointment
        </button>
      </div>
      <div className="ui divider"></div>
      <div className="flex mx-1 px-1">
        <button className="p-2 text-gray-500 border rounded shadow bg-gray-100">
          All
        </button>
        <button className="p-2 text-gray-500">Pending</button>
        <button className="p-2 text-gray-500">Cofirmed</button>
        <button className="p-2 text-gray-500">Treated</button>
        <button className="p-2 text-gray-500">Cancelled</button>
        <button className="p-2 text-gray-500">Requesed</button>
      </div>
      <div className="ui divider"></div>
      <div className="flex flex-col p-4">
        <div className="ui right icon input h-8 w-40 self-end mb-2">
          <input type="text" className="text-sm" placeholder="Search..." />
          <i className="patient icon small"></i>
          {/* <i className="search icon"></i> */}
        </div>
        <table className="border-collapse border border-gray-200 ">
          <thead className="bg-gray-100">
            <tr className="items-center gap-0 border border-gray-300 bg-slate-200 text-base">
              <th className="border border-gray-300">Id</th>
              <th className="border border-gray-300">Patient</th>
              <th className="border border-gray-300">Doctor</th>
              <th className="border border-gray-300">Date-Time</th>
              <th className="border border-gray-300">Remarks</th>
              <th className="border border-gray-300">Status</th>
              <th className="border border-gray-300">Options</th>
            </tr>
          </thead>
          <tbody>
            {data !== null && data instanceof Array
              ? data.map(item => {
                  return (
                    <tr key={item.id}>
                      <td className="border col-span-4 py-1 px-2 self-center">
                        {item.id}
                      </td>
                      <td className="border col-span-4 py-1 px-2 self-center">
                        {item.patient}
                      </td>
                      <td className="border col-span-4 py-1 px-2 self-center">
                        {item.doctor}
                      </td>
                      <td className="border col-span-4 py-1 px-2 self-center">
                        {item.date}
                      </td>
                      <td className="border col-span-4 py-1 px-2 self-center">
                        {item.remarks}
                      </td>
                      <td className="border col-span-4 py-1 px-2 self-center">
                        {item.status}
                      </td>
                      <td className="border col-span-4 py-1 px-2 self-center">
                        {item.options}
                      </td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Appointment;

import React from 'react';

const PrescriptionList = () => {
  return (
    <div
      className={`add-patient flex flex-col col-span-8 my-6 mx-12 bg-white border-gray-700 rounded-md shadow}`}
    >
      <div className="add-patient-header flex justify-between text-black px-2 h-11 rounded-tr-md flex items-center rounded-tl-md">
        <h3>Prescription</h3>
        <button className="text-sm rounded shadow bg-sky-400 p-2 text-white">
          Add New
        </button>
      </div>
      <div className="ui divider"></div>
      <div className="flex mx-1 px-1">
        <div className="field text-sm">
          <select className="ui dropdown">
            <option value="1">ALL</option>
            <option value="0">10</option>
            <option value="0">20</option>
            <option value="0">50</option>
            <option value="0">100</option>
          </select>
        </div>
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
            <tr>
              <th className="border border-gray-300">ID</th>
              <th className="border border-gray-300">Date</th>
              <th className="border border-gray-300">Patient Name</th>
              <th className="border border-gray-300">Patient ID</th>
              <th className="border border-gray-300">Medicine</th>
              <th className="border border-gray-300">Options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border col-span-4 py-1 px-2 self-center"></td>
              <td className="border col-span-4 py-1 px-2 self-center"></td>
              <td className="border col-span-4 py-1 px-2 self-center"></td>
              <td className="border col-span-4 py-1 px-2 self-center"></td>
              <td className="border col-span-4 py-1 px-2 self-center"></td>
              <td className="border col-span-4 py-1 px-2 self-center"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default PrescriptionList;

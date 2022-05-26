import React from 'react';

const Schedule = () => {
  return (
    <div
      className={`add-patient flex flex-col col-span-8 my-6 mx-12 bg-white border-gray-700 rounded-md shadow}`}
    >
      <h3 className="add-patient-header bg-blue-300 h-12 rounded-tr-md flex p-4 items-center rounded-tl-md">
        Time Schedule
      </h3>
      <div className="flex flex-col p-4">
        <div className="ui right icon input h-8 w-40 self-end mb-2">
          <input
            type="text"
            className="text-sm"
            placeholder="Search schedule..."
          />
          <i className="patient icon small"></i>
          {/* <i className="search icon"></i> */}
        </div>
        <table className="border-collapse border border-gray-200">
          <thead>
            <tr className="items-center gap-0 border border-gray-300 bg-slate-200 text-base">
              <th className="border border-gray-300">Doctor</th>
              <th className="border border-gray-300">Weekday</th>
              <th className="border border-gray-300">Start Time</th>
              <th className="border border-gray-300">End Time</th>
              <th className="border border-gray-300">Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
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
export default Schedule;

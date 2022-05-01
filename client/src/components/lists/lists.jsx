import React from 'react';
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Lists = ({ activeHidden, data, handleClick, handleEditClick, title }) => {
  return (
    <div
      className={`add-patient flex flex-col col-span-8 my-6 mx-12 bg-white border-gray-700 rounded-md shadow ${
        !activeHidden ? 'hidden' : ''
      }`}
    >
      <h3 className="add-patient-header bg-blue-300 h-12 rounded-tr-md flex p-4 items-center rounded-tl-md">
        {title}
      </h3>
      <div className="flex flex-col p-4">
        <div class="ui right icon input h-8 w-40 self-end mb-2">
          <input
            type="text"
            className="text-sm"
            placeholder="Search patient..."
          />
          <i class="user icon small"></i>
          {/* <i class="search icon"></i> */}
        </div>
        <table className="border-collapse border border-gray-200">
          <thead>
            <tr className="grid grid-cols-12 items-center gap-0 border border-gray-300 bg-slate-200 text-base">
              <th className="border border-gray-300 col-span-3">ID</th>
              <th className="border border-gray-300 col-span-4">Name</th>
              <th className="border border-gray-300 col-span-3">Email</th>
              <th className="border border-gray-300 col-span-2">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="py-0">
              {data !== null && data instanceof Array
                ? data.map(item => {
                    return (
                      <div
                        key={item._id}
                        className="grid grid-cols-12 gap-0 text-sm"
                      >
                        <td className="border-y py-1 col-span-3 self-center">
                          <span className="p-1">{item._id}</span>
                        </td>
                        <td className="border col-span-4 py-1 self-center">
                          <span className="p-1">{item.firstName}</span>
                          <span className="p-1">{item.lastName}</span>
                          <span className="p-1">{item.middleName}</span>
                        </td>
                        <td className="col-span-3 border-y border-r py-1 self-center">
                          <span className="p-1">{item.email}</span>
                        </td>
                        <td className="p-1 flex py-1 self-center">
                          <button
                            className="info-button border rounded h-6 text-white px-2 mx-1"
                            onClick={() => handleClick(item._id)}
                          >
                            <InfoIcon fontSize="small" />
                          </button>
                          <button
                            className="edit-button border rounded h-6 text-gray-500 px-2 mx-1"
                            onClick={() => handleEditClick(item._id)}
                          >
                            <EditIcon fontSize="small" />
                          </button>
                          <button className="delete-button border rounded h-6 text-white px-2 mx-1">
                            <DeleteIcon fontSize="small" />
                          </button>
                        </td>
                      </div>
                    );
                  })
                : null}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Lists;

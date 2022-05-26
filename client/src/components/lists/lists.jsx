import React, { useState } from 'react';
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PaginationExampleCompact from '../../utils/pagination';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import API from '../../utils/API';

const Lists = ({ data, handleDeleteClick, title, handleAddClick }) => {
  const [filtered, setFiltered] = useState(10);
  const MySwal = withReactContent(Swal);
  const [id, setId] = useState();
  const [activeHidden, setActiveHidden] = useState(false);
  const [user, setUser] = useState([]);
  const [hideDetails, setHideDetails] = useState(true);
  const Alert = message => {
    MySwal.fire({
      position: 'center',
      icon: 'success',
      title: message,
      showConfirmButton: false,
      timer: 1500,
    });
  };
  const handleFilter = e => {
    if (e.target.value === 'ALL') {
      setFiltered(1000);
    } else {
      setFiltered(e.target.value);
    }
  };
  const handleEditClick = (id, item) => {
    setId(id);
    setUser(item);
    setActiveHidden(true);
  };

  // edit handlers
  const handleChange = e => {
    const { name, value } = e.target;
    setUser({
      ...user, //spread operator
      [name]: value,
    });
  };
  const handleDetailsClick = (id, item) => {
    setId(id);
    setUser(item);
    setHideDetails(false);
  };
  const updateUser = async e => {
    e.preventDefault();
    try {
      const result = await API.patch(
        `api/system/patients/updatepatient/${id}`,
        user
      ).then(res => {
        console.log(res);
        return res;
      });
      if (result.status === 200) {
        const message = 'Updated Successfully';
        Alert(message);
      } else {
        const message = 'failed';
        Alert(message);
      }
    } catch (error) {
      console.log(error);
    }
    setActiveHidden(false);
  };

  return (
    <div>
      <div
        className={`add-patient flex flex-col my-6 mx-12 bg-white border-gray-700 rounded-md shadow ${
          activeHidden || !hideDetails ? 'hidden' : ''
        }`}
      >
        <h3 className="add-patient-header bg-blue-300 h-12 rounded-tr-md flex p-4 items-center rounded-tl-md">
          {title}
        </h3>
        <div className="ui divider"></div>
        <div className="flex justify-between px-4">
          <div className="field text-sm">
            <select
              className="ui dropdown"
              name="filter"
              value={filtered}
              onChange={handleFilter}
            >
              <option>ALL</option>
              <option>10</option>
              <option>20</option>
              <option>50</option>
              <option>100</option>
            </select>
          </div>
          <button
            className="text-sm rounded shadow bg-sky-400 p-2 text-white"
            onClick={handleAddClick}
          >
            Add New
          </button>
        </div>
        <div className="ui divider"></div>
        <div className="flex flex-col px-4 pb-4">
          <div className="ui right icon input h-8 w-40 self-end mb-2">
            <input
              type="text"
              className="text-sm"
              placeholder="Search patient..."
            />
            <i className="user icon small"></i>
            {/* <i className="search icon"></i> */}
          </div>
          <table className="border-collapse border border-gray-200">
            <thead>
              <tr className="items-center gap-0 border border-gray-300 bg-slate-200 text-base">
                <th className="border border-gray-300 ">ID</th>
                <th className="border border-gray-300 ">Name</th>
                <th className="border border-gray-300 ">Email</th>
                <th className="border border-gray-300 ">Phone</th>
                <th className="border border-gray-300 ">Action</th>
              </tr>
            </thead>
            <tbody>
              {data !== null && data instanceof Array
                ? data
                    .filter((item, index) => index < filtered)
                    .map(item => {
                      return (
                        <tr key={item._id} className="text-normal">
                          <td className="border-y py-1">
                            <span className="p-1">{item._id}</span>
                          </td>
                          <td className="border  py-1 self-center">
                            {item.name}
                          </td>
                          <td className=" border-y border-r py-1 self-center">
                            <span className="p-1">{item.email}</span>
                          </td>
                          <td className=" border-y border-r py-1 self-center">
                            <span className="p-1">{item.phone}</span>
                          </td>
                          <td className="p-1 flex py-1 self-end">
                            <button
                              className="info-button border rounded h-8 text-white px-2 mx-1 flex items-center"
                              onClick={() => handleDetailsClick(item._id, item)}
                            >
                              <InfoIcon fontSize="small" />
                              <span>Details</span>
                            </button>
                            <button
                              className="edit-button border rounded h-8 text-gray-500 px-2 mx-1 flex items-center"
                              onClick={() => handleEditClick(item._id, item)}
                            >
                              <EditIcon fontSize="small" />
                              <span>Edit</span>
                            </button>
                            <button
                              className="delete-button border rounded h-8 text-white px-2 mx-1 left-1 flex items-center"
                              onClick={() => handleDeleteClick(item.id)}
                            >
                              <DeleteIcon fontSize="small" />
                              <span>Delete</span>
                            </button>
                          </td>
                        </tr>
                      );
                    })
                : null}
            </tbody>
          </table>
          <div className="ui divider"></div>
          <div className="flex justify-start">
            <PaginationExampleCompact />
          </div>
        </div>
      </div>
      {/* edit start */}
      <div
        className={`flex sticky m-5 mx-80 justify-center h-7/12 w-5/12 border rounded shadow ${
          !activeHidden ? 'hidden' : ''
        }`}
      >
        <form
          action=""
          className="ui form flex w-full flex-col p-4 bg-white border-none"
          onSubmit={updateUser}
        >
          <div className="flex-flex-col my-2">
            <h3 className="h-12 flex text-3xl justify-center items-center border rounded py-4 my-4">
              Edit Information
            </h3>
            <div className="ui divider"></div>
            <div className="two fields p-2">
              <div className="field">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                />
              </div>
              <div className="field">
                <label htmlFor="">Age</label>
                <input
                  type="number"
                  min={0}
                  name="age"
                  placeholder="age"
                  value={user.age}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="two fields p-2">
            <div className="field">
              <label className="label">Blood Group</label>
              <select
                className="ui dropdown"
                name="bloodGroup"
                value={user.bloodGroup}
                onChange={handleChange}
              >
                <option>Blood Group</option>
                <option>A</option>
                <option>B</option>
                <option>AB</option>
                <option>O</option>
              </select>
            </div>
          </div>
          <div className="two fields p-2">
            <div className="field">
              <label className="label">Gender</label>
              <select
                className="ui dropdown"
                name="gender"
                value={user.gender}
                onChange={handleChange}
                required
              >
                <option>Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            <div className="field">
              <label className="label">Marital Status</label>
              <select
                className="ui dropdown"
                name="maritalStatus"
                value={user.maritalStatus}
                onChange={handleChange}
              >
                <option value="">Marital Status</option>
                <option>Single</option>
                <option>Married</option>
                <option>Widowed</option>
                <option>Divorced</option>
              </select>
            </div>
          </div>
          <div className="three fields p-2">
            <div className="field">
              <label htmlFor="" className="label">
                E-mail:
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label htmlFor="" className="label">
                Address:
              </label>
              <input
                type="text"
                placeholder="Address"
                name="address"
                value={user.address}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label htmlFor="" className="label">
                Phone Number:
              </label>
              <input
                type="text"
                placeholder="Phone Number"
                name="phone"
                value={user.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex-flex-col my-2">
            <div className="three fields p-2">
              <div className="field">
                <label htmlFor="" className="label">
                  Name of friend or relative
                </label>
                <input
                  type="text"
                  placeholder="optional"
                  name="emergency"
                  // value={user.emergency[0]}
                  onChange={handleChange}
                />
              </div>
              <div className="field">
                <label htmlFor="" className="label">
                  Relationship with family
                </label>
                <input
                  type="text"
                  placeholder="optional"
                  name="emergency"
                  // value={user.emergency[1]}
                  onChange={handleChange}
                />
              </div>
              <div className="field">
                <label htmlFor="" className="label">
                  Emergency Phone Number
                </label>
                <input
                  type="text"
                  placeholder="optional"
                  name="emergency"
                  // value={user.emergency[2]}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="ui divider"></div>
          <button className="p-2 m-5 w-32 bg-blue-500 hover:bg-blue-600 justify-center users-center rounded text-white font-bold">
            Confirm
          </button>
        </form>
      </div>

      <div
        className={`flex flex-col w-5/6 bg-white m-4 rounded border shadow sticky top-1/4 ${
          hideDetails ? 'hidden' : ''
        }`}
      >
        <h3 className="flex justify-center pt-4 font-bold text-2xl text-gray-700 h-12 items-center">
          More Details
        </h3>
        <div className="ui divider"></div>
        <div className="flex justify-around p-4">
          <div>
            <div className="w-40 h-40 rounder border">
              <img className=" flex" src="" alt="user_Image" />
            </div>
            <span>{user.role}</span>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col">
              <span className="font-bold text-gray-600 py-2 ">Name:</span>
              <span>{user.name}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-600 py-2">Age:</span>
              <span>{user.age}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-600 py-2">BloodGroup:</span>
              <span>{user.bloodGroup}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-600 py-2">Birth Date:</span>
              <span>{user.birthDate}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-600 py-2">Phone:</span>
              <span>{user.phone}</span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col">
              <span className="font-bold text-gray-600 py-2">Email:</span>
              <span>{user.email}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-600 py-2">Gender:</span>
              <span>{user.gender}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-600 py-2">
                Marital Status:
              </span>
              <span>{user.maritalStatus}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-600 py-2">Address:</span>
              <span>{user.address}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-600 py-2">other:</span>
              <span>...........</span>
            </div>
          </div>
        </div>
        <div className="ui divider"></div>
        <button
          className="p-2 m-2 bg-blue-500 hover:bg-blue-600 justify-center self-end items-center rounded text-white font-bold"
          onClick={() => setHideDetails(true)}
        >
          Ok
        </button>
      </div>
    </div>
  );
};

export default Lists;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from '../../../assets/patient.png';

import './style.css';
import Lists from '../../lists/lists';

const PatientList = () => {
  const [data, setData] = useState([]);
  const [detailData, setDetailData] = useState([]);
  const [activeInfo, setActiveInfo] = useState(false);
  const [activeHidden, setActiveHidden] = useState(true);
  const [itemToBeUpdated, setItemToBeUpdated] = useState([]);

  const handleClick = id => {
    setActiveInfo(true);
    setDetailData(data[id]);
    console.log(detailData);
  };

  const handleEditClick = id => {
    setItemToBeUpdated(data[id]);
    setActiveHidden(!activeHidden);
  };
  const listTitle = 'List of Patients';

  useEffect(() => {
    const fetchdata = async () => {
      const result = await axios.get(
        'http://localhost:5000/api/system/patient-list'
      );
      setData(result.data.patients);
    };
    fetchdata();
  }, []);

  console.log('this is from api', data);

  return (
    <div>
      <div className={`grid grid-cols-11 gap-1`}>
        <Lists
          title={listTitle}
          activeHidden={activeHidden}
          data={data}
          handleClick={handleClick}
          handleEditClick={handleEditClick}
        />
        <div
          className={`flex flex-col px-4 my-10 bg-white col-span-3 p-4 mr-4 border rounded shadow ${
            !activeInfo ? 'hidden' : ''
          }`}
        >
          <img
            className="image-reducer w-28 h-28 flex justify-self-center"
            src={logo}
            alt="logoImage"
          />
          <h3>Patient Information</h3>
          <div className="flex flex-col justify-start p-4">
            <h3 className="grid grid-cols-2">
              <span>Patient ID:</span>
              <span>{detailData.age}</span>
            </h3>
            <h3 className="grid grid-cols-2">
              <span>Patient Name:</span>
              <span>{detailData.firstName}</span>
            </h3>
            <h3 className="grid grid-cols-2">
              <span>Patient Name:</span>
              <span>{detailData.lastName}</span>
            </h3>
            <h3 className="grid grid-cols-2">
              <span>Patient Name:</span>
              <span>{detailData.MiddleName}</span>
            </h3>
            <h3 className="grid grid-cols-2">
              <span>Patient Email:</span>
              <span>{detailData.email}</span>
            </h3>
            <h3 className="grid grid-cols-2">
              <span>Patient Address: </span>
              <span>{detailData.maritalStatus}</span>
            </h3>
            <h3 className="grid grid-cols-2">
              <span>Patient Phone:</span>
              <span>{detailData.phone}</span>
            </h3>
            <h3 className="grid grid-cols-2">
              <span>Gender:</span>
              <span>{detailData.sex}</span>
            </h3>
            <h3 className="grid grid-cols-2">
              <span>Birth Date:</span>
              <span>{detailData.birthdate}</span>
            </h3>
            <h3 className="grid grid-cols-2">
              <span>Patient Age:</span>
              <span>{detailData.age}</span>
            </h3>
            <h3 className="grid grid-cols-2">
              <span>Blood Group:</span>
              <span>{detailData.bloodgroup}</span>
            </h3>
          </div>
        </div>
      </div>
      {/* start popup */}
      <div
        className={`fixed w-5/12 top-24 right-1/3 bg-white border-2 rounded ${
          activeHidden ? 'hidden' : ''
        }`}
      >
        <form action="" className="ui form w-full h-130 ">
          <div className="flex flex-col h-full">
            <h3 className="ui block header h-10 flex text-4xl justify-center items-center">
              Update Patient Information
            </h3>
            <div className="flex flex-col h-full overflow-y-scroll overflow-x-hidden">
              <div className="two fields p-2">
                <div className="field">
                  <label>First name</label>
                  <input
                    type="text"
                    placeholder="First Name"
                    value={itemToBeUpdated.name}
                  />
                </div>
                <div className="field">
                  <label>Middle name</label>
                  <input
                    type="text"
                    placeholder="Middle Name"
                    value={itemToBeUpdated.name}
                  />
                </div>
              </div>
              <div className="two fields p-2">
                <div className="field">
                  <label>Last name</label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={itemToBeUpdated.name}
                  />
                </div>
              </div>
              <div className="two fields p-2">
                <div className="field">
                  <label htmlFor="">Birth Date</label>
                  <input
                    type="date"
                    placeholder="BirthDate"
                    value={itemToBeUpdated.birthdate}
                  />
                </div>
                <div className="field">
                  <label htmlFor="">Age</label>
                  <input
                    type="number"
                    min={0}
                    placeholder="Age"
                    value={itemToBeUpdated.age}
                  />
                </div>
              </div>
              <div className="three fields p-2">
                <div className="field">
                  <label className="label">Gender</label>
                  <select className="ui dropdown">
                    <option value={itemToBeUpdated.gender}>Gender</option>
                    <option value="1">Male</option>
                    <option value="0">Female</option>
                  </select>
                </div>

                <div className="field">
                  <label className="label">Marital Status</label>
                  <select className="ui dropdown">
                    <option value="">Marital Status</option>
                    <option value="1">Single</option>
                    <option value="0">Married</option>
                    <option value="0">Widowed</option>
                    <option value="0">Divorced</option>
                  </select>
                </div>
              </div>
              <div className="two fields p-2">
                <div className="field">
                  <label htmlFor="" className="label">
                    E-mail:
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    value={itemToBeUpdated.email}
                  />
                </div>
                <div className="field">
                  <label htmlFor="" className="label">
                    Address:
                  </label>
                  <input
                    type="text"
                    placeholder="address"
                    value={itemToBeUpdated.address}
                  />
                </div>
              </div>
              <div className="two fields p-2">
                <div className="field">
                  <label htmlFor="" className="label">
                    Occupation:
                  </label>
                  <input type="text" placeholder="occupation" />
                </div>
                <div className="field">
                  <label htmlFor="" className="label">
                    Phone Number:
                  </label>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    value={itemToBeUpdated.phone}
                  />
                </div>
              </div>
              {/* <div className="ui divider"></div> */}
              <button className="p-2 m-5 w-32 bg-blue-500 hover:bg-blue-600 justify-center items-center rounded">
                UPDATE
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* end popup */}
    </div>
  );
};

export default PatientList;

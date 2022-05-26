import React, { useState } from 'react';
import Swal from 'sweetalert2';
// import { useNavigate } from 'react-router-dom';
import API from './../../../utils/API';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);
const Alert = (status, message) => {
  MySwal.fire({
    position: 'center',
    icon: status,
    title: message,
    showConfirmButton: false,
    timer: 1500,
  });
};
const PatientRegistration = () => {
  const current = new Date().toISOString().split('T')[0];
  // const navigate = useNavigate();
  const [patient, setPatient] = useState({
    name: '',
    bloodGroup: '',
    birthday: '',
    age: 0,
    gender: '',
    maritalStatus: '',
    phone: '',
    email: '',
    password: '123456',
    confirmPassword: '123456',
    // emergency: [],
    address: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setPatient({
      ...patient, //spread operator
      [name]: value,
    });
  };
  const registerPatient = async e => {
    e.preventDefault();
    try {
      const result = await API.post('api/system/patients', patient).then(
        res => {
          console.log(res);
          return res;
        }
      );
      if (result.status === 201) {
        Alert(result.data.status, result.data.message);
      } else {
        Alert(result.status, result.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="add-patient flex flex-col my-10 m-16 bg-white border-gray-700 rounded-md shadow">
      <h3 className="add-patient-header bg-blue-400 h-12 rounded-tr-md flex p-4 items-center rounded-tl-md">
        Add New Patient
      </h3>
      <form
        action=""
        className="ui form flex flex-col p-4"
        onSubmit={registerPatient}
      >
        <div className="field flex items-center justify-end border-b-2">
          <label className="p-1" htmlFor="">
            Today's Date:
          </label>
          <label className="p-1">{current}</label>
        </div>
        <div className="flex-flex-col border-2 rounded my-2">
          <h3 className="ui block header h-10 flex text-4xl justify-center items-center">
            Patient Information
          </h3>
          <div className="three fields p-2">
            <div className="field">
              <label>Patient Full Name</label>
              <input
                type="text"
                placeholder="First Name"
                name="name"
                value={patient.name}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label htmlFor="">Birth Date</label>
              <input
                type="date"
                placeholder="birthdate"
                max={current}
                name="birthday"
                value={patient.birthday}
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
                value={patient.age}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="three fields p-2">
            <div className="field">
              <label className="label">Blood Group</label>
              <select
                className="ui dropdown"
                name="bloodGroup"
                value={patient.bloodGroup}
                onChange={handleChange}
              >
                <option></option>
                <option>A</option>
                <option>B</option>
                <option>AB</option>
                <option>O</option>
              </select>
            </div>
            <div className="field">
              <label className="label">Gender</label>
              <select
                className="ui dropdown"
                name="gender"
                value={patient.gender}
                onChange={handleChange}
                required
              >
                <option></option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            <div className="field">
              <label className="label">Marital Status</label>
              <select
                className="ui dropdown"
                name="maritalStatus"
                value={patient.maritalStatus}
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
                value={patient.email}
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
                value={patient.address}
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
                value={patient.phone}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="flex-flex-col border-2 rounded my-2">
          <h3 className="ui block header h-10 flex text-4xl justify-center items-center">
            In Case of Emergency
          </h3>
          <div className="three fields p-2">
            <div className="field">
              <label htmlFor="" className="label">
                Name of friend or relative
              </label>
              <input
                type="text"
                placeholder="optional"
                name="emergency"
                // value={patient.emergency[0]}
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
                // value={patient.emergency[1]}
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
                // value={patient.emergency[2]}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="ui divider"></div>
        <div className="inline fields flex items-center justify-start">
          <label>Have an Insurance?</label>
          <div className="field">
            <div className="ui radio flex items-center justify-center">
              <input type="radio" className="h-4" name="childWoodIllness" />
              <label className="px-1">Yes</label>
            </div>
          </div>
          <div className="field">
            <div className="ui radio flex items-center justify-center">
              <input type="radio" className="h-4" name="childWoodIllness" />
              <label className="px-1">No</label>
            </div>
          </div>
        </div>
        {/* <div className="flex-flex-col border-2 rounded my-2">
          <h3 className="ui block header h-10 flex text-4xl justify-center items-center">
            Insurance Information
          </h3>
          <div className="three fields p-2">
            <div className="field">
              <label htmlFor="">Company Name:</label>
              <input type="text" placeholder="Company Name" />
            </div>
            <div className="field">
              <label htmlFor="">Card Number:</label>
              <input type="text" placeholder="#Card Number" />
            </div>
            <div className="field">
              <label htmlFor="">Policy Number:</label>
              <input type="text" placeholder="#Policy Number" />
            </div>
          </div>
          <div className="three fields p-2">
            <div className="field">
              <label htmlFor="">Expire Date:</label>
              <input type="Date" placeholder="Expire Date" min={current} />
            </div>
            <div className="field">
              <label htmlFor="">Income</label>
              <input type="number" placeholder="Income" />
            </div>
          </div>
        </div> */}
        <div className="ui divider border"></div>
        <button className="p-2 m-5 w-32 bg-blue-500 hover:bg-blue-600 justify-center items-center rounded text-white font-bold">
          SUBMIT
        </button>
      </form>
    </div>
  );
};
export default PatientRegistration;

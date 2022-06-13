import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';

import withReactContent from 'sweetalert2-react-content';
import { API1 } from '../../utils/API';
import { connect } from 'react-redux';
import { selectHospitalData } from '../../redux/user/userSelector';
import { createStructuredSelector } from 'reselect';

const MySwal = withReactContent(Swal);
const Alert = () => {
  MySwal.fire({
    position: 'center',
    icon: 'success',
    title: 'Registered Successfully',
    showConfirmButton: false,
    timer: 1500,
  });
};
const AddStaff = ({ hospitalData }) => {
  const params = useParams();
  const role = params.role;
  const current = new Date().toISOString().split('T')[0];
  const [staff, setStaff] = useState({
    name: '',
    role: role,
    birthday: '',
    age: 0,
    gender: '',
    maritalStatus: '',
    phone: '',
    email: '',
    password: '123456',
    confirmPassword: '123456',
    hospitalEmail: hospitalData.email,
    address: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setStaff({
      ...staff, //spread operator
      [name]: value,
    });
  };
  const registerstaff = async e => {
    e.preventDefault();
    try {
      console.log('before', staff);
      const result = await API1.post('api/system/staffs', staff).then(res => {
        console.log(res);
        return res;
      });
      if (result.status === 201) {
        Alert();
      } else {
        Alert();
      }
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  return (
    <div className="flex flex-col my-10 m-16 bg-white border-gray-700 rounded-md shadow w-5/6">
      <h3 className="bg-blue-400 h-12 rounded-tr-md flex p-4 items-center rounded-tl-md">
        ADD NEW {params.role.toUpperCase()}
      </h3>
      <form
        action=""
        className="ui form flex flex-col p-4"
        onSubmit={registerstaff}
      >
        <div className="field flex items-center justify-end border-b-2">
          <label className="p-1" htmlFor="">
            Today's Date:
          </label>
          <label className="p-1">{current}</label>
        </div>
        <div className="flex-flex-col my-2">
          {/* <h3 className="ui block header h-10 flex text-4xl justify-center items-center">
            {params.role.toUpperCase()} INFORMATION
          </h3> */}
          <div className="two fields p-2">
            <div className="field">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="First Name"
                name="name"
                value={staff.name}
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
                value={staff.birthday}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="two fields p-2">
            <div className="field">
              <label className="label">Blood Group</label>
              <select
                className="ui dropdown"
                name="bloodGroup"
                value={staff.bloodGroup}
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
                value={staff.gender}
                onChange={handleChange}
                required
              >
                <option></option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
          </div>
          {/* //////////////////////// */}

          <div className="two fields p-2">
            <div className="field">
              <label className="label">Marital Status</label>
              <select
                className="ui dropdown"
                name="maritalStatus"
                value={staff.maritalStatus}
                onChange={handleChange}
              >
                <option value="">Marital Status</option>
                <option>Single</option>
                <option>Married</option>
                <option>Widowed</option>
                <option>Divorced</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="">Age</label>
              <input
                type="number"
                min={0}
                name="age"
                placeholder="age"
                value={staff.age}
                onChange={handleChange}
              />
            </div>
          </div>
          {/* /////////////////// */}
          <div className="two fields p-2">
            <div className="field">
              <label htmlFor="" className="label">
                E-mail:
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={staff.email}
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
                value={staff.phone}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="two fields p-2">
            <div className="field">
              <label htmlFor="" className="label">
                Address:
              </label>
              <input
                type="text"
                placeholder="Address"
                name="address"
                value={staff.address}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="ui divider border"></div>
        <button className="p-2 m-5 w-32 bg-blue-500 hover:bg-blue-600 justify-center items-center rounded text-white font-bold">
          SUBMIT
        </button>
      </form>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  hospitalData: selectHospitalData,
});
export default connect(mapStateToProps)(AddStaff);

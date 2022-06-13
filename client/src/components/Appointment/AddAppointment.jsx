import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { API1 } from './../../utils/API';
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

function AddAppointment() {
  const [appointment, setAppointment] = useState({
    patient: '',
    doctor: '',
    date: '',
    availableSlot: '',
    remarks: '',
    status: '',
    options: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setAppointment({
      ...appointment, //spread operator
      [name]: value,
    });
  };
  const addAppointment = async e => {
    e.preventDefault();
    try {
      const result = await API1.post('api/system/appointment', appointment).then(
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
    <div className="m-8 p-4 bg-white border rounded shadow w-4/6">
      <h3>Add Appointment</h3>
      <div className="ui divider"></div>
      <form
        action=""
        className="ui form flex flex-col p-4"
        onSubmit={addAppointment}
      >
        <div className="two fields p-2">
          <div className="field">
            <label htmlFor="" className="label">
              Patient:
            </label>
            <input
              type="text"
              placeholder="Patient"
              name="patient"
              value={appointment.patient}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label htmlFor="" className="label">
              Doctor:
            </label>
            <input
              type="text"
              placeholder="Doctor"
              name="doctor"
              value={appointment.doctor}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="two fields p-2">
          <div className="field">
            <label>Date:</label>
            <input
              type="date"
              placeholder="Date"
              name="date"
              value={appointment.date}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label>Available time slots:</label>
            <input
              type="text"
              placeholder="Available time slots"
              name="availableSlot"
              value={appointment.availableSlot}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="two fields p-2">
          <div className="field">
            <label>Remarks:</label>
            <input
              type="text"
              placeholder="Remarks"
              name="remarks"
              value={appointment.remarks}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label>Status</label>
            <input
              type="text"
              placeholder="Status"
              name="status"
              value={appointment.status}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="two fields p-2">
          <div className="field">
            <label>Options</label>
            <input
              type="text"
              placeholder="options"
              name="options"
              value={appointment.options}
              onChange={handleChange}
            />
          </div>
        </div>
        <button className="self-end py-2 px-4 border rounded bg-sky-500 text-white font-bold">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddAppointment;

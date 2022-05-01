import React from "react";

const AddPatient = () => {
  return (
    // <div className="flex items-center justify-center border rounded shadow bg-white">
    <form action="" className="ui form w-120 bg-slate-100">
      <div className="flex-flex-col border-2 rounded my-2">
        <h3 class="ui block header h-10 flex text-4xl justify-center items-center">
          Update Patient Information
        </h3>
        <div class="three fields p-2">
          <div class="field">
            <label>First name</label>
            <input type="text" placeholder="First Name" />
          </div>
          <div class="field">
            <label>Middle name</label>
            <input type="text" placeholder="Middle Name" />
          </div>
          <div class="field">
            <label>Last name</label>
            <input type="text" placeholder="Last Name" />
          </div>
        </div>
        <div className="two fields p-2">
          <div className="field">
            <label htmlFor="">Birth Date</label>
            <input type="date" placeholder="birthdate" max={10} />
          </div>
          <div className="field">
            <label htmlFor="">Age</label>
            <input type="number" min={0} placeholder="age" />
          </div>
        </div>
        <div className="two fields p-2">
          <div className="field">
            <label className="label">Gender</label>
            <select class="ui dropdown">
              <option value="">Gender</option>
              <option value="1">Male</option>
              <option value="0">Female</option>
            </select>
          </div>

          <div className="field">
            <label className="label">Marital Status</label>
            <select class="ui dropdown">
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
            <input type="email" placeholder="Email" />
          </div>
          <div className="field">
            <label htmlFor="" className="label">
              Address:
            </label>
            <input type="email" placeholder="Address" />
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
            <input type="text" placeholder="Phone Number" />
          </div>
        </div>
        {/* <div className="ui divider"></div> */}
        <button className="p-2 m-5 w-32 bg-blue-500 hover:bg-blue-600 justify-center items-center rounded">
          UPDATE
        </button>
      </div>
    </form>
    // </div>
  );
};

export default AddPatient;

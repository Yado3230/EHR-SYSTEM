import React from "react";

const PatientRegistration = () => {
  const current = new Date().toISOString().split("T")[0];

  return (
    <div className="add-patient flex flex-col my-10 m-16 bg-white border-gray-700 rounded-md shadow">
      <h3 className="add-patient-header bg-blue-400 h-12 rounded-tr-md flex p-4 items-center rounded-tl-md">
        Add New Patient
      </h3>
      <form action="" className="ui form flex flex-col p-4">
        <div className="field flex items-center justify-end border-b-2">
          <label className="p-1" htmlFor="">
            Today's Date:
          </label>
          <label className="p-1">{current}</label>
        </div>
        <div className="flex-flex-col border-2 rounded my-2">
          <h3 class="ui block header h-10 flex text-4xl justify-center items-center">
            Patient Information
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
          <div className="four fields p-2">
            <div className="field">
              <label htmlFor="">Birth Date</label>
              <input type="date" placeholder="birthdate" max={current} />
            </div>
            <div className="field">
              <label htmlFor="">Age</label>
              <input type="number" min={0} placeholder="age" />
            </div>

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
          <div className="four fields p-2">
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
        </div>

        <div className="flex-flex-col border-2 rounded my-2">
          <h3 class="ui block header h-10 flex text-4xl justify-center items-center">
            In Case of Emergency
          </h3>
          <div className="three fields">
            <div className="field">
              <label htmlFor="" className="label">
                Name of friend or relative
              </label>
              <input type="text" placeholder="optional" />
            </div>
            <div className="field">
              <label htmlFor="" className="label">
                Relationship with family
              </label>
              <input type="text" placeholder="optional" />
            </div>
            <div className="field">
              <label htmlFor="" className="label">
                Emergency Phone Number
              </label>
              <input type="text" placeholder="optional" />
            </div>
          </div>
        </div>
        <div className="flex-flex-col border-2 rounded my-2">
          <h3 class="ui block header h-10 flex text-4xl justify-center items-center">
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
        </div>
        <div className="ui divider border"></div>
        <button className="p-2 m-5 w-32 bg-blue-500 hover:bg-blue-600 justify-center items-center rounded">
          SUBMIT
        </button>
      </form>
    </div>
  );
};
export default PatientRegistration;

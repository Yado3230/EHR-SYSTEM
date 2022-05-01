import React from 'react';
import Example from './printPrescription';

class Prescription extends React.Component {
  constructor() {
    super();
    this.state = {
      currentDate: new Date().toISOString().split('T')[0],
    };
  }
  render() {
    return (
      <div className="flex">
        <div className="mx-6 my-4 w-1/2 bg-white border rounded-md shadow">
          <h3 className="bg-blue-300 h-12 rounded-tr-md flex p-4 items-center rounded-tl-md">
            Prescription
          </h3>
          <form action="" className="ui form p-4">
            <div className="three fields">
              <div className="field">
                <label htmlFor="">Date</label>
                <input type="date" value={this.state.currentDate} />
              </div>
              <div className="field">
                <label htmlFor="">Patient Name</label>
                <input type="search" />
              </div>
              <div className="field">
                <label htmlFor="">Age</label>
                <input type="number" />
              </div>
            </div>
            <div className="four fields">
              <div className="field">
                <label htmlFor="">Medicine</label>
                <input type="text" />
              </div>
              <div className="field">
                <label htmlFor="">Strength</label>
                <input type="text" />
              </div>
              <div className="field">
                <label htmlFor="">Dose</label>
                <input type="text" />
              </div>
              <div className="field">
                <label htmlFor="">Duration</label>
                <input type="text" />
              </div>
            </div>
            <div className="two fields">
              <div className="field">
                <label htmlFor="">History</label>
                <textarea className="border" />
              </div>
              <div className="field">
                <label htmlFor="">Notes</label>
                <textarea className="border" />
              </div>
            </div>
            <div className="field">
              <label htmlFor="">Doctor</label>
              <input type="text" />
            </div>
            <div className="ui divider"></div>
            <button className="p-2 m-5 w-32 bg-blue-400 hover:bg-blue-600 justify-center items-center rounded text-white">
              SUBMIT
            </button>
          </form>
        </div>
        <div className="">
          <Example />
        </div>
      </div>
    );
  }
}

export default Prescription;

import React from 'react';

export class ComponentToPrint extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      current: new Date().toISOString().split('T')[0],
    };
  }
  render() {
    return (
      <div className="flex flex-col m-4 p-4 h-full">
        <div className="self-center">
          <div className="text-2xl font-bold ">XYZ Hospital</div>
          <div>Address: Adama</div>
        </div>
        <div className="ui divider"></div>
        <div className="flex flex-col h-4/6">
          <div className="flex justify-end py-2">
            <span>Date:-</span>
            <span className="px-1">{this.state.current}</span>
          </div>
          <div className="flex flex-col py-2">
            <div>
              <span>Patient Name:-</span>
              <span className="px-1">Yared Mesele</span>
            </div>
            <div>
              <span>Age:-</span>
              <span className="px-1">24</span>
            </div>
          </div>
          <div className="flex justify-center py-6 h-2/6">
            <table className="border-collapse border border-slate-500">
              <thead>
                <tr>
                  <th className="border border-slate-600 w-40">Medicine</th>
                  <th className="border border-slate-600 w-40">Strength</th>
                  <th className="border border-slate-600 w-40">Dose</th>
                  <th className="border border-slate-600 w-40">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-700">relief</td>
                  <td className="border border-slate-700"></td>
                  <td className="border border-slate-700"></td>
                  <td className="border border-slate-700"></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="h-2/12 py-4">
            <span>History</span>
          </div>
          <div className="h-1/12 py-4">
            <span>Notes</span>
          </div>
        </div>
        <div className="flex">
          <span>Doctor</span>
          <span className="px-1">Mr. Doctor</span>
        </div>
        <div className="flex self-end pt-4">
          <span>Signature</span>
          <span className="px-1">_________________________________</span>
        </div>
      </div>
    );
  }
}

import React from 'react';
import { Link } from 'react-router-dom';
import ReactToPrint from 'react-to-print';
import { ComponentToPrint } from './ComponentToPrint';

// const printPrescription = () => {
//   return <div>printPrescription</div>;
// };

class Example extends React.PureComponent {
  render() {
    return (
      <div className="flex flex-col bg-white rounded m-4 p-8 w-130 border shadow ">
        <ComponentToPrint const ref={el => (this.componentRef = el)} />
        <div className="bg-blue-300 p-1 flex flex-end w-16 items-center justify-center rounded self-end">
          <ReactToPrint
            trigger={() => {
              return <Link to="">Print</Link>;
            }}
            content={() => this.componentRef}
          />
        </div>
      </div>
    );
  }
}

export default Example;

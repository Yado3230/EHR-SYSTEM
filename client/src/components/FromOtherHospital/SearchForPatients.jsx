import React, { useEffect, useState } from 'react';
import { API2 } from '../../utils/API';
import OtherHospital from './OtherHospital';

const SearchForPatients = () => {
  const [data, setData] = useState([]);
  const [hospital, setHospital] = useState({
    name: '',
  });
  const [patient, setPatient] = useState({
    name: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setHospital({
      [name]: value,
    });
  };
  const handlePatientChange = e => {
    const { name, value } = e.target;
    setPatient({
      [name]: value,
    });
  };
  useEffect(() => {
    const fetchdata = async () => {
      const result = await API2.get('api/records/recorddata');
      setData(result.data.data.recorddata);
    };
    fetchdata();
  }, []);
  return (
    <div className="border rounded shadow p-4 m-6 flex flex-col">
      <div className="bg-white border rounded shadow">
        <div className="field flex items-center justify-center">
          <label className="label p-2 m-2">Select Hospital</label>
          <select
            className="ui dropdown"
            name="name"
            value={hospital.name}
            onChange={handleChange}
          >
            <option value=""></option>
            {data.map(data => {
              return <option key={data._id}>{data.hospital.name}</option>;
            })}
          </select>
        </div>
        <div className="m-4 ui category search">
          <div className="ui icon input">
            <input
              className="prompt"
              type="text"
              placeholder="Search patients..."
              name="name"
              value={patient.name}
              onChange={handlePatientChange}
            />
            <i className="search icon"></i>
          </div>
          <div className="results"></div>
        </div>
      </div>
      <div className="bg-white rounded shadow my-4">
        <OtherHospital
          patient={patient.name}
          data={data}
          hospital={hospital.name}
        />
      </div>
    </div>
  );
};

export default SearchForPatients;

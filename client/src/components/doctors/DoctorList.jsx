import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Lists from '../lists/lists';

const DoctorList = () => {
  const [data, setData] = useState([]);
  const [detailData, setDetailData] = useState([]);
  const [activeHidden, setActiveHidden] = useState(true);

  const handleClick = id => {
    setDetailData(data[id]);
    console.log(detailData);
  };

  const handleEditClick = id => {
    setActiveHidden(!activeHidden);
  };
  const listTitle = 'List of Doctors';

  useEffect(() => {
    const fetchdata = async () => {
      const result = await axios.get(
        'http://localhost:5000/api/system/doctor-list'
      );
      setData(result.data.patients);
    };
    fetchdata();
  }, []);

  console.log('this is from api', data);

  return (
    <div>
      <Lists
        title={listTitle}
        activeHidden={activeHidden}
        data={data}
        handleClick={handleClick}
        handleEditClick={handleEditClick}
      />
    </div>
  );
};
export default DoctorList;

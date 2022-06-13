import React, { useState, useEffect } from 'react';
import Lists from '../lists/lists';
import { API1 } from '../../utils/API';

const DoctorList = () => {
  const [data, setData] = useState([]);
  const [detailData, setDetailData] = useState([]);
  const [activeHidden, setActiveHidden] = useState(true);
  const role = 'doctor';

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
      const result = await API1.get(`api/system/staffs?role=${role}`);
      setData(result.data.data.staffs);
    };
    fetchdata();
  }, [role]);

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

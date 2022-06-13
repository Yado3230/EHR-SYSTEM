import React, { useState, useEffect } from 'react';
import './style.css';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Lists from '../../lists/lists';
import { useNavigate } from 'react-router-dom';
import { API1 } from '../../../utils/API';

const PatientList = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [changed, setChanged] = useState(false);
  // const [detailData, setDetailData] = useState([]);
  const [activeHidden, setActiveHidden] = useState(true);

  const MySwal = withReactContent(Swal);

  const handleDeleteClick = id => {
    MySwal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        try {
          API1.delete(`api/system/patients/deletepatient/${id}`).then(res => {
            console.log(res);
            return res;
          });
          setChanged(true);
        } catch (error) {
          console.log(error);
        }
        MySwal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  };
  const handleAddClick = () => {
    navigate('add_patient');
  };
  const listTitle = 'List of Patients';

  useEffect(() => {
    const fetchdata = async () => {
      const result = await API1.get('api/system/patients');
      setData(result.data.patients);
    };
    fetchdata();
  }, [changed]);

  return (
    <div>
      <div className={`px-2`}>
        <Lists
          title={listTitle}
          activeHidden={activeHidden}
          setActiveHidden={setActiveHidden}
          data={data}
          handleAddClick={handleAddClick}
          handleDeleteClick={handleDeleteClick}
        />
      </div>
    </div>
  );
};

export default PatientList;

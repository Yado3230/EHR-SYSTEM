import React, { useState, useEffect } from 'react';
import './style.css';
import Lists from '../lists/lists';
import { API1 } from '../../utils/API';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useNavigate, useParams } from 'react-router-dom';

const PatientList = () => {
  const [data, setData] = useState([]);
  const [detailData, setDetailData] = useState([]);
  const [activeHidden, setActiveHidden] = useState(true);
  const [changed, setChanged] = useState(false);
  const params = useParams();
  const role = params.role;
  const navigate = useNavigate();

  const handleClick = id => {
    setDetailData(data[id]);
    console.log(detailData);
  };
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
          API1.delete(`api/system/staffs/deletestaff/${id}`).then(res => {
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
    navigate(`/admin/humanresouces/addnew/${role}`);
  };
  const handleEditClick = id => {
    setActiveHidden(!activeHidden);
  };
  const listTitle = role.toUpperCase();

  useEffect(() => {
    const fetchdata = async () => {
      const result = await API1.get(`api/system/staffs?role=${role}`);
      setData(result.data.data.staffs);
    };
    fetchdata();
  }, [role, changed]);

  return (
    <div>
      <div className={`px-2`}>
        <Lists
          title={listTitle}
          activeHidden={activeHidden}
          data={data}
          handleAddClick={handleAddClick}
          handleClick={handleClick}
          handleEditClick={handleEditClick}
          handleDeleteClick={handleDeleteClick}
        />
      </div>
    </div>
  );
};

export default PatientList;

import React, { useEffect } from 'react';
import { API1 } from './../../utils/API';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { setHospitalData, toggleRole } from '../../redux/user/userAction';
import {
  selectHospitalData,
  selectHospitalID,
} from '../../redux/user/userSelector';
import { createStructuredSelector } from 'reselect';
// import './header.scss';

const Header = ({ setRole, hospitalID, hospitalData, setHospitalData }) => {
  const navigate = useNavigate();
  ////////////////
  useEffect(() => {
    const fetchdata = async () => {
      const result = await API1.get(`api/system/hospitals/${hospitalID}`);
      setHospitalData(result.data.data.hospital);
      console.log('this is from header', result.data.data.hospital);
    };
    fetchdata();
  }, [hospitalID, setHospitalData]);
  console.log(hospitalData);
  /////////////
  const logoutUser = async () => {
    try {
      const res = await API1.get('api/auth/logout');
      if ((res.data.status = 'success')) {
        navigate('/');
        // eslint-disable-next-line no-restricted-globals
        location.reload(true);
        setRole(null);
        setHospitalData(null);
      }
      console.log(res);
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <div className="sticky shadow flex h-20 w-full px-12 items-center justify-between bg-white text-black">
      <div>{hospitalData ? hospitalData.name.toUpperCase() : null}</div>
      <div
        className="cursor-pointer border rounded shadow px-2 py-1"
        onClick={e => logoutUser()}
      >
        Logout
      </div>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  setRole: item => dispatch(toggleRole(item)),
  setHospitalData: item => dispatch(setHospitalData(item)),
});
const mapStateToProps = createStructuredSelector({
  hospitalID: selectHospitalID,
  hospitalData: selectHospitalData,
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);

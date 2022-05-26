import React from 'react';
import API from './../../utils/API';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleRole } from '../../redux/user/userAction';
// import './header.scss';

const Header = ({ setRole }) => {
  const navigate = useNavigate();
  const logoutUser = async () => {
    try {
      const res = await API.get('api/auth/logout');
      if ((res.data.status = 'success')) {
        navigate('/');
        // eslint-disable-next-line no-restricted-globals
        location.reload(true);
      }
      console.log(res);
      setRole(null);
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <div className="sticky shadow flex h-20 w-full px-12 items-center justify-between bg-white text-black">
      <div>XYZ Hospital</div>
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
});
export default connect(null, mapDispatchToProps)(Header);

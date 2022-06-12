import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SideBarItems from './SideBarItems';
import logo from '../../assets/Doctor_Male.png';

import './sidebar.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectRole } from '../../redux/user/userSelector';

const SideBar = ({
  data,
  active,
  toggleActive,
  content,
  toggleHidden,
  role,
}) => {
  const current = new Date().toISOString().split('T')[0];
  return (
    <div className="forall w-full h-full">
      <div className="relative flex justify-center bg-gray-100">
        <div className="logo flex justify-around w-full items-center">
          <div className="flex flex-col items-start">
            <div className="flex justify-between">
              <img
                className="image-reducer w-28 h-28"
                src={logo}
                alt="logoImage"
              />
              {!active ? (
                <div className="flex flex-col px-2 text-gray-400">
                  <span>{role.name.toUpperCase()}</span>
                  <span>{role.email}</span>
                  <span>{current}</span>
                </div>
              ) : null}
            </div>
            {!active ? (
              <span className="py-2 text-md text-gray-500">
                EHR Management System
              </span>
            ) : null}
          </div>
        </div>
        <div className="try -right-11 py-4 absolute cursor-pointer">
          <MenuIcon onClick={() => toggleActive()} />
        </div>
      </div>
      <div className="ui divider border-4"></div>
      <div className="forscroll overflow-y-hidden h-full w-full">
        <div>
          <SideBarItems
            items={data}
            active={active}
            content={content}
            toggleHidden={toggleHidden}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  role: selectRole,
});

export default connect(mapStateToProps)(SideBar);

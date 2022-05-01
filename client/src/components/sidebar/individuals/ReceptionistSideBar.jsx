import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  toggleActiveMenu,
  toggleHiddenItem,
} from '../../../redux/receptionist/receptionistAction';
import {
  selectActive,
  selectHiddenToggle,
  selectReceptionistData,
} from '../../../redux/receptionist/receptionistSelector';
import SideBar from '../SideBar';

import './styles.scss';

const ReceptionistSideBar = ({
  data,
  active,
  toggleActive,
  content,
  toggleHidden,
}) => {
  return (
    <div
      className={`side-menu w-86 sticky bg-white h-screen p-2 shadow z-[100] ${
        active ? 'active' : ''
      }`}
    >
      <SideBar
        data={data}
        active={active}
        toggleActive={toggleActive}
        content={content}
        toggleHidden={toggleHidden}
      />
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  data: selectReceptionistData,
  active: selectActive,
  content: selectHiddenToggle,
});

const mapDispatchToProps = dispatch => ({
  toggleActive: active => dispatch(toggleActiveMenu(active)),
  toggleHidden: hidden => dispatch(toggleHiddenItem(hidden)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReceptionistSideBar);

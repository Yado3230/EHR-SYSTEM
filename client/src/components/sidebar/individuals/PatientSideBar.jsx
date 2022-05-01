import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleActiveMenu, toggleHiddenItem } from "../../../redux/patient/patientAction";
import { selectActive, selectHiddenToggle, selectReceptionistData } from "../../../redux/patient/patientSelector";
import SideBar from "../SideBar";

import "./styles.scss";

const PatientSideBar = ({
  data,
  active,
  toggleActive,
  content,
  toggleHidden,
}) => {
  return (
    <div
      className={`side-menu w-86 sticky left-0 bg-white h-screen p-2 z-[100] shadow ${
        active ? "active" : ""
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

const mapDispatchToProps = (dispatch) => ({
  toggleActive: (active) => dispatch(toggleActiveMenu(active)),
  toggleHidden: (hidden) => dispatch(toggleHiddenItem(hidden)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PatientSideBar);

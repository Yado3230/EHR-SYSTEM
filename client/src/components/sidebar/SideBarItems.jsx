import React from "react";
import { Link } from "react-router-dom";
import SideBarItemContent from "./SideBarItemContent";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const SideBarItems = ({ items, active, content, toggleHidden }) => {
  return (
    <div className="menu-content py-px flex flex-col justify-center ">
      {items.map((item) => (
        <div
          key={item.id}
          className="menu-item flex flex-col py-px relative justify-center"
        >
          <Link
            onClick={() => toggleHidden(item)}
            className="menu-item-component py-px hover:bg-gray-200 border border-gray-200 rounded-sm"
            to={item.path}
          >
            <i className="p-1 text-gray-600">{item.icon}</i>
            <span
              className={`text-gray-600 absolute ${active ? "hidden" : ""} p-1`}
            >
              {item.title}
            </span>
            {item.subContent ? (
              <i className={`pl-64 text-gray-700 ${active ? "hidden" : ""}`}>
                <ArrowDropDownIcon />
              </i>
            ) : null}
          </Link>
          <div>
            {item.subContent
              ? content.map((content) => {
                  return item.id === content.id ? (
                    <SideBarItemContent
                      key={content.id}
                      active={active}
                      selectedContent={content.subContent}
                    />
                  ) : null;
                })
              : null}
          </div>
        </div>
      ))}
    </div>
  );
};
export default SideBarItems;

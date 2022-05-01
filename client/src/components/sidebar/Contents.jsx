import React from "react";
import { Link } from "react-router-dom";

import "./sidebar.scss";

const Contents = ({ content }) => {
  return (
    <div className="styling">
      <Link
        className={`flex w-72 items-center text-gray-500 hover:bg-gray-200 hover:text-black `}
        to={content.path}
        key={content.title}
      >
        <i className="p-1">{content.icon}</i>
        <span className="mx-1">{content.title}</span>
      </Link>
    </div>
  );
};

export default Contents;

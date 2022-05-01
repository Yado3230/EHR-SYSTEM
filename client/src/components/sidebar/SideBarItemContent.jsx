import React from "react";
import Contents from "./Contents";

const SideBarItemContent = ({ selectedContent, active }) => {
  return (
    <div
      className={`flex py-1 flex-col flex-wrap items-start px-2 mx-4 border-l-2 border-gray-400 ${
        active ? "hidden" : ""
      }`}
    >
      {selectedContent.map((content) => {
        return <Contents key={content.title} content={content} />;
      })}
    </div>
  );
};

export default SideBarItemContent;

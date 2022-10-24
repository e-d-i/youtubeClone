import React from "react";
import "../SidebarOption.css";

function SidebarOption({ selected, Icon, title }) {
  return (
    <div className={`sidebarOption ${selected && "selected"}`}>
      <Icon className={"sidebarOptionIcon"} />
      <h2 className="sidebarOptionTitle">{title}</h2>
    </div>
  );
}

export default SidebarOption;

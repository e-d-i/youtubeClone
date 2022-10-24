import React from "react";
import "../Backdrop.css";

function Backdrop({ sidebar, closeSidebar }) {
  return (
    <div
      className={
        sidebar && window.innerWidth <= 820
          ? "backdrop backdropOpen"
          : "backdrop"
      }
      onClick={closeSidebar}
    ></div>
  );
}

export default Backdrop;

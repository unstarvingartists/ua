import React from "react";
import logo from "../images/logo.svg";

const Component = () => {
  return (
    <nav
      className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
      aria-label="Global"
    >
      <div className="flex items-center flex-1">
        <div className="flex items-center justify-between w-full md:w-auto">
          <img
            className="h-8 w-auto sm:h-10 inline"
            src={logo}
            alt="Unstarving Artists Logo"
          />
          <span className="ml-4 font-semibold bg-white text-gray-700">
            Unstarving Artists
          </span>
        </div>
      </div>
    </nav>
  );
};
export default Component;

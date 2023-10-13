import React from "react";

const DefaultDropDownButton = ({ setClass, options, title, val }) => {
  return (
    <div className="dropdown">
      <label tabIndex={0} className="btn m-1">
        {`${title}: ${val}`}
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <a onClick={() => setClass(options[0])}>{options[0]}</a>
        </li>
        <li>
          <a onClick={() => setClass(options[1])}>{options[1]}</a>
        </li>
        <li>
          <a onClick={() => setClass(options[2])}>{options[2]}</a>
        </li>
        <li>
          <a onClick={() => setClass(options[3])}>{options[3]}</a>
        </li>
      </ul>
    </div>
  );
};

export default DefaultDropDownButton;

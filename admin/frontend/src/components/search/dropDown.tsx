import { useState } from "react";
import DropdownItem from "./dropdownItem";

export default function DropDown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="float-none">
      <button
        id="dropdownToggleButton"
        data-dropdown-toggle="dropdownToggle"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        type="button"
        onClick={toggleDropdown}
      >
        옵션
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <div
        id="dropdownToggle"
        className={`z-10 ${
          isOpen ? "" : "hidden"
        } bg-white divide-y divide-gray-100 rounded-lg shadow w-72`}
      >
        <ul
          className="p-3 space-y-1 text-sm text-gray-700"
          aria-labelledby="dropdownToggleButton"
        >
          <DropdownItem label="휴면 계좌" />
          <DropdownItem label="과세" />
          <DropdownItem label="더미 계좌" />
        </ul>
      </div>
    </div>
  );
}

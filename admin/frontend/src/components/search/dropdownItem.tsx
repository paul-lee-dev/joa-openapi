import React from "react";

interface DropdownItemProps {
  label: string;
}

const DropdownItem: React.FC<DropdownItemProps> = ({ label }) => {
  return (
    <li>
      <div className="flex p-2 rounded hover:bg-gray-100">
        <label className="inline-flex items-center w-full cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:translate-x-[-100%] peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-900">
            {label}
          </span>
        </label>
      </div>
    </li>
  );
};

export default DropdownItem;

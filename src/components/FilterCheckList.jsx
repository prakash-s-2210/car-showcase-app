import React, { useState } from "react";

const FilterCheckList = ({ data, handleFilter, filteredData }) => {
  const [showCheckBox, setShowCheckBox] = useState(
    filteredData.includes(data) ? true : false
  );
  return (
    <label className="group block  relative pl-14 max-sm:pl-10 pr-4 py-2 max-sm:py-1 hover:bg-backgroundColor border-b    cursor-pointer text-lg select-none max-sm:text-sm">
      {data}
      <input
        type="checkbox"
        checked={showCheckBox}
        className="peer absolute opacity-0 cursor-pointer h-0 w-0 "
        onChange={(e) => {
          setShowCheckBox(!showCheckBox);
          handleFilter(data);
        }}
      />
      <span className="group-hover:border-blue-800 border rounded absolute top-2.5 left-3  h-6 w-6 max-sm:w-4 max-sm:h-4 max-sm:top-1.5  bg-backgroundColor  peer-checked:bg-blue-800 after:content-[''] after:absolute after:hidden peer-checked:after:block after:w-1.5 after:h-3.5 max-sm:after:w-1 max-sm:after:h-2.5  after:left-2 max-sm:after:left-1.5 after:top-0.5  max-sm:after:top-0.5 after:border-s-white after:border-r-2 after:border-b-2 after:rotate-45"></span>
    </label>
  );
};

export default FilterCheckList;

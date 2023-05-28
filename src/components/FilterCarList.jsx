import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import {} from "../state/index";
import FilterCheckList from "./FilterCheckList";

const FilterCarList = ({ label, data, filteredData, handleFilter}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropDownRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!dropDownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className="relative flex max-[425px]:w-full max-md:w-full" ref={dropDownRef}>
      <div className="max-md:w-full  max-[425px]:w-full ">
        <div
          className="flex items-center min-w-max gap-3 hover:border-blue-800  cursor-pointer  border  px-4 py-1 text-gray-700 bg-primaryColor rounded-lg max-md:justify-between max-[425px]:justify-between"
          onClick={() => {
            setShowDropdown(!showDropdown);
          }}
        >
          <div>{label}</div>
          {filteredData.length !== 0 && (
            <div className="border w-6 h-6 flex justify-center items-center rounded-full bg-orange-400 text-xs text-white font-medium">
              {filteredData.length}
            </div>
          )}
          {showDropdown ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {showDropdown && (
          <div className="max-h-56 box-border min-w-max max-w-full   absolute top-12 left-0 max-lg:left-0 max-[375px]:-left-5  z-10  overflow-auto scrollbar-thin scrollbar-thumb-primaryColor scrollbar-track-backgroundColor  scrollbar-thumb-rounded-full    border bg-white   rounded-l-xl  rounded-r-xl ">
            {data.map((item, index) => {
              return (
                <span key={index}>
                  <FilterCheckList data={item} handleFilter = {handleFilter} filteredData = {filteredData} />
                </span>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterCarList;

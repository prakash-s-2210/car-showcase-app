import React, { useState, useEffect, useRef } from "react";
import FilterCheckList from "./FilterCheckList";


const Search = ({ data, handleFilter, filteredData }) => {
  let dropDownRef = useRef();
  const [showDropdown, setShowDropdown] = useState(false);
  const [inputData, setInputData] = useState("");
  const searchedData = [];
  data && data.forEach((item) => {
    if (item.toLowerCase().indexOf(inputData.toLowerCase()) === -1) {
      return;
    }
    searchedData.push(item);
  });
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
    <div className="relative flex max-md:w-full max-[425px]:w-full max-[580px]:w-full" ref={dropDownRef}>
      <div
        tabIndex={0}
        onClick={() => {
          setShowDropdown(!showDropdown);
        }}
        className="flex items-center gap-3 border px-2 rounded-lg bg-primaryColor focus:border-2 hover:border-blue-800 max-md:w-full max-md:justify-between max-[425px]:w-full max-[580px]:w-full"
      >
        <input
          type="text"
          value={inputData}
          onChange={(e) => {
            setInputData(e.target.value);
          }}
          placeholder="Search car model..."
          className="w-40 max-lg:w-36 py-1 bg-primaryColor border  text-gray-700 rounded-lg text-base  focus:outline-none focus:border  max-[425px]:w-full "
        />
        {filteredData.length !== 0 && (
          <div className="border w-6 h-6 flex justify-center items-center rounded-full bg-orange-400 text-xs text-white font-medium">
            {filteredData.length}
          </div>
        )}
      </div>
      {showDropdown && (
        <div className="max-h-56 box-border min-w-max max-w-full   absolute top-12 left-0 max-lg:left-0 max-[375px]:-left-5 z-10  overflow-auto scrollbar-thin scrollbar-thumb-primaryColor scrollbar-track-backgroundColor  scrollbar-thumb-rounded-full    border bg-white   rounded-l-xl  rounded-r-xl ">
          {searchedData.map((data, index) => {
            return (
              <span key={index}>
                <FilterCheckList
                  data={data}
                  handleFilter={handleFilter}
                  filteredData={filteredData}
                />
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Search;

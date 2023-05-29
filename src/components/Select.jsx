import React, { useState, useEffect, useRef } from "react";
import { brandNames } from "../common/brandNames";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setCarListings, setFilteredCarListings, setFilteredModels,  setFilteredClasses, setFilteredFuelTypes, setFilteredYears} from "../state/index";
import { Tooltip } from "react-tooltip";

const Select = ({isLoading , handleLoading, handlePagination}) => {
  const [prevSelectedBrand, setPrevSelectedBrand] = useState("");
  const [search, setSearch] = useState(false);
  const [brandName, setBrandName] = useState("Select a Brand name");
  const [brandDropdown, setBrandDropdown] = useState(false);
  const dropDownRef = useRef();
  const dispatch = useDispatch();
  //click outside  to close dropdown

  useEffect(() => {
    let handler = (e) => {
      if (!dropDownRef.current.contains(e.target)) {
        setBrandDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  

  //Handle select function to make api call for selected Brand Name
  const handleSearch = async () => {
    try {
      if(brandName === prevSelectedBrand || brandName === "Select a Brand name"){
        return;
      }
      handleLoading(true)
      setSearch(true);
      const response = await fetch(
        `https://api.api-ninjas.com/v1/cars?limit=50&make=${brandName.toLowerCase()}`,
        {
          method: "GET",
          headers: {
            "X-Api-Key": process.env.REACT_APP_CAR_DETAILS_API_KEY,
          },
        }
      );
      const data = await response.json();
      dispatch(
        setCarListings({
          carListings: data,
        })
      );
      dispatch(
        setFilteredCarListings({
          filteredCarListings: data,
        })
      );
      dispatch(
        setFilteredModels({
          model: [],
        })
      );
      dispatch(
        setFilteredClasses({
          classType: [],
        })
      );
      dispatch(
        setFilteredFuelTypes({
          fuelType: [],
        })
      );
      dispatch(
        setFilteredYears({
          year: [],
        })
      );
      setPrevSelectedBrand(brandName);
      setSearch(false);
      handleLoading(false);
      handlePagination(1);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className={`mt-36 max-lg:mt-24  flex items-center justify-center  gap-5 max-sm:items-center   max-[425px]:justify-between `}
    >
      <div
        className={`relative flex   bg-primaryColor rounded-md w-1/4 max-lg:w-1/3 max-md:w-1/2 max-sm:w-2/3  ${
          brandName === "Select a Brand name" ? "max-sm:text-sm " : ""
        }`}
        ref={dropDownRef}
      >
        <div
          className={`flex justify-between items-center  rounded-lg border border-primaryColor hover:border-blue-800  px-4 h-9  w-full cursor-pointer ${
            brandName === "Select a Brand name" ? "max-sm:px-2 " : "max-sm:px-2"
          }`}
          onClick={() => {
            setBrandDropdown(!brandDropdown);
          }}
        >
          <div
            className={`${
              brandName === "Select a Brand name"
                ? "text-gray-400"
                : "text-blue-800 font-medium"
            }`}
          >
            {brandName}
          </div>
          {brandDropdown ? (
            <span
              className={`${
                brandName === "Select a Brand name"
                  ? "text-gray-400 "
                  : "text-blue-800 "
              }`}
            >
              <FaChevronUp size="15" />
            </span>
          ) : (
            <span
              className={`${
                brandName === "Select a Brand name"
                  ? "text-gray-400 "
                  : "text-blue-800 "
              }`}
            >
              <FaChevronDown size="15" />
            </span>
          )}
        </div>
        {brandDropdown && (
          <div className="h-52 absolute  top-9 z-20 rounded-md w-full border bg-backgroundColor overflow-y-scroll scrollbar-thin scrollbar-thumb-primaryColor scrollbar-track-backgroundColor  scrollbar-thumb-rounded-full scrollbar-track-rounded-xl  ">
            {brandNames.map((brand, index) => {
              return (
                <div
                  key={index}
                  className={`py-2 max-sm:py-1 ${
                    brand === brandName
                      ? "text-white font-medium bg-blue-800 bg-opacity-40 pointer-events-none"
                      : "cursor-pointer hover:bg-primaryColor"
                  }`}
                  onClick={() => {
                    setBrandName(brand);
                    setBrandDropdown(false);
                  }}
                >
                  <span className="relative left-4">{brand}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div
        className={`flex items-center w-24 bg-blue-800 px-3 py-1 text-white rounded  gap-3 max-sm:w-20 max-sm:px-2 max-sm:justify-center ${
          search ? "opacity-50" : "opacity-100"} ${(brandName === prevSelectedBrand || brandName === "Select a Brand name") ? 'opacity-50 ' :"hover:bg-blue-600 " } ${ brandName === "Select a Brand name" ? "cursor-none": "cursor-pointer"}`}
        onClick={() => handleSearch()}
        data-tooltip-id="search-car-details"
        data-tooltip-content="Search for Car Brand"
      >
        <button className="  w-full max-sm:text-sm">
          Search
        </button>
      </div>
      <Tooltip 
        id ="search-car-details"
        place="bottom"/>
    </div>
  );
};

export default Select;

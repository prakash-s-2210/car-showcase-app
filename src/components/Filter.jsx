import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "./Select";
import FilterCarList from "./FilterCarList";
import {
  setFilteredClasses,
  setFilteredModels,
  setFilteredFuelTypes,
  setFilteredYears,
  setFilteredCarListings,
} from "../state/index";
import Search from "./Search";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Tooltip } from "react-tooltip";

// Error message for clicking filter button without select the filter options
const notifyError = (message) => {
  toast.error(message, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};
const Filter = ({ isLoading, handleLoading, handlePagination }) => {
  const dispatch = useDispatch();
  const { carListings, modelFilter, classFilter, fuelFilter, yearFilter } =
    useSelector((state) => state.carListings);
  const uniqueModels = [...new Set(carListings.map((item) => item.model))];
  const uniqueFuelTypes = [
    ...new Set(carListings.map((item) => item.fuel_type)),
  ];
  const uniqueClasses = [...new Set(carListings.map((item) => item.class))];
  const uniqueYears = [...new Set(carListings.map((item) => item.year))];

  // Updating filter model state
  const handleFilterModel = (data) => {
    let updatedFilteredModel = [];
    if (modelFilter.includes(data)) {
      updatedFilteredModel = modelFilter.filter((item) => item !== data);
      dispatch(
        setFilteredModels({
          model: updatedFilteredModel,
        })
      );
    } else {
      updatedFilteredModel = [...modelFilter, data];
      dispatch(
        setFilteredModels({
          model: updatedFilteredModel,
        })
      );
    }
  };
  // Updating filter class state
  const handleFilterClass = (data) => {
    let updatedFilteredClass = [];
    if (classFilter.includes(data)) {
      updatedFilteredClass = classFilter.filter((item) => item !== data);
      dispatch(
        setFilteredClasses({
          classType: updatedFilteredClass,
        })
      );
    } else {
      updatedFilteredClass = [...classFilter, data];
      dispatch(
        setFilteredClasses({
          classType: updatedFilteredClass,
        })
      );
    }
  };

  // Updating filter fuel type state
  const handleFilterFuelType = (data) => {
    let updatedFilteredFuelType = [];
    if (fuelFilter.includes(data)) {
      updatedFilteredFuelType = fuelFilter.filter((item) => item !== data);
      dispatch(
        setFilteredFuelTypes({
          fuelType: updatedFilteredFuelType,
        })
      );
    } else {
      updatedFilteredFuelType = [...fuelFilter, data];
      dispatch(
        setFilteredFuelTypes({
          fuelType: updatedFilteredFuelType,
        })
      );
    }
  };

  // Updating filter year state
  const handleFilterYear = (data) => {
    let updatedFilteredYear = [];
    if (yearFilter.includes(data)) {
      updatedFilteredYear = yearFilter.filter((item) => item !== data);
      dispatch(
        setFilteredYears({
          year: updatedFilteredYear,
        })
      );
    } else {
      updatedFilteredYear = [...yearFilter, data];
      dispatch(
        setFilteredYears({
          year: updatedFilteredYear,
        })
      );
    }
  };

  // function for resetting filters
  const handleReset = () => {
    if (
      !modelFilter.length &&
      !classFilter.length &&
      !yearFilter.length &&
      !fuelFilter.length
    ) {
      notifyError("No filter option is selected!");
      return;
    }
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
    dispatch(
      setFilteredCarListings({
        filteredCarListings: carListings,
      })
    );
    handlePagination(1);
  };

  // function for applying filter
  const handleFilter = async () => {
    if (
      !modelFilter.length &&
      !classFilter.length &&
      !yearFilter.length &&
      !fuelFilter.length
    ) {
      dispatch(
        setFilteredCarListings({
          filteredCarListings: carListings,
        })
      );
      handlePagination(1);
      notifyError("Select a filter option before applying.");
      return;
    }
    const updatedCarListings = await carListings.filter(
      (carDetail) =>
        (!fuelFilter.length || fuelFilter.includes(carDetail.fuel_type)) &&
        (!modelFilter.length || modelFilter.includes(carDetail.model)) &&
        (!classFilter.length || classFilter.includes(carDetail.class)) &&
        (!yearFilter.length || yearFilter.includes(carDetail.year))
    );
    dispatch(
      setFilteredCarListings({
        filteredCarListings: updatedCarListings,
      })
    );
    handlePagination(1);
  };

  return (
    <div className="px-16 max-sm:px-5">
      <Select
        isLoading={isLoading}
        handleLoading={handleLoading}
        handlePagination={handlePagination}
      />
      <div
        className=" flex justify-between items-center mt-14  max-xl:gap-3 max-md:gap-20 max-sm:gap-10
    max-[425px]:flex-col max-[425px]:gap-5 max-[580px]:w-full 
      "
      >
        <div className="flex justify-center items-center  gap-7  max-xl:gap-5 max-lg:flex-wrap max-lg:w-3/5 max-lg:gap-3 max-lg:self-start max-lg:justify-between  max-md:w-full max-md:justify-between max-md:gap-5 max-md:flex-col  max-[580px]:flex-col max-[580px]:w-full max-[580px]:items-start max-[425px]:w-full">
          <Search
            data={uniqueModels}
            handleFilter={handleFilterModel}
            filteredData={modelFilter}
          />
          <FilterCarList
            label="Class"
            data={uniqueClasses}
            filteredData={classFilter}
            handleFilter={handleFilterClass}
          />
          <FilterCarList
            label="Fuel Type"
            data={uniqueFuelTypes}
            filteredData={fuelFilter}
            handleFilter={handleFilterFuelType}
          />
          <FilterCarList
            label="Year"
            data={uniqueYears}
            filteredData={yearFilter}
            handleFilter={handleFilterYear}
          />
        </div>
        <div className="flex gap-5">
          <div
            className={`flex items-center  w-24  border  border-blue-800 hover:bg-primaryColor px-3 py-1 text-blue-800 rounded cursor-pointer gap-3 max-sm:w-20 max-sm:px-2 max-sm:justify-center ${
              modelFilter.length ||
              fuelFilter.length ||
              yearFilter.length ||
              classFilter.length
                ? "opacity-100 "
                : "opacity-50 "
            } `}
            onClick={handleReset}
            data-tooltip-id="reset-filter"
            data-tooltip-content="Reset Filters"
          >
            <button className="flex justify-center w-full max-sm:text-sm ">
              Reset
            </button>
          </div>
          <div
            className={`flex items-center  w-24 bg-blue-800  px-3 py-1 text-white rounded cursor-pointer gap-3 max-sm:w-20 max-sm:px-2 max-sm:justify-center 
          ${
            modelFilter.length ||
            fuelFilter.length ||
            yearFilter.length ||
            classFilter.length
              ? "opacity-100 hover:bg-blue-600"
              : "opacity-50 "
          }
         `}
            onClick={handleFilter}
            data-tooltip-id="filter-car-details"
            data-tooltip-content="Apply Filters"
          >
            <button className="flex justify-center w-full max-sm:text-sm ">
              Filter
            </button>
          </div>
        </div>
      </div>
      <div className="max-xl:self-start mt-10 max-lg:self-start">
        <div className="text-2xl font-medium">Car Catalogue</div>
        <div className="text-sm text-gray-500">
          Explore out cars you might like!
        </div>
      </div>
      <Tooltip id="filter-car-details" place="bottom" />
      <Tooltip id="reset-filter" place="bottom" />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Filter;

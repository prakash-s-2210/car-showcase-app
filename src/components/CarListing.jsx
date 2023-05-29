import React from "react";
import { useSelector } from "react-redux";
import CarCard from "./CarCard";

const CarListing = ({ page, isLoading }) => {
  const { filteredCarListings } = useSelector((state) => state.carListings);
  return (
    <>
      {filteredCarListings.length > 0 || isLoading ? (
        filteredCarListings.length ? (
          <div className="mt-12 grid 2xl:grid-cols-4 lg:grid-cols-3 max-xl:grid-cols-3 md:grid-cols-2 max-lg:grid-cols-2 max-sm:grid-cols-1   px-16 max-[450px]:px-5 gap-5 ">
            {filteredCarListings
              .slice(page * 10 - 10, page * 10)
              .map((data, index) => {
                return (
                  <div key={index}>
                    <CarCard data={data} isLoading={isLoading} />
                  </div>
                );
              })}
          </div>
        ) : (
          <div className="mt-12 grid 2xl:grid-cols-4 lg:grid-cols-3 max-xl:grid-cols-3 md:grid-cols-2 max-lg:grid-cols-2 max-sm:grid-cols-1   px-16 max-[450px]:px-5 gap-5 ">
            {new Array(10).fill(null).map((data, index) => {
              return (
                <div key={index}>
                  <CarCard data={data} isLoading={isLoading} />
                </div>
              );
            })}
          </div>
        )
      ) : (
        <div className="px-16 max-sm:px-5 mt-14 flex justify-center items-center">
          <span className="text-2xl text-blue-800 max-sm:text-lg">
            Oops! No cars found matching your selected filters.
          </span>
        </div>
      )}
    </>
  );
};

export default CarListing;

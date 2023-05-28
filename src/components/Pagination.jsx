import React from 'react';
import { useSelector } from 'react-redux';
import { GiNextButton, GiPreviousButton } from 'react-icons/gi';


const Pagination = ({ page, handlePagination }) => {
    const { filteredCarListings } =
    useSelector((state) => state.carListings);
  return (
    <>
    {filteredCarListings.length > 0 && 
    <div className='mt-16 h-9 flex justify-center items-center'>
        <button className= {`block max-sm:hidden border px-3 py-1 rounded text-white mr-10 max-sm:mr-5 bg-blue-800 ${page > 1 ? "opacity-100" : "opacity-50 cursor-not-allowed"}`} onClick={() => handlePagination(page-1)}>Previous</button>
        <span className= {`hidden max-sm:block border p-2 rounded-md text-white mr-5 bg-blue-800 ${page > 1 ? "opacity-100" : "opacity-50 cursor-not-allowed"}`} onClick={() => handlePagination(page-1)}><GiPreviousButton /></span>
        {[...Array(Math.ceil(filteredCarListings.length/10))].map((_, i) => {
            return(
                <span className={`cursor-pointer ${page === i+1 ? "border rounded-full bg-blue-800 text-white" : ""} px-3 py-1  `} onClick={() => handlePagination(i+1)} key={i}>{i + 1}</span>
            )
        })
        }
        <button className={`block max-sm:hidden border px-3 py-1 rounded text-white ml-10 max-sm:ml-5 bg-blue-800 ${page < Math.ceil(filteredCarListings.length /10) ?  "opacity-100" : "opacity-50 cursor-not-allowed" }`} onClick={() =>  handlePagination(page+1)}>Next</button>
        <span className={`hidden max-sm:block border p-2 rounded-md text-white ml-5 bg-blue-800 ${page < Math.ceil(filteredCarListings.length /10) ?  "opacity-100" : "opacity-50 cursor-not-allowed" }`} onClick={() => handlePagination(page+1)}><GiNextButton/></span>
    </div>
    }
    </>
  )
}

export default Pagination
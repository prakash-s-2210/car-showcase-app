import { useEffect, useState } from "react";
import Header from "./components/Header";
import CarListings from "./components/CarListing";
import Filter from "./components/Filter";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { setCarListings, setFilteredCarListings } from "./state/index";

function App() {
  const [isLoading, setIsLoading ] = useState(false);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const { filteredCarListings } = useSelector((state) => state.carListings);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.api-ninjas.com/v1/cars?limit=50&year=2023`,
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
        setIsLoading(false)
      } catch (error) {
        console.log(error);
      }
    };
    setIsLoading(true);
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // function for change page
  const handlePagination = (selectedPage) => {
    if(selectedPage >= 1 && selectedPage <= Math.ceil(filteredCarListings.length/10) && selectedPage !== page){
    setPage(selectedPage);
    }
  }
  const handleLoading = (val) => {
    setIsLoading(val)
  }

  return (
    <div className=" w-full ">
      <Header />
      <Filter isLoading = {isLoading} handleLoading = {handleLoading} handlePagination = {handlePagination}/>
      <CarListings page={page} isLoading = {isLoading}/>
      <Pagination
        page={page}
        handlePagination = {handlePagination}
      />
      <Footer />
    </div>
  );
}

export default App;

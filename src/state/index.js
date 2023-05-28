// Importing createSlice from redux toolkit
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carListings: [],
  filteredCarListings:[],
  modelFilter: [],
  classFilter: [],
  fuelFilter: [],
  yearFilter: [],
};
// Creating car slice
export const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    setCarListings: (state, action) => {
      state.carListings = action.payload.carListings;
    },
    setFilteredCarListings: (state, action) => {
      state.filteredCarListings = action.payload.filteredCarListings;
    },
    setFilteredModels: (state, action) => {
      state.modelFilter = action.payload.model;
    },
    setFilteredClasses: (state, action) => {
      state.classFilter = action.payload.classType;
    },
    setFilteredFuelTypes: (state, action) => {
      state.fuelFilter = action.payload.fuelType;
    },
    setFilteredYears: (state, action) => {
      state.yearFilter = action.payload.year;
    },
  },
});
// Exporting car listings actions
export const { setCarListings, setFilteredCarListings, setFilteredClasses, setFilteredModels, setFilteredFuelTypes, setFilteredYears} = carSlice.actions;
// Exporting car listings reducer
export default carSlice.reducer;

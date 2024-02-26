import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  homeRecipeData: {},
  cuisineList: [
    "African",
    "Asian",
    "American",
    "British",
    "Cajun",
    "Caribbean",
    "Chinese",
    "Eastern European",
    "European",
    "French",
    "German",
    "Greek",
    "Indian",
    "Irish",
    "Italian",
    "Japanese",
    "Jewish",
    "Korean",
    "Latin American",
    "Mediterranean",
    "Mexican",
    "Middle Eastern",
    "Nordic",
    "Southern",
    "Spanish",
    "Thai",
    "Vietnamese",
  ],
};

const homeSlice = createSlice({
  name: "home",
  initialState: initialState,
  reducers: {
    setHomeRecipeData: (state, action) => {
      state.homeRecipeData = action.payload;
    },
  },
});

export const { setHomeRecipeData } = homeSlice.actions;
export default homeSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    recipeData :  {},
    isLoading: false,
    recipeImage : "",
    ingredientsData : "",
}

const detailsSlice = createSlice({
    name: "details",
    initialState: initialState,
    reducers: {
        setRecipeDetails : (state, action) => {
            state.recipeData=action.payload;
        },
        setRecipeImage : (state, action) => {
            state.recipeImage = action.payload;
        },
        setIngredientData: (state, action) => {
            state.ingredientsData = action.payload;
        }
    }
})

export const { setRecipeDetails, setRecipeImage, setIngredientData } = detailsSlice.actions;
export default detailsSlice.reducer;
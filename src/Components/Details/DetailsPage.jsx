import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchRecipeData } from "../../Utils/Api";
import { useDispatch, useSelector } from "react-redux";
import {
  setRecipeDetails,
  setRecipeImage,
  setIngredientData,
} from "../../Redux/detailsSlice";
import poster from "../../assets/images/OOPS.jpg";
import Footer from "../Home/Footer";
import BasicDetails from "./BasicDetails";

const DetailsPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { recipeData, recipeImage, ingredientsData } = useSelector(
    (state) => state.details
  );

  // Fetching the data for a specific recipe when the component mounts
  useEffect(() => {
    const getRecipeData = async () => {
      // Get the recipe data using the provided id.
      try {
        const response = await fetchRecipeData(params.id, {}, "information");

        const recipeImg = response.data.image ? response.data.image : poster;
        dispatch(setRecipeDetails(response.data));
        dispatch(setRecipeImage(recipeImg));
      } catch (error) {
        console.error("error aagya bhai :", error);
      }
    };

    getRecipeData();

    const getIngredientImages = async () => {
      try {
        const response = await fetchRecipeData(
          params.id,
          {},
          "ingredientWidget"
        );

        dispatch(setIngredientData(response.data));
      } catch (error) {
        console.error("error aagya bhai :", error);
      }
    };
    getIngredientImages();
  }, [params.id]);
  return (
    Object.keys(recipeData).length !== 0 && (
      <div className="w-full flex flex-col items-center text-white">
        <div className="w-[90%] my-8 flex flex-col gap-4 items-center tablet:items-start justify-center bg-">
          <div className="flex items-center tablet:items-start gap-8 flex-col tablet:flex-row">
            <div className="w-[90%] tablet:w-[50%] h-full rounded-lg">
              <img
                className="w-full h-full rounded-lg"
                src={recipeImage}
                alt=""
              />
            </div>
            <div className="w-[90%] tablet:w-[50%] h-full flex flex-col items-center gap-4">
              <h1 className="text-[2rem] text-center font-bold mb-2 text-white">
                {recipeData.title}
              </h1>
              {recipeData.dishTypes.length !== 0 && (
                <div className="dishTypes flex items-center w-[100%] flex-wrap gap-1 border-b pb-6 border-gray-600">
                  <h1 className="font-bold">Dish Type:</h1>
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    {recipeData.dishTypes.map((type, idx) => {
                      return (
                        <p
                          className="bg-[#DA2F68] px-2 py-1 rounded-lg"
                          key={idx}
                        >
                          {type}
                        </p>
                      );
                    })}
                  </div>
                </div>
              )}
              {recipeData.cuisines.length !== 0 && (
                <div className="Cuisines flex items-center w-[100%] flex-wrap gap-2 border-b pb-6 border-gray-600">
                  <h1 className="font-bold">Cuisines:</h1>
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    {recipeData.cuisines.map((type, idx) => {
                      return (
                        <p
                          className="bg-[#DA2F68] px-2 py-1 rounded-lg"
                          key={idx}
                        >
                          {type}
                        </p>
                      );
                    })}
                  </div>
                </div>
              )}
              <BasicDetails display1={"hidden"} display2={"flex"} />
            </div>
          </div>
          <div className="w-[90%] tablet:w-full">
            <div
              className="dangerousSummary border-b pb-6 border-gray-600"
              dangerouslySetInnerHTML={{ __html: recipeData.summary }}
            />
            {/* <div className="flex items-center flex-wrap gap-x-4 border-b pb-6 border-gray-600">
              <div className="flex items-center gap-4 py-2">
                <p className="text-lg font-bold">Ready in : </p>
                <span className="text-lg font-bold text-gray-600">
                  {recipeData.readyInMinutes} Minutes
                </span>
              </div>
              |
              <div className="flex items-center gap-4 py-2">
                <p className="text-lg font-bold">Glutern Free: </p>
                <span className="text-lg font-bold text-gray-600">
                  {recipeData.glutenFree ? "Yes" : "No"}
                </span>
              </div>
              |
              <div className="flex items-center gap-4 py-2">
                <p className="text-lg font-bold">Dairy Free: </p>
                <span className="text-lg font-bold text-gray-600">
                  {recipeData.dairyFree ? "Yes" : "No"}
                </span>
              </div>
              |
              <div className="flex items-center gap-4 py-2">
                <p className="text-lg font-bold">Very Healthy: </p>
                <span className="text-lg font-bold text-gray-600">
                  {recipeData.veryHealthy ? "Yes" : "No"}
                </span>
              </div>
              |
              <div className="flex items-center gap-4 py-2">
                <p className="text-lg font-bold">Cheap: </p>
                <span className="text-lg font-bold text-gray-600">
                  {recipeData.cheap ? "Yes" : "No"}
                </span>
              </div>
              |
              <div className="flex items-center gap-4 py-2">
                <p className="text-lg font-bold">Very Popular: </p>
                <span className="text-lg font-bold text-gray-600">
                  {recipeData.veryPopular ? "Yes" : "No"}
                </span>
              </div>
              |
              <div className="flex items-center gap-4 py-2">
                <p className="text-lg font-bold">Vegetarian: </p>
                <span className="text-lg font-bold text-gray-600">
                  {recipeData.vegetarian ? "Yes" : "No"}
                </span>
              </div>
            </div> */}
            <BasicDetails display1={"flex"} display2={"hidden"} />
          </div>
        </div>
        <div className="ingredients w-[90%] flex flex-col items-center gap-8 py-12">
          <h1 className="text-3xl font-bold">Ingredients</h1>
          <div className="flex items-center justify-center flex-wrap gap-4">
            {recipeData.extendedIngredients.map((ing, idx) => {
              return (
                <div
                  className="ing rounded-[50%] w-[15rem] h-[15rem] mobile-large:w-[20rem] mobile-large:h-[20rem] flex flex-col items-center gap-2 mobile-large:gap-8 bg-white py-4 text-backgroundColor"
                  key={ing.id}
                  id={ing.id}
                >
                  <div className="w-[7rem] h-[7rem] ">
                    <img
                      className="w-full h-full  mix-blend-multiply"
                      src={
                        ing.image
                          ? `https://spoonacular.com/cdn/ingredients_100x100/${ing.image}`
                          : poster
                      }
                      alt=""
                    />
                  </div>
                  <p className="text-2xl font-semibold text-pinkLight">
                    {ing.nameClean}
                  </p>
                  <div className="flex items-center flex-wrap gap-2 text-pinkLight">
                    <p>Amount: </p>
                    <p>
                      {ing.measures.metric.amount}{" "}
                      {ing.measures.metric.unitLong}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* <div dangerouslySetInnerHTML={{ __html: ingredientsData }} /> */}
      </div>
    )
  );
};

export default DetailsPage;

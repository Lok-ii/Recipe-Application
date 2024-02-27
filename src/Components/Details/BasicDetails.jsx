import React from "react";
import { useSelector } from "react-redux";

const BasicDetails = ({ display1, display2 }) => {
  const { recipeData } = useSelector((state) => state.details);
  return (
    Object.keys(recipeData).length !== 0 && (
      <div className={`${display1} tablet:${display2} items-center flex-wrap gap-x-4 border-b pb-6 border-gray-600`}>
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
      </div>
    )
  );
};

export default BasicDetails;

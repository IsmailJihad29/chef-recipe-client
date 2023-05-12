import React from "react";
import { FaStar } from "react-icons/fa";

const Recipe = ({ recipe }) => {
  console.log(recipe);
  const { name, ingredients, recipePhoto, rating, cookingMethod, recipeId } =
    recipe;
  console.log(recipe);


  return (
    <div>
      <div className="card w-full background-2 shadow-xl">
        <figure className="px-5 pt-5">
          <img src={recipePhoto} alt="" className="rounded-xl h-40 w-full" />
        </figure>
        <div className="card-body  ">
          <h2 className="card-title text-center txt-3xl font-bold">{name}</h2>

          <div className="card-actions flex justify-between items-center">
            <label htmlFor={recipeId} className="btn button">
              See Details
            </label>
            <p className="font-semibold flex items-center">
              Rating: {rating}
              <span className="text-yellow-400">
                <FaStar />{" "}
              </span>
            </p>
          </div>
        </div>
      </div>
      {/* modal */}

      <div>
        <input type="checkbox" id={recipeId} className="modal-toggle" />
        <div className="modal ">
          <div className="modal-box relative glass">
            <label
              htmlFor={recipeId}
              className="btn btn-sm btn-circle absolute right-2 top-2">
              ✕
            </label>
            <h3 className="text-lg font-bold">{name}</h3>
            <p className="py-4 text-white">
              <span className="font-semibold text-xl text-purple-700">Ingredients</span>

              {ingredients.map((ingredient) => (
                <li>{ingredient}</li>
              ))}
            </p>
            <p className="py-4 text-white">
                          <span className="font-semibold text-purple-700 ">Cooking Method:</span> <br />
                          {cookingMethod}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;

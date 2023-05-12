import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useLoaderData, useParams } from 'react-router-dom';

const ChefDetails = () => {
  const chefs = useLoaderData()
  const {chefPhoto, chefName,bio, yearsExperience,numRecipes,likes } = chefs
 
    return (
      <div className='my-container'>
        
    <div className="card lg:card-side w-9/12 bg-base-100 shadow-xl mx-auto">
  <figure><img src={chefPhoto} className='h-96' alt="Album"/></figure>
  <div className="card-body">
            <h2 className="card-title">{ chefName}</h2>
            <p>{ bio}</p>
            <p><span className='font-bold text-cyan-400'>Year Of Experience</span>: { yearsExperience}</p>
            <p>Recipes: { numRecipes}</p>
            <p>Likes: { likes}</p>
    <div className="card-actions justify-end">
    </div>
  </div>
        </div>
        
        <div className='grid md:grid-cols-2 justify-center gap-6 w-9/12 mx-auto mt-6 mb-6'>
        
          
          {
            chefs.recipes.map((recipe) => <div key={recipe.recipeId} recipe={recipe} className=''>
              
              
              <div className="card w-full bg-base-100 shadow-xl h-full image-full">
  <figure><img src={recipe.recipePhoto} className='' alt="" /></figure>
  <div className="card-body">
                  <h2 className="card-title font-bold text-3xl text-yellow-500">{recipe.name}</h2>
                  <p>Ingredients <br />
                  {
                    recipe.ingredients.map(ingredient => <li>{ingredient }</li>)
                  }
                  </p>
                  <p><span className='font-semibold text-yellow-500'>Cooking Method:</span> {recipe.cookingMethod }</p>
                  <div className="card-actions justify-end">
                    <p className='font-bold flex items-center'> { recipe.rating} <FaStar className='text-yellow-400'></FaStar></p>
      <button className="btn btn-primary">Add To Fav</button>
    </div>
  </div>
</div>
            </div>)
          }
        </div>
        </div>
    );
};

export default ChefDetails;
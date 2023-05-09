import React from 'react';
import { FaStar } from 'react-icons/fa';

const Recipe = ({ recipe }) => {
    console.log(recipe)
    const { name, ingredients, recipePhoto, rating, cookingMethod } = recipe
    
    const cooking = cookingMethod
    const sliceCooking = cooking.slice(0, 100)
    return (
        <div>
           <div className="card w-full background shadow-xl">
  <figure className="px-5 pt-5">
    <img src={recipePhoto} alt="" className="rounded-xl h-40 w-full" />
  </figure>
  <div className="card-body  ">
                    <h2 className="card-title text-center txt-3xl font-bold">{name}</h2>
                    {
                        ingredients.map(ingredient => <li>{ ingredient}</li>)
                    }
                    
                    <p><span className='font-semibold'>Cooking Method:</span> {sliceCooking}....</p>
    <div className="card-actions flex justify-between items-center">
                        <button className="btn btn-primary button">SEE DETAILS</button>
                        <p className='font-semibold flex items-center'> Rating: { rating}<span className='text-yellow-400'><FaStar/> </span></p>
    </div>
  </div>
            </div>
            
        </div>
    );
};

export default Recipe;
import React from 'react';
import { Link } from 'react-router-dom';

const Chefs = ({ chefs }) => {
  
    const {yearsExperience, likes,numRecipes,chefPhoto,chefName,id} = chefs;
    return (
        <>
            <div className="card card-compact w-full  background  shadow-xl">
  <figure><img  src={chefPhoto} alt="" className='h-48 w-full' /></figure>
  <div className="card-body">
    <h2 className="card-title">{ chefName}</h2>
                    <p className='font-semibold'>Year Of Experience: { yearsExperience}</p>
                    <p className='font-semibold'>Number Of Recipes: { numRecipes}</p>
                    <p className='font-semibold'>Total Likes: { likes}</p>
    <div className="card-actions justify-end">
      <Link to={`/chefs/${id}`}><button  className="button">See Chefs Details</button></Link>
    </div>
  </div>
</div>
        </>
    );
};

export default Chefs;
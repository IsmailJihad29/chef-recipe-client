import React from 'react';

const Chefs = ({ chefs }) => {
    console.log(chefs);
    const {yearsExperience, likes,numRecipes,chefPhoto,chefName } = chefs;
    return (
        <>
            <div className="card card-compact w-full  bg-gradient-to-r from-fuchsia-200 to-violet-200 hover:bg-gradient-to-r shadow-xl">
  <figure><img  src={chefPhoto} alt="" className='h-48 w-full' /></figure>
  <div className="card-body">
    <h2 className="card-title">{ chefName}</h2>
                    <p>Year Of Experience: { yearsExperience}</p>
                    <p>Number Of Recipes: { numRecipes}</p>
                    <p>Total Likes: { likes}</p>
    <div className="card-actions justify-end">
      <button to={'/chefSection'} className="button">See Chefs Details</button>
    </div>
  </div>
</div>
        </>
    );
};

export default Chefs;
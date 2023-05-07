import React from 'react';

const Chefs = ({ chefs }) => {
    console.log(chefs);
    const {yearsExperience, likes,numRecipes,chefPhoto,chefName } = chefs;
    return (
        <>
            <div className="card card-compact md:w-80 sm:w-40 bg-base-100 shadow-xl">
  <figure><img  src={chefPhoto} alt="" className='h-48 w-full' /></figure>
  <div className="card-body">
                    <h2 className="card-title">{ chefName}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </>
    );
};

export default Chefs;
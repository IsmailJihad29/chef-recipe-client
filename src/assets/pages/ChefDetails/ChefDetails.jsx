import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ChefDetails = () => {
  const chefs = useLoaderData()
  const {chefPhoto} = chefs
  console.log(chefs)
 
    return (
        <div className='my-container mx-auto'>
            <div className="card lg:card-side w-9/12 bg-base-100 shadow-xl">
  <figure><img src={chefPhoto} alt="" className='w-9/12 me-auto'/></figure>
  <div className="card-body">
    <h2 className="card-title">New album is released!</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div>
        
        </div>
    );
};

export default ChefDetails;
import React from 'react';

import Lottie from 'lottie-react'
import review from '../../../../public/review.json'


const Reviews = () => {
    return (
        <div className='bg-gray-200'>
            <h1 className='text-center'>See What Our Customers Says !!!</h1>
            <div className='flex justify-center items-center mx-auto mt-20 md:flex-inline'>
                <div>
                <Lottie className='h-96' animationData={review} loop={true} />
                </div>
                
                <div className=''>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
    Focus me to see content
  </div>
  <div className="collapse-content">
    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
  </div>
</div>
                </div>
          </div>
        </div>
    );
};

export default Reviews;
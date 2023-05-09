import React from 'react';
import backgroundImage from '../../../../public/banner1.png'
import banner from '../../../../public/banner.jpg'
import { Link } from 'react-router-dom';
import OurChefs from '../OurChefs/OurChefs';
import Recipes from '../Recipes/Recipes';
const HomePage = () => {
    return (
        <>
         <div className='bg-gray-200'>

            <div className='my-container mx-auto flex flex-col items-center justify-between lg:flex-row '>
      {/* Text Content */}
      <div className='mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0'>
        <div className='max-w-xl mb-6 lg:mt-8'>
          <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-balck sm:text-4xl sm:leading-none'>
            ARE YOU HUNGRY?? <br className='hidden md:block' />
            <span className='inline-block text-purple-400'>REMOVE YOUR HUNGER</span>
          </h2>
          <p className='text-base text-black text-semibold md:text-lg'>
          Welcome to our restaurant where you can satisfy your hunger and enjoy a delicious meal at the same time! Our menu offers a wide range of mouth-watering dishes that will leave you feeling satisfied and content. Our friendly staff will ensure that your dining experience is both enjoyable and memorable. So come on in and take a bite - we promise you won't be disappointed!
          </p>
        </div>
        <div className='flex flex-col items-center md:flex-row'>
          <Link to='' className='btn btn-primary bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:bg-gradient-to-r md:w-auto md:mr-4'>
            <div className='inline-flex items-center justify-center w-full h-full'>
              <p className='mr-3'>View Recipes</p>
            </div>
          </Link>
         </div>
                        
                    </div>
                    <img src={backgroundImage} alt="" />
            </div>
            </div>
        <OurChefs />
        {/* <Recipes/> */}
        </>
    );
};

export default HomePage;
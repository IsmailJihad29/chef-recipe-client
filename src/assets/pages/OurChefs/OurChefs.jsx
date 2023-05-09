import React, { useEffect, useState } from 'react';
import Chefs from '../Chefs/Chefs';

const OurChefs = () => {
    const [ourChef, setOurChef] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/chefs')
            .then((res) => res.json())
        .then((data)=> setOurChef(data))
    }, [])

    return (
        <div className='w-9/12 mx-auto mt-6 mb-6'>
            <h1 className='text-center font-bold text-4xl mb-6 text-purple-500'>MEET OUR CHIEF CHEFS</h1>
            <div className='grid md:grid-cols-3 sm:grid-cols-2 justify-center gap-6'>
            {
                ourChef.map(chefs=> <Chefs key={chefs.id} chefs={chefs}></Chefs>)
            }
            </div>
        </div>
    );
};

export default OurChefs;
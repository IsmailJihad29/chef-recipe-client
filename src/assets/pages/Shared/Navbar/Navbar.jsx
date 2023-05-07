import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { FaBars, FaRegWindowClose } from 'react-icons/fa';

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
       
        <div className='bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:bg-gradient-to-r px-4 py-3  sm:max-w-xl md:max-w-full lg:max-w-screen md:px-24 lg:px-8'>
      <div className='relative flex items-center justify-between'>
        {/* Logo Section */}
         <Link to='/' className='inline-flex items-center'>
                    
          <span className='ml-2 text-xl font-bold tracking-wide text-gray-800'>
                THE HUNGRY HEAD 
          </span>
        </Link>

        {/* Nav Items Section */}
        <ul className='items-center text-white font-bold hidden space-x-8 lg:flex'>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? 'active' : 'default')}> HOME</NavLink>
          </li>
          <li>
            <NavLink
              to='/blog'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              BLOG
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/recipes'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              RECIPES
            </NavLink>
                    </li>
                    <div className="flex-none gap-2">
                
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                           <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                         </div>
                       </label>
                    </div>
        </ul>
        {/* Mobile Navbar Section */}
        <div className='lg:hidden '>
          {/* Dropdown Open Button */}
          <button
            aria-label='Open Menu'
            title='Open Menu'
            onClick={() => setIsMenuOpen(true)}
          >
            <FaBars/>
             </button>
                    
          {isMenuOpen && (
            <div className='absolute top-0 left-0 w-full z-10'>
              <div className='p-5 bg-white border rounded shadow-sm'>
                {/* Logo & Button section */}
                <div className='flex items-center justify-between mb-4'>
                  <div>
                    <Link to='/' className='inline-flex items-center'>
                     
                      <span className='ml-2 text-2xl font-bold tracking-wide text-purple-600 uppercase'>
                       THE HUNGRY HEAD
                      </span>
                    </Link>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label='Close Menu'
                      title='Close Menu'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <FaRegWindowClose className='w-5 text-purple-600' />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                <ul className='space-y-4 font-bold'>
                                    <div className="flex-none gap-2">
                
                                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                           <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                         </div>
                       </label>
                    </div>
                    <li>
                      <Link to='/' className='default text-purple-700'>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/blog'
                        className='font-medium tracking-wide text-purple-700 transition-colors duration-200 hover:text-blue-400'
                      >
                       BLOG
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/recipes'
                        className='font-medium tracking-wide text-purple-700 transition-colors duration-200 hover:text-blue-400'
                      >
                         RECIPES
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    );
};

export default Navbar;
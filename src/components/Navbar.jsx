/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { BsViewStacked } from "react-icons/bs";
import { NavLink } from 'react-router-dom';

const Navbar = () => {


  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };


  return (
    <div className='flex bg-blue-200 justify-between items-center h-24 w-full mx-auto px-4 text-blue-950'>
      <h1 className='w-full text-3xl font-bold text-blue-950'>ANIMATE.</h1>
      <ul className='hidden font-semibold md:flex'>
        <li className='p-4'>HOME</li>
        <li className='p-4'>RESOURCES</li>
        <li className='p-4'>ABOUT</li>
        <li className='p-4'>CONTACT</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <BsViewStacked size={20}/> : <BsViewStacked size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-900 bg-blue-100 ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-blue-950 m-4'>ANIMATE.</h1>
        <li className='p-4 border-b font-semibold border-blue-200'>HOM</li>
          <li className='p-4 border-b font-fontsemibold border-blue-200'>ABOUT</li>
          <li className='p-4 border-b font-semibold border-blue-200'>RESOURCES</li>
          <li className='p-4 font-semibold'>CONTACT</li>
      </ul>
    </div>
  )
}

export default Navbar
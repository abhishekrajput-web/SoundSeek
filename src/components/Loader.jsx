import React from 'react';
import loader from "../assets/loader.svg";
const Loader = ({title}) => {
  return (
    <div className='flex justify-center items-center flex-col'>
      <img src={loader} alt="loader" className='w-32 h-32 object-contain' />
      <h2 className='text-white text-xl font-bold'>{title || 'Loading...'}</h2>
    </div>
  )
}

export default Loader;

import React, { useState } from 'react';
import {AiOutlineSearch} from 'react-icons/ai';
import {useNavigate} from "react-router-dom";
const Searchbar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
            navigate(`/search/${searchTerm}`);
            setSearchTerm('');
    }

    const handleClick = (e) => {
        e.preventDefault();
        if(searchTerm){
            navigate(`/search/${searchTerm}`);
            setSearchTerm('');
        }
    }

  return (
    <form onSubmit={handleSubmit}>
        <div className='flex flex-row justify-between items-center bg-white rounded-3xl'>
        <input type="text" placeholder='search...' value={searchTerm } onChange={(e) => setSearchTerm(e.target.value)} className='border-none outline-none text-xl font-medium rounded-2xl px-6 py-2 w-11/12'   />
            <AiOutlineSearch className='text-4xl text-gray-600 font-bold bg-white rounded-2xl px-1 cursor-pointer transition-all hover:text-gray-900' onClick={handleClick} />
        </div>
    </form>
  )
}

export default Searchbar;
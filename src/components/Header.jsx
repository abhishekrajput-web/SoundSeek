import React from 'react';
import SearchBar from "./Searchbar";
import Logo from './Logo';
const Header = () => {
  return (
    <div className='mobile-navbar mb-10'>
      <Logo/>
      <SearchBar/>
    </div>
    
  )
}

export default Header;

import React from 'react'
import {Link} from "react-router-dom";
import logoImg from "../assets/logo.png";
const Logo = () => {
  return (
    <Link to="/">
    <img src={logoImg} alt="logo" className="w-28 rounded-full border-2 border-blue-400"/>
    </Link>
  )
}

export default Logo;
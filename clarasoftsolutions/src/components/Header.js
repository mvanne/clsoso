
import React from "react";
import Navbar from "./Navbar";
import logo from './../logo.png';


const Header = () => {
    return (
        <header>
         
        <h1><img src={logo} alt="Clarasoft Solutions Logo" className="logo" />Clarasoft Solutions</h1>
        <p>Your trusted IT partner for innovative solutions</p>
            <Navbar />
        </header>
    );
};

export default Header;
            
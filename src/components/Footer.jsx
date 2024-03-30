import React from 'react';
import logo from '../imgs/logo2 1.png';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className="footer">

            <img src={logo} alt="logo" className="w-20 h-20" />
            <p className="text-3xl text-white">WrenGuard</p>
            <p className='text-xl text-white opacity-80 p-10'>Copyright © 2024</p>

        </footer>
    );
};

export default Footer;

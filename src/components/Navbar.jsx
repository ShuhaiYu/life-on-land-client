import React, { useState } from 'react';
import { NavLink, Link, Outlet } from 'react-router-dom';

import Logo2 from '../imgs/logo2 1.png';

// Navbar component
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="navbar z-50 relative">
                <NavLink to="/" className="flex flex-row items-center justify-center gap-3 mr-auto">
                    <img src={Logo2} alt="WrenGuard" className="w-16 h-16" />
                    <p className=' text-3xl text-white'>WrenGuard</p>
                </NavLink>
                <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    <i className="fi fi-rr-menu-burger text-3xl text-white"></i>
                </div>
                <div className={`flex flex-col md:flex-row items-center justify-center md:gap-x-12 lg:gap-x-20 ml-auto md:relative `} >
                    <NavLink to="/grasswren" className="link">Threatened Grasswren</NavLink>
                    <NavLink to="/risk" className="link">What Went Wrong</NavLink>
                    <NavLink to="/education" className="link">Becoming An Expert</NavLink>
                    <NavLink to="/involved" className="link">Get Involved</NavLink>
                </div>
            </nav>
            <Outlet />
        </>

    );
}

export default Navbar;
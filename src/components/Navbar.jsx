import React from 'react';
import { NavLink, Link, Outlet } from 'react-router-dom';

import Logo2 from '../imgs/logo2 1.png';

// Navbar component
const Navbar = () => {
    return (
        <>
            <nav className="navbar z-50">
                <NavLink to="/" className="flex flex-row items-center justify-center gap-3 mr-auto">
                    <img src={Logo2} alt="WrenGuard" className="w-16 h-16" />
                    <p className=' text-3xl text-white'>WrenGuard</p>
                </NavLink>
                <div className="flex items-center justify-center md:gap-x-12 lg:gap-x-20 ml-auto" >
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
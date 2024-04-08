import React from 'react';
import { NavLink, Link, Outlet } from 'react-router-dom';

// Navbar component
const Navbar = () => {
    return (
        <>
            <nav className="navbar z-50">
                <NavLink to="/" className="text-3xl text-white mr-auto">WrenGuard</NavLink>
                <div className="flex items-center justify-center md:gap-x-12 lg:gap-x-20 mx-auto" >
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
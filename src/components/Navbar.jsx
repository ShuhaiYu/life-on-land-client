import React from 'react';
import { NavLink, Link, Outlet } from 'react-router-dom';

// Navbar component
const Navbar = () => {
    return (
        <>
            <nav className="navbar z-50">

                <NavLink to="/" className="flex-none text-3xl w-10 text-white">WrenGuard</NavLink>
                <div className="flex items-center justify-center gap-x-3 md:gap-12 mx-auto">
                    <NavLink to="/grasswren" className="link">Threatened Grasswren</NavLink>
                    <NavLink to="/risk" className="link">What Went Wrong</NavLink>
                    <NavLink to="/education" className="link">Becoming An Expert</NavLink>
                    <NavLink to="/involved" className="link">Get Involved</NavLink>

                </div>

            </nav>
            {/* Outlet is a special component that allows nested routing */}
            <Outlet />
        </>

    );
}

export default Navbar;
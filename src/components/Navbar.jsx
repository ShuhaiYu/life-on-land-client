import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const Navbar = () => {
    return (
        <>
            <nav className="navbar">

                <Link to="/" className="flex-none w-10 text-white">WrenGuard</Link>
                <div className="flex items-center gap-3 md:gap-6 ml-auto">
                    <Link to="/grasswren" className="link">Threatened Grasswren</Link>
                    <Link to="/risk" className="link">Why It Is Important</Link>
                    <Link to="/education" className="link">Becoming An Expert</Link>
                    <Link to="/involved" className="link">Get Involved</Link>

                </div>

            </nav>
            <Outlet />
        </>

    );
}

export default Navbar;
import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const Navbar = () => {
    return (
        <>
            <nav className="navbar">

                <Link to="/" className="flex-none text-3xl w-10 text-white">WrenGuard</Link>
                <div className="flex items-center justify-center gap-x-3 md:gap-12 mx-auto">
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
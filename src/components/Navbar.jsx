import React, { useState } from 'react';
import { NavLink, Link, Outlet } from 'react-router-dom';

import Logo2 from '../imgs/logo2 1.png';

// Navbar component
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showRiskDropdown, setShowRiskDropdown] = useState(false);
    const [showEducationDropdown, setShowEducationDropdown] = useState(false);


    return (
        <>
            <nav className="navbar z-50 relative">
                <NavLink to="/" className="flex flex-row items-center justify-center gap-3 mr-auto">
                    <img src={Logo2} alt="WrenGuard" className="w-16 h-16" />
                    <p className=' text-3xl text-white'>WrenGuard</p>
                </NavLink>
                <div className="hidden sm:visible" onClick={() => setIsOpen(!isOpen)}>
                    <i className="fi fi-rr-menu-burger text-3xl text-white"></i>
                </div>
                <div className={`flex flex-col sm:flex-row items-center justify-center md:gap-x-12 lg:gap-x-20 ml-auto md:relative `} >
                    <NavLink to="/grasswren" className="link">Threatened Grasswren</NavLink>
                    <div
                        onMouseEnter={() => setShowRiskDropdown(true)}
                        onMouseLeave={() => setShowRiskDropdown(false)}
                        className="relative">
                        <NavLink to="/risk" className="link">
                            What Went Wrong
                            <i className="fi fi-rs-angle-down ml-2"></i>
                        </NavLink>
                        {showRiskDropdown && (
                            <div className="dropdown-menu">
                                <NavLink to="/risk/fire" className="dropdown-link">Fire</NavLink>
                                <NavLink to="/risk/predators" className="dropdown-link">Predators</NavLink>
                                <NavLink to="/risk/humans" className="dropdown-link">Human Factors</NavLink>
                                <NavLink to="/risk/prediction" className="dropdown-link">Prediction</NavLink>
                            </div>
                        )}
                    </div>
                    <div
                        onMouseEnter={() => setShowEducationDropdown(true)}
                        onMouseLeave={() => setShowEducationDropdown(false)}
                        className="relative">
                        <NavLink to="/education" className="link hover:text-gray-200">
                            Becoming An Expert
                            <i className="fi fi-rs-angle-down ml-2"></i>
                        </NavLink>
                        {showEducationDropdown && (
                            <div className="dropdown-menu">
                                <NavLink to="/education/quiz" className="dropdown-link">Start Challenge</NavLink>
                                <NavLink to="/education/habitat" className="dropdown-link">Build a Habitat</NavLink>
                                <NavLink to="/education/plan" className="dropdown-link">Make a Plan</NavLink>
                            </div>
                        )}
                    </div>
                    <NavLink to="/involved" className="link">Get Involved</NavLink>
                </div>
            </nav>
            <Outlet />
        </>

    );
}

export default Navbar;
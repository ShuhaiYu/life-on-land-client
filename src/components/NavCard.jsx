import React from 'react';
import { Link } from 'react-router-dom';

// NavCard component
const NavCard = ({ title, img, link }) => {
    return (
        <Link to={link} className='flex flex-col justify-center items-center w-[25%] bg-dark-green transition duration-300 ease-in-out hover:bg-light-green focus:bg-light-green focus:outline-none hover:-translate-y-1 hover:shadow-lg'>
            <h1 className='text-2xl text-white text-center uppercase font-bold my-20 p-10 transition-opacity duration-300 ease-in-out hover:opacity-90'>{title}</h1>

            <img src={img} alt={title} className='w-full h-full object-cover transition-transform duration-300 ease-in-out' />
        </Link>


    )
}

export default NavCard;
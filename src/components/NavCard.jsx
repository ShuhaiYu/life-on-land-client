import React from 'react';
import { Link } from 'react-router-dom';

// NavCard component
const NavCard = ({ title, img, link }) => {
    return (
        <Link to={link} className='flex flex-col justify-center items-center md:w-[25%] w-full bg-dark-green transition duration-300 ease-in-out hover:bg-light-green focus:bg-light-green focus:outline-none hover:-translate-y-5 hover:shadow-lg'>
            <h1 className='text-2xl text-white text-center uppercase font-bold my-20 p-5 md:p-10 transition-opacity duration-300 ease-in-out hover:opacity-90 h-40 md:h-40 overflow-hidden whitespace-normal'>{title}</h1>

            <img src={img} alt={title} className='w-full h-full object-cover transition-transform duration-300 ease-in-out' />
        </Link>



    )
}

export default NavCard;
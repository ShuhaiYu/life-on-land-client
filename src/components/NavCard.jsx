import React from 'react';
import { Link } from 'react-router-dom';

// NavCard component
const NavCard = ({ title, img, link }) => {
    return (
        
        <div className='flex flex-col justify-center items-center w-[25%] bg-dark-green pt-10'>

            <h1 className='text-2xl text-white text-center uppercase font-bold w-2/3 my-5'>{title}</h1>
            <Link to={link} className='text-white underline text-xl text-center my-5 pb-10'>To know more</Link>
            <img src={img} alt={title} className='w-full h-full object-cover' />
        </div>

    )
}

export default NavCard;
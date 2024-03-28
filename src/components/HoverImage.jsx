import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HoverImage = ({ imgSrc, title, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (

    <Link to={link} className='relative max-w-xl mx-auto' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <img src={imgSrc} alt="Grasswren" className='w-[100%] rounded-[100px]' />
        {!isHovered && (
          <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-[100px]"></div>
        )}
        <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-4xl font-bold opacity-80">{title}</h2>
        </div>
    </Link>
 
  );
};

export default HoverImage;

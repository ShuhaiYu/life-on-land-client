import React from 'react';
import { Link } from 'react-router-dom';

const TopicSelectCard = ({ topicName, topicDescription, link, imgIcon }) => {
    return (
        <div className="flex flex-col items-center justify-center bg-white w-full h-hull">
            
            <h2 className='text-2xl font-bold text-dark-green text-center capitalize p-10'>{topicName}</h2>
            <p className='p-10 text-2xl text-center'>{topicDescription}</p>
            <Link to={link} className='btn-light'>Start</Link>
            <img src={imgIcon} alt="Topic Icon" className='p-10 rounded-full' />
        </div>
    );
};

export default TopicSelectCard;
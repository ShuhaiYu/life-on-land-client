import React from 'react';
import { Link } from 'react-router-dom';

const TopicSelectCard = ({ topicName, topicDescription, imgIcon }) => {
    // Encode the topicName to ensure it's a valid URL component
    const encodedTopicName = encodeURIComponent(topicName);

    return (
        <div className="flex flex-col items-center justify-center bg-white w-full h-hull">

            <h2 className='text-3xl font-bold text-[#0B7077] text-center capitalize p-10 h-[100px]'>{topicName}</h2>
            <p className='p-10 text-2xl text-center h-[150px]'>{topicDescription}</p>
            <Link to={`/education/quiz?title=${encodedTopicName}`} className='btn-light'>
                Start
            </Link>
            <img src={imgIcon} alt="Topic Icon" className='p-10 w-1/2 ' />
        </div>
    );
};

export default TopicSelectCard;
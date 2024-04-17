import React from 'react';
import { useLocation } from 'react-router-dom';
import QuizWren from '../components/QuizWren';
import QuizSpot from '../components/QuizSpot';
import QuizWhere from '../components/QuizWhere';
import QuizFavorite from '../components/QuizFavorite';

import bird from '../imgs/education/bird.png';
import telescope from '../imgs/education/telescope2.png';
import nest from '../imgs/education/nest.png';
import berries from '../imgs/education/berries.png';

const quizDetails = {
    "Threatened Species": {
        title: "Threatened Species", 
        icon: bird,
        desc: "Did you know the grasswren has a serious dietary routine? Let us find out what they love the most!",
        component: <QuizWren />
    },
    "Spot A Grasswren": {
        title: "Spot A Grasswren", 
        icon: telescope,
        desc: "How do we know if that is a grasswren?",
        component: <QuizSpot />
    },
    "Where Do They Live": {
        title: "Where Do They Live", 
        icon: nest,
        desc: "Reveal the secret of the grasswren's habitat!",
        component: <QuizWhere />
    },
    "Grasswren's Favorite": {
        title: "Grasswren's Favorite",
        icon: berries,
        desc: "Did you know the grasswren has a serious dietary routine?",
        component: <QuizFavorite />
    }
};


const useQuery = () => {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
};

const QuizPage = () => {
    const query = useQuery();
    const title = query.get('title');
    const details = quizDetails[decodeURIComponent(title)] || quizDetails["Threatened Species"]; // Fallback to default if not found

    return (
        <div className='bg-grey h-full'>
            <div className='flex flex-col items-center justify-center'>
                <img src={details.icon} alt={`${details.title} Icon`} className='w-20 h-20 m-5'/>
                <h1 className='text-5xl text-dark-green font-bold text-center m-5'>{details.title}</h1>
                <p className='text-3xl w-[60%] text-center font-noto-sans-tc text-[#747474] mb-5'>{details.desc}</p>
                
            </div>
            <div>
                {details.component}
            </div>
        </div>
    );
};

export default QuizPage;

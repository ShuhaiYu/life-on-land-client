import React from 'react';
import { Link, useLocation } from 'react-router-dom';
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
        desc: "How do we determine if a species is endangered? \nLet's see if you can make correct judgement!",
        component: <QuizWren />
    },
    "Spot a Grasswren": {
        title: "Spot a Grasswren",
        icon: telescope,
        desc: "Spotting grasswrens can be quite challenging \ndue to their rapid hopping and swift movements.",
        component: <QuizSpot />
    },
    "Where Do They Live": {
        title: "Where Do They Live",
        icon: nest,
        desc: "Grasswren is one of the birds recognised as the most difficult to find. \nLet's reveal the secret of their habitat! \nSelect one or more locations where you think might be Grasswren's favourite spot",
        component: <QuizWhere />
    },
    "Grasswren's Favorite": {
        title: "Grasswren's Favorite",
        icon: berries,
        desc: "Did you know the grasswren has a serious dietary routine? \nLet's find out what they love the most!",
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
        <div className='bg-grey h-auto relative'>
            <div className='flex flex-col items-center justify-center'>
                <img src={details.icon} alt={`${details.title} Icon`} className='w-20 h-20 m-5 mt-10' />
                <h1 className='text-5xl text-dark-green font-bold text-center m-5 mt-0'>{details.title}</h1>
                <p className='text-3xl w-[60%] text-center font-noto-sans-tc text-[#747474] mb-10'  style={{ whiteSpace: 'pre-line' }}>{details.desc}</p>

            </div>
            <div>
                {details.component}
            </div>
            <Link to="/education" className="absolute top-5 right-5 p-3 bg-light-green hover:bg-dark-green text-white rounded-full transition duration-300 ease-in-out px-4 shadow flex items-center justify-center">
                <i className="fi fi-rr-angle-left text-xl"></i>
                <span className="pl-2">Back to Education</span>
            </Link>



        </div>
    );
};

export default QuizPage;

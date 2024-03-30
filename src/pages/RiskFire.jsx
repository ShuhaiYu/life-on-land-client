import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import HoverImage from '../components/HoverImage';
import FireHeatMap from '../components/FireMap';
import fireicon from '../imgs/risk/fireicon.png';
import imgfire1 from '../imgs/risk/fire.jpg';
import imgfire2 from '../imgs/home/bushfire.jpg';
import Vector from '../imgs/Vector 1.png';
import Slider from "react-slick";

import imgfire from '../imgs/home/bushfire.jpg'
import imgcat from '../imgs/risk/cat.png';
import imgnature from '../imgs/risk/nature.png';

const RiskFirePage = () => {
    let [fireData, setFireData] = useState([]);
    let [points, setPoints] = useState([]);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 2000,
        arrows: true,
    };

    const fetchFire = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_SERVER_DOMAIN}/api/risk/firepoints`);
            const newPoints = response.data.map(fire => {
                const [lng, lat] = fire.first_point.replace('POINT(', '').replace(')', '').split(' ');
                return [parseFloat(lat), parseFloat(lng), 1];
            });
            setPoints(newPoints);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchFire();
    }, []);


    return (
        <div>
            <div className="slider-container">
                <Slider {...settings}>
                    <div>
                        <img src={imgfire1} alt="Grasswren" className='w-full h-[600px] ' />
                    </div>
                    <div>
                        <img src={imgfire2} alt="Grasswren" className='w-full h-[600px] ' />
                    </div>

                </Slider>
            </div>
            <div className='flex flex-col items-center justify-center m-20'>
                <p className='text-3xl text-dark-green text-center w-[70%]'>In 2020, there were 58,258 fires across Australia, affecting more than 10 million acres. Nesting near ground-level and having limited flight capability make grasswrens vulnerable to increased wildfire frequency and intensity. Fire management and habitat recovery have become top priorities in the grasswren conservation plan</p>
                <img src={Vector} alt="Vector" className='w-auto h-auto m-10' />
                <img src={fireicon} alt="fire icon" className='self-center w-20 h-20 my-5 mx-1' />

            </div>
            <div className="m-10 p-10 w-[60%] border border-black shadow-lg shadow-black rounded-3xl">
                <FireHeatMap points={points} />
            </div>
            <div className='grid grid-cols-2 gap-12 m-32'>

                {/* <HoverImage imgSrc={imgfire} title='Wildfire' link='/risk/fire' /> */}
                <HoverImage imgSrc={imgcat} title='Predators' link='/risk/predators' />
                <HoverImage imgSrc={imgnature} title='Humans' link='/risk/humans' />
            </div>
        </div>
    );
}

export default RiskFirePage;
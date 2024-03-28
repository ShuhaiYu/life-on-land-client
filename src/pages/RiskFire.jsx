import React from 'react';
import fireicon from '../imgs/risk/fireicon.png';
import imgfire1 from '../imgs/risk/fire.jpg';
import imgfire2 from '../imgs/home/bushfire.jpg';
import Vector from '../imgs/Vector 1.png';
import Slider from "react-slick";

const RiskFirePage = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 2000,
        arrows: true,

    };
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
        </div>
    );
}

export default RiskFirePage;
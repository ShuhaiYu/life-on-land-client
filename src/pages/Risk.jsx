import React from 'react';
import Vector from '../imgs/Vector 1.png'
import VectorWhite from '../imgs/risk/Vector 3.png';
import BirdIcon1 from '../imgs/risk/bird.png'
import BirdIcon2 from '../imgs/grasswren/bird-right.png'
import BirdIcon3 from '../imgs/risk/birds 1.png'
import Slider from "react-slick";
import img1 from '../imgs/risk/Grasswren-website 1.png';
import img2 from '../imgs/home/bellbird-birding-tours-australian-birdwatching-tours-28.jpg'
import img3 from '../imgs/home/grasswren-birdwatching-tour-bellbird-tours-1.jpg'
import img4 from '../imgs/home/ebird2.jpeg'
import imgfire from '../imgs/home/bushfire.jpg'
import imgcat from '../imgs/risk/cat.png';
import imgnature from '../imgs/risk/nature.png';
import imgvolunteer from '../imgs/risk/Volunteer.png';
import imglearnmore from '../imgs/risk/learnmore.png';
import { Link } from 'react-router-dom';
import HoverImage from '../components/HoverImage';



const RiskPage = () => {
    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 2000,
        arrows: true,

    };
    return (
        <div>

            <div className="flex flex-col justify-center items-center m-20">
                <p className="text-dark-green text-3xl text-center w-[70%]">The Mukarrthippi Grasswren is on the verge of extinction, with fewer than 20 individuals remaining in the wild. </p>
                <img src={Vector} alt="Vector" className='w-auto h-auto m-10' />
                <img src={BirdIcon1} alt="bird icon" className='self-center w-20 h-20 my-5 mx-1' />
            </div>
            <div className="slider-container">
                {/* // Slider component */}
                <Slider {...settings}>
                    <div>
                        <img src={img1} alt="Grasswren" className='w-[100%] h-[500px] ' />
                    </div>
                    <div>
                        <img src={img2} alt="Grasswren" className='w-[100%] h-[500px] ' />
                    </div>
                    <div>
                        <img src={img3} alt="Grasswren" className='w-[100%] h-[500px] ' />
                    </div>
                    <div>
                        <img src={img4} alt="Grasswren" className='w-[100%] h-[500px] ' />
                    </div>

                </Slider>
            </div>

            <div className="flex flex-col justify-center items-center m-20">
                <img src={BirdIcon2} alt="bird icon" className='self-center w-20 h-20 my-5 mx-1' />
                <p className="text-dark-green text-3xl text-center w-[70%]">
                    Similarly, the Grey Grasswren population is currently fewer than 200, posing a serious threat to both biodiversity and cultural heritage.
                </p>
                <img src={Vector} alt="Vector" className='w-auto h-auto m-10' />

            </div>

            {/* links to other risk pages */}
            <div className='bg-dark-green pb-20'>
                <p className='text-white text-5xl text-center font-caveat-brush p-20'>What went wrong exactly?</p>
                <div className='grid grid-cols-3 gap-4 mx-10'>
                    <Link to='/risk/fire' className='relative max-w-xl mx-auto group'>
                        <img src={imgfire} alt="Grasswren" className='w-[100%] transition-transform duration-300 ease-in-out group-hover:scale-110' />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h2 className="text-white text-5xl font-bold opacity-80 transition-opacity duration-300 ease-in-out group-hover:opacity-100">Wildfire</h2>
                        </div>
                    </Link>
                    <Link to='/risk/predators' className='relative max-w-xl mx-auto group'>
                        <img src={imgcat} alt="Grasswren" className='w-[100%] transition-transform duration-300 ease-in-out group-hover:scale-110' />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h2 className="text-white text-5xl font-bold opacity-80 transition-opacity duration-300 ease-in-out group-hover:opacity-100">Predators</h2>
                        </div>
                    </Link>
                    <Link to='/risk/humans' className='relative max-w-xl mx-auto group'>
                        <img src={imgnature} alt="Grasswren" className='w-[100%] transition-transform duration-300 ease-in-out group-hover:scale-110' />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h2 className="text-white text-5xl font-bold opacity-80 transition-opacity duration-300 ease-in-out group-hover:opacity-100">Humans</h2>
                        </div>
                    </Link>
                </div>


                <div className='flex flex-col justify-center items-center m-10 pt-20'>
                    <img src={BirdIcon3} alt="bird icon" className='self-center w-16 h-16 ' />

                    <img src={VectorWhite} alt="Vector" className='w-auto h-auto' />
                </div>

                {/* links to other pages */}
                <div className='grid grid-cols-3 gap-12 mx-40'>

                    <HoverImage imgSrc={img4} title='About Grasswren' link='/grasswren' />
                    <HoverImage imgSrc={imgvolunteer} title='Get Involved' link='/involved' />
                    <HoverImage imgSrc={imglearnmore} title='Learn More' link='/education' />
                </div>
            </div>

        </div>
    );
}

export default RiskPage;
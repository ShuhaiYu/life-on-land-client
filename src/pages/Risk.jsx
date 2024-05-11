import React from 'react';
import RiskMap from '../components/RiskMap';
import { Link } from 'react-router-dom';

import Vector from '../imgs/Vector 1.png'
import VectorWhite from '../imgs/risk/Vector 3.png';
import BirdIcon1 from '../imgs/risk/bird.png'
import BirdIcon3 from '../imgs/risk/birds 1.png'
import Slider from "react-slick";
import img1 from '../imgs/risk/Grasswren-website 1.png';
import img2 from '../imgs/home/bellbird-birding-tours-australian-birdwatching-tours-28.jpg'
import img3 from '../imgs/home/grasswren-birdwatching-tour-bellbird-tours-1.jpg'
import img4 from '../imgs/home/ebird2.jpeg'
import imgfire from '../imgs/home/bushfire.jpg'
import imgcat from '../imgs/risk/cat.png';
import imgnature from '../imgs/risk/nature.png';
import topImage from '../imgs/risk/shrubland.png';

import NavCard from '../components/NavCard';
import NavCardImg1 from '../imgs/home/nsw2.jpg';
import NavCardImg2 from '../imgs/home/nsw3.jpg';
import NavCardImg3 from '../imgs/home/getinvolved.jpeg';


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
        <div className='w-full h-auto'>
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
                <img src={BirdIcon1} alt="bird icon" className='self-center w-20 h-20 m-8' />
                <p className="text-dark-green text-3xl text-center w-[70%]">
                    The Mukarrthippi Grasswren is on the verge of extinction, with fewer than 20 individuals remaining in the wild.

                    Similarly, the Grey Grasswren population is currently fewer than 200, posing a serious threat to both biodiversity and cultural heritage.
                </p>


                <img src={Vector} alt="Vector" className='w-auto h-auto m-10' />
            </div>


            <div className='bg-dark-green pb-20'>
                <div className='flex flex-col justify-center items-center '>
                    <h1 className='text-white text-5xl text-center font-caveat-brush p-20 pb-0'>How are these threats affecting the grasswren's habitat?</h1>
                    <p className='text-white text-3xl text-center w-[70%] p-20 pt-10'>Wildfire, predators, and human activities are major threats to the Grasswren population. <br />Click on the green birds to see where Grasswrens were spotted. Select different threats to explore their impact on the map!</p>

                </div>

                <div className='h-[80vh]'>
                    <RiskMap isFireShow={true} isCatShow={true} isFoxShow={true} isHumanShow={true} isButtonShow={true} />

                </div>
                {/* links to other risk pages */}
                <h1 className='text-white text-5xl text-center font-caveat-brush p-20 pb-0'>Explore more details about the risks</h1>
                <p className='text-white text-3xl text-center p-20 pt-10'>There is so much you can do to control the risks and save grasswrens. Let's get started!</p>
                <div className='grid grid-cols-3 gap-4 mx-10'>
                    <Link to='/risk/fire' className='relative max-w-xl mx-auto group hover:z-50'>
                        <img src={imgfire} alt="Grasswren" className='w-[100%] transition-transform duration-300 ease-in-out group-hover:scale-110 ' />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h2 className="text-white text-5xl font-bold opacity-80 transition-opacity duration-300 ease-in-out group-hover:opacity-100">Wildfire</h2>
                        </div>
                    </Link>
                    <Link to='/risk/predators' className='relative max-w-xl mx-auto group hover:z-50'>
                        <img src={imgcat} alt="Grasswren" className='w-[100%] transition-transform duration-300 ease-in-out group-hover:scale-110' />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h2 className="text-white text-5xl font-bold opacity-80 transition-opacity duration-300 ease-in-out group-hover:opacity-100">Predators</h2>
                        </div>
                    </Link>
                    <Link to='/risk/humans' className='relative max-w-xl mx-auto group hover:z-50'>
                        <img src={imgnature} alt="Grasswren" className='w-[100%] transition-transform duration-300 ease-in-out group-hover:scale-110' />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h2 className="text-white text-5xl font-bold opacity-80 transition-opacity duration-300 ease-in-out group-hover:opacity-100">Humans</h2>
                        </div>
                    </Link>
                </div>


                <div className='flex flex-col justify-center items-center pt-20'>
                    {/* <img src={BirdIcon3} alt="bird icon" className='self-center w-16 h-16 ' /> */}

                    <img src={VectorWhite} alt="Vector" className='w-auto h-auto' />
                </div>
                <p className='text-white text-3xl text-center pt-10'>
                    Discover the future threats to our wildlife.<br/> Try our prediction tool to see what risks lie ahead and how you can help.
                </p>
                <div className='grid grid-cols-1 gap-4 my-10'>
                    <Link to='/risk/prediction' className='relative max-w-xl mx-auto group hover:z-50'>
                        <img src="https://media.cntraveler.com/photos/5eb18e42fc043ed5d9779733/16:9/w_4288,h_2412,c_limit/BlackForest-Germany-GettyImages-147180370.jpg" alt="Grasswren" className='w-[100%] transition-transform duration-300 ease-in-out group-hover:scale-110' />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h2 className="text-white text-5xl font-bold opacity-80 transition-opacity duration-300 ease-in-out group-hover:opacity-100">Future</h2>
                        </div>
                    </Link>
                </div>



            </div>
            {/* links to other pages */}
            {/* Three nav cards */}
            <div className='flex flex-col sm:flex-col md:flex-row gap-8 justify-center my-16'>
                <NavCard title='threatened grasswren' img={NavCardImg1} link='/grasswren' />
                <NavCard title='becoming an expert' img={NavCardImg2} link='/education' />
                <NavCard title='get involved' img={NavCardImg3} link='/involved' />
            </div>
        </div>
    );
}

export default RiskPage;
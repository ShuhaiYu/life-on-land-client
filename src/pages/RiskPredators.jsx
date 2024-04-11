import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import HoverImage from '../components/HoverImage';

import imgfire from '../imgs/home/bushfire.jpg'
import imgcat from '../imgs/risk/cat.png';
import imgnature from '../imgs/risk/nature.png';
import imgvector from '../imgs/Vector 1.png';
import imgbirdRight from '../imgs/grasswren/bird-right.png';
import imgbird from '../imgs/bird.png';


const RiskPredators = () => {
    // Slider settings
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
            {/* Img Silder */}
            <div className="slider-container">
                <Slider {...settings}>
                    <div>
                        <img src="https://images.pexels.com/photos/17816256/pexels-photo-17816256/free-photo-of-fox-in-nature.jpeg" alt="Fox in nature" className='w-full h-[600px]' />
                    </div>
                    <div>
                        <img src="https://s3.animalia.bio/animals/photos/full/1.25x1/ever-alert.webp" alt="Ever alert" className='w-full h-[600px]' />
                    </div>
                </Slider>

            </div>

            {/* Landing Content */}
            <div className='flex flex-col items-center justify-center m-20'>
                <p className='text-2xl text-dark-green font-bold text-center w-[70%] m-10'>
                    When we worry about the risk of wildfire causing
                    irreversible damage  to grasswren habitats, there are
                    more heartbreaking truths about their fate toward extinction.

                </p>
                <img src={imgvector} alt="Vector" className='w-auto h-auto m-10' />
                <img src={imgbird} alt="Discover" className='w-16 h-16' />
                <p className='text-2xl text-dark-green font-bold text-center w-[70%] m-10 mb-20'>
                    In reality, one of the biggest challenges for grasswren conservation is
                    protecting the grasswrens against the additional pressure of cat and fox predation.
                    Nesting near ground-level and having limited capability for flight has made them
                    vulnerable to introduced predators like cats and foxes.

                </p>

                {/* Content */}
                <div className='flex flex-row m-20 items-center justify-center'>
                    <img src="https://images.pexels.com/photos/17816256/pexels-photo-17816256/free-photo-of-fox-in-nature.jpeg" alt="Fox in nature" className='w-[300px] h-[300px] rounded-full mx-10' />
                    <div className='text-xl text-dark-green w-[60%]'>
                        <h1 className='text-2xl text-dark-green font-bold pb-2'>Feral Foxes</h1>

                        With their acute sense of smell, hearing, and night vision, Foxes are efficient hunters, capable of preying on small mammals, birds, reptiles, and insects. As grasswrens are ground-dwellers, making nests on the ground makes them particularly vulnerable to predators like foxes.
                        <br />
                        <br />The impact of fox predation on grasswrens is profound. Many species of grasswrens have experienced population declines, with some species being listed as threatened or endangered. The fox's ability to hunt and kill adult birds, chicks, and eggs contributes to these declines, alongside habitat destruction and fragmentation, further exacerbating the situation.

                    </div>

                </div>
                <div className='flex flex-row m-20 items-center justify-center'>
                    <img src="https://i.guim.co.uk/img/media/8e760f479d3b40f74fa495f64728d58c6be054a6/0_0_5000_3333/master/5000.jpg?width=1900&dpr=2&s=none" alt="Fox in nature" className='w-[300px] h-[300px] rounded-full mx-10' />
                    <div className='text-xl text-dark-green w-[60%]'>
                        <h1 className='text-2xl text-dark-green font-bold pb-2'>Feral Cats</h1>
                        In Australia, wild cats, known as feral cats, have established themselves as formidable predators in the natural ecosystem, with significant impacts on native wildlife, including grasswrens.
                        <br />
                        <br />The ground-dwelling habits and nesting behaviours of grasswrens make them particularly susceptible to predation by feral cats. These cats are highly adaptable hunters, capable of surviving in almost all Australian environments, from arid deserts to tropical forests, significantly impacting native species through predation.
                        By hunting adult birds, chicks, and eggs, feral cats contribute directly to the decline of grasswren populations. Some species of grasswrens are now threatened or endangered, and feral cat predation is a significant factor in these conservation statuses.

                    </div>

                </div>

                {/* Ending content */}
                <div className='flex flex-col mx-20 justify-center items-center'>
                    <img src={imgbirdRight} alt="bird icon" className='self-center w-20 h-20 my-5 mx-1' />
                    <p className='text-3xl text-dark-green font-bold text-center w-[70%] m-10'>
                        Your passion is recruited!
                    </p>
                    <p className='text-xl text-dark-green text-center font-bold w-[60%]'>
                        Frequent conducting habitat assessments and
                        creating more habitats for grasswrens will be significantly helpful for
                        grasswren conservation.

                    </p>
                    <img src={imgvector} alt="Vector" className='w-auto h-auto m-10' />
                    <p className='text-xl text-dark-green text-center font-bold w-[70%]'>
                        Or pay more attention to your cute pets roaming freely outdoors every time.<br />
                        <br />
                        To learn more risk about grasswren extinction<br />
                        …

                    </p>
                </div>
            </div>


            <div className='grid grid-cols-2 gap-12 m-32'>

                <HoverImage imgSrc={imgfire} title='Wildfire' link='/risk/fire' />
                {/* <HoverImage imgSrc={imgcat} title='Predators' link='/risk/predators' /> */}
                <HoverImage imgSrc={imgnature} title='Humans' link='/risk/humans' />
            </div>

        </div>
    );
}

export default RiskPredators;


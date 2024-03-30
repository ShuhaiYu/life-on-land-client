import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import HoverImage from '../components/HoverImage';

import imgfire from '../imgs/home/bushfire.jpg'
import imgcat from '../imgs/risk/cat.png';
import imgnature from '../imgs/risk/nature.png';


const RiskPredators = () => {
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
                        <img src="https://images.pexels.com/photos/17816256/pexels-photo-17816256/free-photo-of-fox-in-nature.jpeg" alt="Fox in nature" className='w-full h-[600px]' />
                    </div>
                    <div>
                        <img src="https://s3.animalia.bio/animals/photos/full/1.25x1/ever-alert.webp" alt="Ever alert" className='w-full h-[600px]' />
                    </div>
                </Slider>

            </div>
            <div className='flex flex-col items-center justify-center m-20'>
                <p className='text-3xl text-dark-green text-center w-[70%] m-20'>From the shadows of the night to the broad daylight, the silent footsteps of foxes and feral cats weave a tale of survival and threat in the natural realm, putting the elusive grasswrens in a delicate balance of existence.</p>
                <div className='flex flex-row m-20'>
                    <img src="https://images.pexels.com/photos/17816256/pexels-photo-17816256/free-photo-of-fox-in-nature.jpeg" alt="Fox in nature" className='w-[300px] h-[300px] rounded-full mx-10' />
                    <p className='text-2xl text-dark-green w-[60%]'>
                        With their acute sense of smell, hearing, and night vision, Foxes are efficient hunters, capable of preying on small mammals, birds, reptiles, and insects. As grasswrens are ground-dwellers, making nests on the ground makes them particularly vulnerable to predators like foxes.
                        <br />The impact of fox predation on grasswrens is profound. Many species of grasswrens have experienced population declines, with some species being listed as threatened or endangered. The fox's ability to hunt and kill adult birds, chicks, and eggs contributes to these declines, alongside habitat destruction and fragmentation, further exacerbating the situation.

                    </p>

                </div>
                <div className='flex flex-row m-20'>
                    <img src="https://i.guim.co.uk/img/media/8e760f479d3b40f74fa495f64728d58c6be054a6/0_0_5000_3333/master/5000.jpg?width=1900&dpr=2&s=none" alt="Fox in nature" className='w-[300px] h-[300px] rounded-full mx-10' />
                    <p className='text-2xl text-dark-green w-[60%]'>
                        In Australia, wild cats, known as feral cats, have established themselves as formidable predators in the natural ecosystem, with significant impacts on native wildlife, including grasswrens.
                        <br />The ground-dwelling habits and nesting behaviours of grasswrens make them particularly susceptible to predation by feral cats. These cats are highly adaptable hunters, capable of surviving in almost all Australian environments, from arid deserts to tropical forests, significantly impacting native species through predation.
                        <br />By hunting adult birds, chicks, and eggs, feral cats contribute directly to the decline of grasswren populations. Some species of grasswrens are now threatened or endangered, and feral cat predation is a significant factor in these conservation statuses.

                    </p>

                </div>
                <p className='text-3xl text-dark-green text-center w-[70%] m-20'>The struggle of grasswrens against predators underscores a pressing need for targeted conservation efforts. To protect these vulnerable birds, immediate action is required to manage invasive predators and restore natural habitats. The fate of grasswrens lies in our hands, and their survival is a testament to the effectiveness of our stewardship of the environment.</p>

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


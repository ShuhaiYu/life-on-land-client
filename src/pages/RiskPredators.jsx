import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import Slider from "react-slick";
import HoverImage from '../components/HoverImage';

import imgfire from '../imgs/home/bushfire.jpg'
import imgcat from '../imgs/risk/cat.png';
import imgnature from '../imgs/risk/nature.png';
import imgvector from '../imgs/Vector 1.png';
import imgbirdRight from '../imgs/grasswren/bird-right.png';
import imgbird from '../imgs/bird.png';
import RiskMap from '../components/RiskMap';


const RiskPredators = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(`${import.meta.env.VITE_SERVER_DOMAIN}/api/risk/predatorsdata`);
            setData(processData(result.data));
        };

        fetchData();
    }, []);

    const processData = (rawData) => {
        const counts = {};
        rawData.forEach(({ obs_date, pre_name }) => {
            const year = new Date(obs_date).getFullYear();
            const decade = Math.floor(year / 10) * 10;
            if (!counts[decade]) {
                counts[decade] = {};
            }
            if (!counts[decade][pre_name]) {
                counts[decade][pre_name] = 0;
            }
            counts[decade][pre_name]++;
        });

        return Object.keys(counts).sort().map(decade => ({
            decade,
            ...counts[decade]
        }));
    };

    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 2000,
        arrows: true,
    };

    // Color palette for charts
    const COLORS = [
        '#F4A460', // Sandy Brown
        '#4682B4', // Steel Blue
    ];
    return (
        <>
            {/* Img Silder */}
            <div className="slider-container" key={new Date()}>
                <Slider {...settings}>
                    <div>
                        <img src="https://images.pexels.com/photos/17816256/pexels-photo-17816256/free-photo-of-fox-in-nature.jpeg" alt="Fox in nature" className='w-full h-[600px]' />
                    </div>
                    <div>
                        <img src="https://s3.animalia.bio/animals/photos/full/1.25x1/ever-alert.webp" alt="Ever alert" className='w-full h-[600px]' />
                    </div>
                </Slider>

            </div>

            <div className='flex flex-col items-center w-full h-auto'>

                {/* Landing Content */}
                <div className='flex flex-col items-center justify-center m-20'>
                    <p className='text-dark-green text-3xl text-center w-[70%]'>
                        When we worry about the risk of wildfire causing irreversible damage to grasswren habitats, there are more heartbreaking truths about their fate toward extinction.
                        <br />In Australia, the most significant driver of mammal extinctions has been predation by feral cats and foxes.

                    </p>
                    <img src={imgvector} alt="Vector" className='w-auto h-auto m-10' />

                </div>

                {/* Chart */}
                <div className='flex'>
                    <ResponsiveContainer width="100%" height={500}>
                        <BarChart
                            data={data}
                            margin={{
                                top: 20, right: 30, left: 0, bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="decade" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            {['fox', 'cat'].map((predator, idx) => (
                                <Bar key={idx} dataKey={predator} fill={COLORS[idx % COLORS.length]} />
                            ))}
                        </BarChart>
                    </ResponsiveContainer>
                    <div className='flex flex-col items-center justify-center'>
                        <img src={imgbird} alt="Discover" className='w-16 h-16' />
                        <p className='text-2xl text-dark-green font-bold text-center w-[70%] m-10 mb-20'>
                            In reality, one of the biggest challenges for grasswren conservation is
                            protecting the grasswrens against the additional pressure of cat and fox predation.
                            Nesting near ground-level and having limited capability for flight has made them
                            vulnerable to introduced predators like cats and foxes.

                        </p>
                    </div>
                </div>
                <div className='w-full bg-dark-green h-auto py-10 px-16 mb-10'>
                    <p className='text-2xl text-white text-center'>
                        Did you know there are almost
                    </p>
                    <p className='text-4xl m-10 text-white text-center'>
                        316,000,000
                    </p>
                    <p className='text-2xl text-white text-center'>
                        number of birds killed by feral cats in Australia each year
                    </p>
                </div>

                {/* Map */}
                <div className="m-10 p-4 w-[60%] h-[60vh] border border-black shadow-lg shadow-black rounded-3xl">
                    <RiskMap isCatShow={true} isFoxShow={true} />
                </div>


                {/* Content */}
                <div className='flex flex-row m-20 items-center justify-center'>
                    <img src="https://images.pexels.com/photos/17816256/pexels-photo-17816256/free-photo-of-fox-in-nature.jpeg" alt="Fox in nature" className='w-[300px] h-[300px] rounded-full mx-10' />
                    <div className='text-xl text-dark-green w-[60%]'>
                        <h1 className='text-3xl text-dark-green font-bold pb-2'>Feral Foxes</h1>

                        With their acute sense of smell, hearing, and night vision, Foxes are efficient hunters, capable of preying on small mammals, birds, reptiles, and insects. As grasswrens are ground-dwellers, making nests on the ground makes them particularly vulnerable to predators like foxes.
                        <br />
                        <br />The impact of fox predation on grasswrens is profound. Many species of grasswrens have experienced population declines, with some species being listed as threatened or endangered. The fox's ability to hunt and kill adult birds, chicks, and eggs contributes to these declines, alongside habitat destruction and fragmentation, further exacerbating the situation.

                    </div>

                </div>
                <div className='flex flex-row m-20 items-center justify-center'>
                    <img src="https://i.guim.co.uk/img/media/8e760f479d3b40f74fa495f64728d58c6be054a6/0_0_5000_3333/master/5000.jpg?width=1900&dpr=2&s=none" alt="Fox in nature" className='w-[300px] h-[300px] rounded-full mx-10' />
                    <div className='text-xl text-dark-green w-[60%]'>
                        <h1 className='text-3xl text-dark-green font-bold pb-2'>Feral Cats</h1>
                        In Australia, wild cats, known as feral cats, have established themselves as formidable predators in the natural ecosystem, with significant impacts on native wildlife, including grasswrens.
                        <br />
                        <br />The ground-dwelling habits and nesting behaviours of grasswrens make them particularly susceptible to predation by feral cats. These cats are highly adaptable hunters, capable of surviving in almost all Australian environments, from arid deserts to tropical forests, significantly impacting native species through predation.
                        By hunting adult birds, chicks, and eggs, feral cats contribute directly to the decline of grasswren populations. Some species of grasswrens are now threatened or endangered, and feral cat predation is a significant factor in these conservation statuses.

                    </div>

                </div>

                {/* Ending content */}
                <div className='flex flex-col mx-20 justify-center items-center'>
                    <img src={imgbirdRight} alt="bird icon" className='self-center w-20 h-20 my-5 mx-1' />
                    <p className='text-4xl text-dark-green font-bold text-center w-[70%] m-10'>
                        Your passion is recruited!
                    </p>
                    <p className='text-xl text-dark-green text-center font-bold w-[60%]'>
                        Frequent habitat assessments and the creation of additional habitats for grasswrens will significantly contribute to grasswren conservation.
                        <br /><br />
                        To prevent further extinctions of grasswrens, it is imperative to include a network of large fenced areas free of feral predators in any conservation strategy. Some local organizations oversee the management of more cat- and fox-free land, covering five of the six largest fenced areas.
                        <br /><br />
                        Alternatively, paying more attention to your adorable pets as they roam freely outdoors could make a difference.

                    </p>
                    <img src={imgvector} alt="Vector" className='w-auto h-auto m-10 mb-20' />
                    <p className='text-xl text-dark-green text-center font-bold w-[70%]'>
                        Explore other risk about grasswren extinction

                    </p>
                </div>
                <div className='grid grid-cols-2 gap-12 m-32 mt-16'>

                    <HoverImage imgSrc={imgfire} title='Wildfire' link='/risk/fire' />
                    {/* <HoverImage imgSrc={imgcat} title='Predators' link='/risk/predators' /> */}
                    <HoverImage imgSrc={imgnature} title='Humans' link='/risk/humans' />
                </div>

            </div>
        </>


    );
}

export default RiskPredators;


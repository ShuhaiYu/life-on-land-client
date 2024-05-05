import React, { useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { useState } from 'react';
import axios from 'axios';
import HoverImage from '../components/HoverImage';
import RiskMap from '../components/RiskMap';
import fireicon from '../imgs/risk/fireicon.png';
import imgfire1 from '../imgs/risk/fire.jpg';
import imgfire2 from '../imgs/home/bushfire.jpg';
import Vector from '../imgs/Vector 1.png';
import Slider from "react-slick";

import imgfire from '../imgs/home/bushfire.jpg'
import imgcat from '../imgs/risk/cat.png';
import imgnature from '../imgs/risk/nature.png';
import imgbirdRight from '../imgs/grasswren/bird-right.png';
import imgvector from '../imgs/Vector 1.png';

const RiskFirePage = () => {
    const [fireData, setFireData] = useState([]);
    const [selectedYear, setSelectedYear] = useState(2023);
    const [processedData, setProcessedData] = useState({ fireTypes: [], stateDistribution: [], fireDates: [] });

    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 2000,
        arrows: true,
    };

    // useEffect hook to fetch fire data
    useEffect(() => {
        const fetchFireData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_SERVER_DOMAIN}/api/risk/firedata`);
                setFireData(response.data);
                processData(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchFireData();
    }, []);

    // useEffect hook to process fire data
    useEffect(() => {
        processData(fireData);
    }, [fireData, selectedYear]);

    const processData = (data) => {
        // Helper function to initialize months array
        const initializeMonths = (year) => {
            return Array.from({ length: 12 }, (_, index) => ({
                date: `${year}-${index + 1}`, // Format: "Year-Month"
                count: 0
            }));
        };

        const fireYear = selectedYear;
        const months = initializeMonths(fireYear);
        const monthIndexMap = months.reduce((acc, month, index) => {
            acc[month.date] = index;
            return acc;
        }, {});

        // Aggregate data based on the selected year and update the counts for each month
        data.forEach(fire => {
            const fireDate = new Date(fire.fire_date);
            const fireYear = fireDate.getFullYear();
            const fireMonth = fireDate.getMonth() + 1; // JavaScript months are 0-indexed, hence +1
            const dateString = `${fireYear}-${fireMonth}`;

            if (fireYear === selectedYear && monthIndexMap.hasOwnProperty(dateString)) {
                months[monthIndexMap[dateString]].count += 1;
            }
        });

        // Aggregate data for fire types and states
        const fireTypeCounts = data.reduce((acc, fire) => {
            if (new Date(fire.fire_date).getFullYear() === selectedYear) {
                acc[fire.fire_type] = (acc[fire.fire_type] || 0) + 1;
            }
            return acc;
        }, {});

        const stateCounts = data.reduce((acc, fire) => {
            if (new Date(fire.fire_date).getFullYear() === selectedYear) {
                acc[fire.state] = (acc[fire.state] || 0) + 1;
            }
            return acc;
        }, {});

        // Update state with the processed data
        setProcessedData({
            fireTypes: Object.entries(fireTypeCounts).map(([name, value]) => ({ name, value })),
            stateDistribution: Object.entries(stateCounts).map(([name, value]) => ({ name, value })),
            fireDates: months
        });
    };


    const initializeMonths = (year) => {
        return Array.from({ length: 12 }, (_, index) => ({
            date: `${year}-${index + 1}`, // Format: "Year-Month"
            count: 0
        }));
    };


    // Color palette for charts
    const COLORS = [
        '#F4A460', // Sandy Brown
        '#4682B4', // Steel Blue
        '#9ACD32', // Yellow Green
        '#D2B48C', // Tan
        '#87CEFA', // Light Sky Blue
        '#FFA07A', // Light Salmon
        '#BA55D3', // Medium Orchid
        '#F08080'  // Light Coral
    ];

    return (
        <div >
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
                <p className='text-3xl text-dark-green text-center w-[70%]'>
                    Did you know in 2020, there were 58,258 fires across Australia, affecting more than 10 million acres. Nesting near ground-level and having limited flight capability make grasswrens vulnerable to increased wildfire frequency and intensity.
                </p>
                <img src={Vector} alt="Vector" className='w-auto h-auto m-10' />
                <img src={fireicon} alt="fire icon" className='self-center w-20 h-20 my-5 mx-1' />

            </div>
            <div className='flex flex-row items-center'>
                <div className="m-5 p-5 w-[60%] h-[70vh] border shadow-lg rounded-3xl">
                    <RiskMap isFireShow={true} isButtonShow={false} />
                </div>
                <p className='text-2xl text-dark-green w-[40%] m-10'>
                    Check out where the wildfires happen most frequently by interacting with the map!<br />
                    <br />
                    The darker the colour is, the higher the density of wildfires happening in that region.
                </p>
            </div>




            {/* Data Visualization   */}

            {/* Pie Chart with Title */}
            <div className='flex justify-center w-full bg-dark-green h-auto py-10 px-16 mb-10'>
                <p className='text-2xl text-white text-center w-2/3'>
                    Bushfires have become a major cause of wildfires in Australia. During a bushfire, flame temperatures can reach up to 1100 degrees C.
                    The damaging fire patterns have resulted in a dramatic decline in the grasswren population. <br />
                    To explore which state has the most wildfires in which month, try the timeline bar below!

                </p>
            </div>
            <div className="flex justify-center items-center">
                <div className="w-1/2">
                    <div className="text-center font-bold text-xl mb-4">
                        Annual Total Number of Wildfires in Different States in Australia
                    </div>
                    <ResponsiveContainer width="100%" height={500}>
                        <PieChart>
                            <Pie data={processedData.stateDistribution} cx="50%" cy="50%" outerRadius={160} fill="#8884d8" dataKey="value" label>
                                {processedData.stateDistribution.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip formatter={(value) => `${value} fires`} />
                            <Legend layout="vertical" align="right" verticalAlign="middle" />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Slider for selecting year */}
            <div className='flex items-center justify-center my-10 text-xl'>
                <input
                    type="range"
                    min="2013"
                    max="2023"
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(parseInt(e.target.value))}
                    className='w-1/2 h-2 rounded-lg cursor-pointer'
                    style={{
                        // Custom styles for the thumb and track
                        '--tw-bg-opacity': '1', // Ensure the background opacity is full for colors
                        backgroundImage: `linear-gradient(90deg, var(--tw-bg-opacity) 0%, var(--tw-bg-opacity) 100%)`
                    }}
                />
                <div className='text-2xl ml-4 '>{selectedYear}</div>
            </div>


            {/* Line chart */}
            <div className='flex justify-center items-center mb-10'>
                <div className='w-2/3'>
                    <div className="text-center font-bold text-xl mb-4">
                        Total Number of Wildfires Occurred in Australia Monthly
                    </div>
                    <ResponsiveContainer width="100%" height={400}>
                        <LineChart data={processedData.fireDates} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" tickFormatter={(tickItem) => {
                                const date = new Date(tickItem);
                                return date.toLocaleString('default', { month: 'short' });
                            }} />

                            <YAxis />
                            <Tooltip />
                            <Line type="monotone" dataKey="count" stroke="#FA8700" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

            </div>
            <div className='flex items-center justify-center w-full bg-dark-green h-auto py-10 px-16 mb-10'>
                <p className='text-2xl text-white text-center w-2/3'>
                    The greatest danger is between late spring and early autumn when fuels have dried after the winter rains. The worst conditions occur when deep low-pressure systems near Tasmania bring strong, hot and dry, westerly winds to the coastal districts. Intense high-pressure systems over South Australia producing strong southeast to northeast winds increase the risk of bushfires.                    </p>
            </div>


            {/* Ending content */}
            <div className='flex flex-col mx-20 mt-20 justify-center items-center'>
                <img src={imgbirdRight} alt="bird icon" className='self-center w-20 h-20 my-5 mx-1' />
                <p className='text-4xl text-dark-green font-bold text-center w-[70%] m-10'>
                    Your passion is recruited!
                </p>
                <p className='text-xl text-dark-green text-center font-bold w-[60%]'>
                    Crafting effective fire management strategies is crucial for wildfire risk reduction in vulnerable areas, supporting the recovery and conservation of the grasswren population.
                    <br />
                    <br />



                    Commencing prescribed burns during suitable conditions at the conclusion of the wet season, typically between March and May. This practice involves various techniques, including matches, drip torches, and aerial incendiaries, to ignite fires based on a strategic annual burn plan. The aim of prescribed burning during the early dry season is twofold: to mitigate the spread of more severe wildfires later in the year and to create fire breaks while reducing the fuel load across the landscape.

                </p>
                <img src={imgvector} alt="Vector" className='w-auto h-auto m-10 mb-20' />
                <p className='text-xl text-dark-green text-center font-bold w-[60%]'>
                    Explore other risk about grasswren extinction

                </p>
            </div>
            <div className='flex flex-col items-center w-full h-auto'>
                <div className='grid grid-cols-2 gap-12 m-32 mt-16'>

                    {/* <HoverImage imgSrc={imgfire} title='Wildfire' link='/risk/fire' /> */}
                    <HoverImage imgSrc={imgcat} title='Predators' link='/risk/predators' />
                    <HoverImage imgSrc={imgnature} title='Humans' link='/risk/humans' />
                </div>
            </div>
        </div >
    );
}

export default RiskFirePage;
import React, { useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
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

    let [fireDates, setFireDates] = useState([]);

    let [points, setPoints] = useState([]);

    const [timeRange, setTimeRange] = useState('2021-2022');
    const [timeUnit, setTimeUnit] = useState('month');
    const [processedData, setProcessedData] = useState({
        fireTypes: [],
        stateDistribution: [],
        fireDates: [],
    });

    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 2000,
        arrows: true,
    };

    // Function to fetch fire points
    const fetchFirePoints = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_SERVER_DOMAIN}/api/risk/firepoints`);
            const newPoints = response.data.map(fire => {
                // Directly access the x and y properties of first_point
                const { x: lng, y: lat } = fire.first_point;
                return [lat, lng, 1]; // Note that the heatmap expects [latitude, longitude, intensity]
            });
            setPoints(newPoints);
        } catch (error) {
            console.error(error);
        }
    }

    // Function to fetch fire data
    const fetchFireData = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_SERVER_DOMAIN}/api/risk/firedata`);
            setFireData(response.data);
            processData(response.data); // Initial processing for default filter values
        } catch (error) {
            console.error(error);
        }
    }

    // useEffect hook to fetch fire data
    useEffect(() => {
        fetchFirePoints();
        fetchFireData();
    }, []);

    // useEffect hook to process fire data
    useEffect(() => {
        processData(fireData);
    }, [fireData, timeRange, timeUnit]);

    const processData = (data) => {
        // Filter data based on the selected time range
        const filteredData = data.filter(fire => {
            const fireDate = new Date(fire.fire_date);
            const fireYear = fireDate.getFullYear();
            const fireMonth = fireDate.getMonth() + 1; // JavaScript months are 0-indexed

            if (timeRange === "2021-2022") {
                return (
                    (fireYear === 2021 && fireMonth >= 10) ||
                    (fireYear === 2022 && fireMonth <= 10)
                );
            } else if (timeRange === "2022-2023") {
                return (
                    (fireYear === 2022 && fireMonth >= 10) ||
                    (fireYear === 2023 && fireMonth <= 10)
                );
            }
        });


        // Aggregate data based on the selected time unit
        const fireDateCounts = aggregateDataByTimeUnit(filteredData, timeUnit);
        const fireTypeCounts = aggregateDataByProperty(filteredData, 'fire_type');
        const stateCounts = aggregateDataByProperty(filteredData, 'state');

        const sortedFireDates = Object.entries(fireDateCounts).map(([date, count]) => ({ date, count }));
        sortedFireDates.sort((a, b) => new Date(a.date) - new Date(b.date));
        setFireDates(sortedFireDates);

        // Set the processed data
        setProcessedData({
            fireTypes: Object.entries(fireTypeCounts).map(([name, value]) => ({ name, value })),
            stateDistribution: Object.entries(stateCounts).map(([name, value]) => ({ name, value })),
            fireDates: Object.entries(fireDateCounts).map(([date, count]) => ({ date, count })),
        });

    };

    // Helper function to aggregate data by a specific property
    const aggregateDataByProperty = (data, property) => {
        return data.reduce((acc, item) => {
            acc[item[property]] = (acc[item[property]] || 0) + 1;
            return acc;
        }, {});
    };

    // Helper function to aggregate data by time unit
    const aggregateDataByTimeUnit = (data, unit) => {
        return data.reduce((acc, item) => {
            const date = new Date(item.fire_date);
            let groupKey;
            if (unit === 'month') {
                const monthName = date.toLocaleString('default', { month: 'short' });
                const year = date.getFullYear();
                groupKey = `${monthName} ${year}`;
            } else {
                // Handle week or other units differently if needed
                groupKey = `${date.getFullYear()}-W${getWeekOfYear(date)}`;
            }
            acc[groupKey] = (acc[groupKey] || 0) + 1;
            return acc;
        }, {});
    };

    // Helper function to get week of the year
    function getWeekOfYear(date) {
        const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
        const pastDaysOfYear = (date - firstDayOfYear) / 86400000;
        return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
    }

    // Color palette for charts
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
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

            {/* Time range selector */}
            <div className='flex items-center justify-center mt-20 text-xl'>
                <select className='bg-light-green rounded-full text-white p-3' value={timeRange} onChange={(e) => setTimeRange(e.target.value)}>
                    <option value="2021-2022">2021-2022</option>
                    <option value="2022-2023">2022-2023</option>
                </select>
            </div>

            {/* Two pie charts   */}
            <div className="charts-container">
                <div className='grid grid-cols-2'>
                    <ResponsiveContainer width="100%" height={400}>
                        <PieChart>
                            <Pie
                                dataKey="value"

                                data={processedData.fireTypes}
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                fill="#8884d8"
                                label
                            >
                                {
                                    processedData.fireTypes.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                                }
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                    <ResponsiveContainer width="100%" height={400}>
                        <PieChart width={400} height={400}>
                            <Pie
                                data={processedData.stateDistribution}
                                cx="50%"
                                cy="50%"

                                label
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {processedData.stateDistribution.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip formatter={(value) => `${value} fires`} />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                {/* Time unit selector */}
                <div className='flex items-center justify-center mt-10 mb-5 text-xl'>

                    <select className='bg-light-green rounded-full text-white p-3' value={timeUnit} onChange={(e) => setTimeUnit(e.target.value)}>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                    </select>
                </div>

                {/* Line chart */}
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={processedData.fireDates} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />

                        <Line type="monotone" dataKey="count" stroke="#FA8700" />
                    </LineChart>
                </ResponsiveContainer>
            </div>


            <div className='grid grid-cols-2 gap-12 m-32'>

                {/* <HoverImage imgSrc={imgfire} title='Wildfire' link='/risk/fire' /> */}
                <HoverImage imgSrc={imgcat} title='Predators' link='/risk/predators' />
                <HoverImage imgSrc={imgnature} title='Humans' link='/risk/humans' />
            </div>
        </div >
    );
}

export default RiskFirePage;
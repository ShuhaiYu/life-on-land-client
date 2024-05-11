import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Slider from 'react-slick';
import topImage from '../imgs/risk/shrubland.png';
import ImgRiskM from '../imgs/risk/risk-moderate.png';
import ImgRiskH from '../imgs/risk/risk-high.png';
import ImgRiskC from '../imgs/risk/risk-catastrophic.png';
import ImgRiskE from '../imgs/risk/risk-extreme.png';
import ImgRiskNone from '../imgs/risk/risk-none.jpg';


const RiskPrediction = () => {
    const [postcode, setPostcode] = useState('');
    const [riskPrediction, setRiskPrediction] = useState(null);
    const fetchRiskPrediction = async () => {
        const currentDate = new Date().toISOString().slice(0, 10);
        // Fetch risk prediction data
        axios.get(import.meta.env.VITE_SERVER_DOMAIN + '/api/risk/estimate', {
            params: {
                postcode: postcode,
                currentDate: currentDate
            }
        }
        )
            .then(response => {
                setRiskPrediction(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const riskLevel = riskPrediction ? riskPrediction.riskLevel : '';

    // Get the current date
    const currentDate = new Date();
    // Get the next month date
    const nextMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
    // Get the next month and year
    const nextMonth = nextMonthDate.toLocaleString('default', { month: 'long' });
    const year = nextMonthDate.getFullYear();

    const getFireRiskImage = (riskLevel) => {
        switch (riskLevel) {
            case 'Moderate':
                return ImgRiskM;
            case 'High':
                return ImgRiskH;
            case 'Catastrophic':
                return ImgRiskC;
            case 'Extreme':
                return ImgRiskE;
            default:
                return ImgRiskNone;  // Default image if riskLevel is undefined or does not match any case
        }
    };

    const fireRiskImage = getFireRiskImage(riskLevel);

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
        <div className='bg-grey h-auto relative'>
            <Link to="/risk" className="absolute z-50 top-5 right-5 p-3 bg-light-green hover:bg-dark-green text-white rounded-full transition duration-300 ease-in-out px-4 shadow flex items-center justify-center">
                <i className="fi fi-rr-angle-left text-xl"></i>
                <span className="pl-2">Back to What Went Wrong</span>
            </Link>
            {/* Img Silder */}
            <div className="slider-container">
                <Slider {...settings}>
                    <div>
                        <img src="https://media.cntraveler.com/photos/5eb18e42fc043ed5d9779733/16:9/w_4288,h_2412,c_limit/BlackForest-Germany-GettyImages-147180370.jpg" alt="Ever alert" className='w-full h-[600px]' />
                    </div>
                    <div>
                        <img src={topImage} alt="Fox in nature" className='w-full h-[600px]' />
                    </div>
                </Slider>

            </div>
            {/* Landing Content */}
            <div className='flex flex-col items-center justify-center mt-10'>
                <p className='text-dark-green text-3xl text-center m-10'>
                    To know the wildfire alarm in your area in the next month, <br />
                    input your postcode and our model
                    will tell you the risk level.

                </p>
            </div>

            {/* Input postcode */}
            <div className="container mx-auto mb-20">
                <div className='flex items-center justify-center gap-10'>
                    <div className="flex flex-col justify-center items-center">
                        <input type="text" id="postcode" placeholder='Enter Australia Postcode' className="border border-gray-300 rounded-md p-2" value={postcode} onChange={(e) => setPostcode(e.target.value)} />

                    </div>
                    <button className='btn-light' onClick={fetchRiskPrediction} >Check Now</button>
                </div>

            </div>

            <div className='flex flex-col justify-center items-center m-10'>
                <div className='w-2/3 bg-white rounded-3xl shadow-2xl p-10 m-auto mb-10'>
                    <div className="container mx-auto ">
                        <h1 className="text-center text-2xl text-dark-green font-bold mb-4">
                            Wildfire in {riskPrediction?.city || "Your Area"} {riskPrediction?.state || ""} in {nextMonth} {year}
                        </h1>
                    </div>
                    <div className="relative flex justify-center items-center w-full h-auto">
                        <img src={fireRiskImage || ImgRiskNone} alt="Fire Risk" className="w-1/2 h-auto" />
                    </div>
                    <div className="container mx-auto mt-10">
                        <h1 className="text-center text-2xl text-dark-green font-bold mb-4">
                            Risk Level: {riskLevel || "Not available"}
                        </h1>

                        <p className="text-center text-2xl text-dark-green font-bold mb-4">
                            {riskLevel === 'Catastrophic' ? 'Grasswrens are in extreme danger this month, immediate action is required' :
                                riskLevel === 'Extreme' ? 'High danger to Grasswrens, ensure safety measures are in place' :
                                    riskLevel === 'High' ? 'Considerable risk to Grasswrens, be vigilant' :
                                        riskLevel === 'Moderate' ? 'Grasswrens will be safe in the next month' :
                                            'Please enter your postcode to check the impact on nearby grasswrens'}
                        </p>

                    </div>
                    {
                        riskLevel && (
                            <div className="text-center mt-4 p-4 border rounded-lg shadow-lg bg-gradient-to-r from-gray-50 to-gray-200">
                                <p className="text-xl font-bold text-gray-800 mb-3">What should I do?</p>
                                {riskLevel === 'Moderate' && (
                                    <div className="space-y-3 p-3 bg-white rounded-md shadow">
                                        <div className="flex items-center justify-center text-light-green">
                                            <i className="fi fi-rr-exclamation"></i>
                                            <span className="ml-2 font-medium">Moderate Risk</span>
                                        </div>
                                        <p className="text-gray-600">Stay up to date and be ready to act if there is a fire.<br /> Avoid driving vehicles and motorbikes through dry grass. <br />The risk of starting a fire from the hot exhaust system is high. <br />Even pulling over into grass at the side of the road could start a serious grassfire without you even being aware.</p>
                                        <a href="https://knowledge.aidr.org.au/resources/bushfire" className="text-blue-600 hover:text-blue-800 hover:underline" target="_blank" rel="noopener noreferrer">Check your state's fire management plan</a>
                                        <p className="text-sm italic">Note: This is an approximation. For more guidance, visit the <a href="https://www.cfa.vic.gov.au/home/local-information" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">CFA website</a>.</p>
                                    </div>
                                )}
                                {riskLevel === 'High' && (
                                    <div className="space-y-3 p-3 bg-white rounded-md shadow">
                                        <div className="flex items-center text-yellow">
                                            <i className="fi fi-rr-exclamation"></i>
                                            <span className="ml-2 font-medium">High Risk</span>
                                        </div>
                                        <p className="text-gray-600">There's a heightened risk. Be alert for fires in your area. <br />Decide what you will do if a fire starts. <br />If a fire starts, your life and property may be at risk. <br />The safest option is to avoid bushfire risk areas.</p>
                                        <a href="https://knowledge.aidr.org.au/resources/bushfire" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">Check your state's fire management plan</a>
                                        <p className="text-sm italic">Note: This is an approximation. For more guidance, visit the <a href="https://www.cfa.vic.gov.au/home/local-information" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">CFA website</a>.</p>
                                    </div>
                                )}
                                {riskLevel === 'Extreme' && (
                                    <div className="space-y-3 p-3 bg-white rounded-md shadow">
                                        <div className="flex items-center text-orange">
                                            <i className="fi fi-rr-exclamation"></i>
                                            <span className="ml-2 font-medium">Extreme Risk</span>
                                        </div>
                                        <p className="text-gray-600">Check your bushfire plan and that your property is fire ready. If a fire starts, take immediate action. <br />If you and your property are not prepared to the highest level, go to a safer location well before the fire impacts.
                                            <br />Reconsider travel through bushfire risk areas. Leaving bushfire risk areas early in the day is your safest option.</p>
                                        <a href="https://knowledge.aidr.org.au/resources/bushfire" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">Check your state's fire management plan</a>
                                        <p className="text-sm italic">Note: This is an approximation. For more guidance, visit the <a href="https://www.cfa.vic.gov.au/home/local-information" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">CFA website</a>.</p>
                                    </div>
                                )}
                                {riskLevel === 'Catastrophic' && (
                                    <div className="space-y-3 p-3 bg-white rounded-md shadow">
                                        <div className="flex items-center text-error">
                                            <i className="fi fi-rr-exclamation"></i>
                                            <span className="ml-2 font-medium">Catastrophic Risk</span>
                                        </div>
                                        <p className="text-gray-600">For your survival, leave bushfire risk areas. <br />Your life may depend on the decisions you make, even before there is a fire. <br />For your survival, do not be in bushfire risk areas.
                                            <br />Stay safe by going to a safer location early in the morning or the night before. <br />Homes cannot withstand fires in these conditions. You may not be able to leave and help may not be available.</p>
                                        <p className="text-sm italic">Note: This is an approximation. For more detailed guidance, visit the <a href="https://www.cfa.vic.gov.au/home/local-information" className="text-red-700 hover:text-red-900" target="_blank" rel="noopener noreferrer">CFA website</a>.</p>
                                    </div>
                                )}
                                <p className="text-center text-gray-400 font-bold mt-3">
                                    The risk level is predicted based on the historical data and the current weather conditions.
                                </p>
                            </div>

                        )
                    }
                </div>



                <button className='btn-dark my-8' onClick={() => setRiskPrediction(null)}>Check Another Location</button>
            </div>


        </div>

    );
}

export default RiskPrediction;
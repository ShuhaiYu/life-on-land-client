import React, { useState } from 'react';
import axios from 'axios';

import Slider from 'react-slick';
import topImage from '../imgs/risk/shrubland.png';
import ImgRiskM from '../imgs/risk/risk-moderate.png';
import ImgRiskH from '../imgs/risk/risk-high.png';
import ImgRiskC from '../imgs/risk/risk-catastrophic.png';
import ImgRiskE from '../imgs/risk/risk-extreme.png';


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

    const riskLevel = riskPrediction ? riskPrediction.riskLevel : 'Very Low';

    // Get the current date
    const currentDate = new Date();
    // Get the next month date
    const nextMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
    // Get the next month and year
    const nextMonth = nextMonthDate.toLocaleString('default', { month: 'long' });
    const year = nextMonthDate.getFullYear();

    const fireRiskImage = riskLevel === 'Moderate' ? ImgRiskM : riskLevel === 'High' ? ImgRiskH : riskLevel === 'Catastrophic' ? ImgRiskC : ImgRiskE;


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
        <div className='bg-grey'>
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
                    input your location and our predictive model <br />
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

            {riskPrediction && riskPrediction.city && riskPrediction.state &&
                <div className='flex flex-col justify-center items-center m-10'>
                    <div className='w-2/3 bg-white rounded-3xl shadow-2xl p-10 m-auto mb-10'>
                        <div className="container mx-auto ">
                            <h1 className="text-center text-2xl text-dark-green font-bold mb-4">
                                Wildfire in {riskPrediction.city} {riskPrediction.state} in {nextMonth} {year}
                            </h1>
                        </div>
                        <div className="relative flex justify-center items-center w-full h-auto">
                            <img src={fireRiskImage} alt="Fire Risk" className="w-1/2 h-auto" />

                        </div>
                        <div className="container mx-auto mt-10">
                            <h1 className="text-center text-2xl text-dark-green font-bold mb-4">
                                Risk Level: {riskLevel}
                            </h1>
                            <p className="text-center text-dark-green font-bold mb-4">
                                The risk level is predicted based on the historical data and the current weather conditions.
                            </p>
                            <h1 className="text-center text-2xl text-dark-green font-bold mb-4">
                                Grasswrens will be safe in the next month.
                            </h1>
                        </div>
                        
                    </div>
                    <button className='btn-dark my-8' onClick={() => setRiskPrediction(null)}>Check Another Location</button>
                </div>
                // <RiskIndicator riskLevel={riskLevel} city={riskPrediction.city} state={riskPrediction.state} />
            }

        </div>

    );
}

export default RiskPrediction;
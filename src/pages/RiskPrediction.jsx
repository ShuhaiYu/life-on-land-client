import React, { useState } from 'react';
import RiskIndicator from '../components/RiskIndicator';
import axios from 'axios';


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

    return (
        <div>
            <div className="bg-dark-green p-20">
                <h1 className="text-5xl text-white text-center font-caveat-brush mb-10">Risk Prediction</h1>
            </div>
            {/* Input postcode */}
            <div className="container mx-auto my-10">
                <div className="flex flex-col justify-center items-center">
                    {/* <label htmlFor="postcode" className="text-lg font-bold mr-4">Enter your postcode:</label> */}
                    <input type="text" id="postcode" placeholder='Enter Australia Postcode' className="border border-gray-300 rounded-md p-2 my-10" value={postcode} onChange={(e) => setPostcode(e.target.value)} />
                    <button className='btn-dark' onClick={fetchRiskPrediction} >Check Now</button>
                </div>
            </div>

            {riskPrediction &&
                <div className="container mx-auto">

                    <h1 className="text-center text-2xl font-bold mb-4">Risk Level: {riskPrediction.riskLevel}</h1>
                    {/* <RiskIndicator riskLevel={riskLevel} /> */}

                </div>
            }

        </div>

    );
}

export default RiskPrediction;
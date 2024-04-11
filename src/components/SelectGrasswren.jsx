import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import CardGrasswren from './CardGrasswren';
import VectorBgYellow from '../imgs/grasswren/VectorBg-yellow.svg';
import VectorBgOrange from '../imgs/grasswren/VectorBg-orange.svg';
import VectorBgRed from '../imgs/grasswren/VectorBg-red.svg';

// SelectGrasswren component
const SelectGrasswren = () => {
    const [grasswrenList, setGrasswrenList] = useState([]);
    const [selectedRisk, setSelectedRisk] = useState(null);

    // Fetch grasswren list
    const fecthGrasswrenList = async () => {
        axios.get(import.meta.env.VITE_SERVER_DOMAIN + '/api/grasswren/list')
            .then(response => {
                setGrasswrenList(response.data);
                console.log(grasswrenList);
            })
            .catch(error => {
                console.log(error);
            });
    }

    // useEffect hook to fetch grasswren list
    useEffect(() => {
        fecthGrasswrenList();
    }, []);

    // Function to handle risk filter
    const handleRiskFilter = (risk) => {
        setSelectedRisk(prevRisk => prevRisk === risk ? null : risk);
    };


    return (
        <div className='bg-dark-green p-20 '>
            <h1 className='text-5xl text-white text-center font-caveat-brush mb-10'>Meet Our Endangered Grasswrens</h1>

            {/* Filter buttons */}
            <div className='flex flex-row gap-20 justify-center mb-16'>
                <button onClick={() => handleRiskFilter('Critically Endangered')} className="focus:outline-none transition duration-300 ease-in-out transform hover:scale-110 active:scale-95">
                    <img src={VectorBgRed} alt="Critically Endangered" className='w-auto h-auto' />
                </button>
                <button onClick={() => handleRiskFilter('Endangered')} className="focus:outline-none transition duration-300 ease-in-out transform hover:scale-110 active:scale-95">
                    <img src={VectorBgOrange} alt="Endangered" className='w-auto h-auto' />
                </button>
                <button onClick={() => handleRiskFilter('Vulnerable')} className="focus:outline-none transition duration-300 ease-in-out transform hover:scale-110 active:scale-95">
                    <img src={VectorBgYellow} alt="Vulnerable" className='w-auto h-auto' />
                </button>
            </div>




            {/* Display grasswren cards based on the selected risk category */}
            <div className='grid grid-cols-3 gap-4 '>
                {grasswrenList.filter(grasswren => !selectedRisk || grasswren.risk_category === selectedRisk).map((grasswren) => (
                    <CardGrasswren
                        key={grasswren.wren_id}
                        wren_id={grasswren.wren_id}
                        common_name={grasswren.common_name}
                        risk_category={grasswren.risk_category}
                        image={grasswren.image}
                    />
                ))}
            </div>
        </div>

    );
}

export default SelectGrasswren;
import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import CardGrasswren from './CardGrasswren';
import VectorBgYellow from '../imgs/grasswren/VectorBg-yellow.svg';
import VectorBgOrange from '../imgs/grasswren/VectorBg-orange.svg';
import VectorBgRed from '../imgs/grasswren/VectorBg-red.svg';


const SelectGrasswren = () => {
    const [grasswrenList, setGrasswrenList] = useState([]);
    const [selectedRisk, setSelectedRisk] = useState(null);

    const fecthGrasswrenList = async () => {
        axios.get(import.meta.env.VITE_SERVER_DOMAIN + '/api/grasswren/list')
            .then(response => {
                // console.log(response.data);
                setGrasswrenList(response.data);
                console.log(grasswrenList);
            })
            .catch(error => {
                console.log(error);
            });
    }

    useEffect(() => {
        fecthGrasswrenList();
    }, []);

    const handleRiskFilter = (risk) => {
        setSelectedRisk(prevRisk => prevRisk === risk ? null : risk);
    };


    return (
        <div className='bg-dark-green p-20'>
            <h1 className='text-3xl text-white text-center mb-20'>Meet Our Endangered Grasswrens</h1>
            <div className='flex flex-row gap-20 justify-center mb-16'>
                <button onClick={() => handleRiskFilter('Critically Endangered')}>
                    <img src={VectorBgRed} alt="Critically Endangered" className='w-auto h-auto' />
                </button>
                <button onClick={() => handleRiskFilter('Endangered')}>
                    <img src={VectorBgOrange} alt="Endangered" className='w-auto h-auto' />
                </button>
                <button onClick={() => handleRiskFilter('Vulnerable')}>
                    <img src={VectorBgYellow} alt="Vulnerable" className='w-auto h-auto' />
                </button>

            </div>
            <div className='grid grid-cols-3 gap-4 '>
                {grasswrenList.filter(grasswren => !selectedRisk || grasswren.risk_category === selectedRisk).map((grasswren) => (
                    <CardGrasswren
                        key={grasswren.wren_id}
                        wren_id={grasswren.wren_id}
                        common_name={grasswren.common_name}
                        risk_category={grasswren.risk_category}
                    />
                ))}
            </div>
        </div>

    );
}

export default SelectGrasswren;
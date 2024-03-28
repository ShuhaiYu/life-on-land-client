import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const GrasswrenDetail = () => {
    const { id } = useParams();
    const [grasswren, setGrasswren] = useState({});

    const fetchGrasswren = async () => {
        await axios.get(import.meta.env.VITE_SERVER_DOMAIN + `/api/grasswren/${id}`)
            .then(response => {
                setGrasswren(response.data[0]);
                console.log(grasswren);
            })
            .catch(error => {
                console.log(error);
            });
    }
    
    useEffect(() => {
        fetchGrasswren();
    }, [id]);

    const { common_name, description, location, population, risk_category, scientific_name, threats } = grasswren;
    
    return (
        <div className='flex flex-col bg-dark-green m-20 p-10'>
            <div className='flex flex-row gap-5 m-5'>
               <p className='text-white text-center uppercase border-2 border-white px-10 py-2 w-[150px]'>Name</p> 
               <p className='text-white'>{scientific_name}</p>
            </div>
            <div className='flex flex-row gap-5 m-5'>
               <p className='text-white text-center uppercase border-2 border-white px-10 py-2 w-[150px]'>Risk</p> 
               <p className='text-white'>{risk_category}</p>
            </div>
            <div className='flex gap-5 m-5 items-start'>
               <p className='text-white text-center uppercase border-2 border-white px-10 py-2 w-[150px]'>description</p> 
               <p className='text-white'>{description}</p>
            </div>
            <div className='flex flex-row gap-5 m-5'>
               <p className='text-white text-center uppercase border-2 border-white px-10 py-2 w-[150px]'>location</p> 
               <p className='text-white'>{location}</p>
            </div>
            {/* <div className='flex flex-row gap-5 m-5'>
               <p className='text-white uppercase border-2 border-white px-10 py-2'>Risk</p> 
               <p className='text-white'>{risk_category}</p>
            </div> */}
            
            {/* <h2>Name: {common_name}</h2>
            <p>Description: {description}</p>
            <p>Location: {location}</p>
            <p>Population: {population}</p>
            <p>Risk Category: {risk_category}</p>
            
            <p>Threats: {threats}</p> */}
        </div>
    );
    }

export default GrasswrenDetail;


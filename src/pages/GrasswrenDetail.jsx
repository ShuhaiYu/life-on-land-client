import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AudioPlayer from '../components/AudioPlayer';
import AustraliaMap from '../components/AustraliaMap';

const GrasswrenDetail = () => {
    const { id } = useParams();
    const [grasswren, setGrasswren] = useState({});

    // Fetch the grasswren data from the server
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

    // useEffect hook to fetch grasswren data
    useEffect(() => {
        fetchGrasswren();
    }, [id]);

    // Destructure the grasswren object
    const { common_name, description, location, population, risk_category, scientific_name, threats, image, audio } = grasswren;

    return (
        <div className='grid grid-cols-2 m-20' style={{ gridTemplateColumns: '30% 70%' }}>

            {/* Display the grasswren img */}
            <div className='relative max-w-xl mx-auto'>
                <img src={image} alt={common_name} className='w-full h-full object-cover' />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-white text-4xl font-bold opacity-90">{common_name}</h2>
                </div>
            </div>

            <div className='flex flex-col bg-dark-green p-10 pl-0'>
                {/* Display the grasswren name and sound */}
                <div className='flex flex-row gap-32'>
                    <div className='flex flex-row gap-5 m-5'>
                        <p className='text-white text-center uppercase border-2 border-white px-10 py-2 w-[150px]'>Name</p>
                        <p className='text-white'>{scientific_name}</p>
                    </div>
                    <div className='flex flex-row gap-5 m-5'>
                        <p className='text-white text-center uppercase border-2 border-white px-10 py-2 w-[150px]'>Sound</p>
                        <AudioPlayer src_url={audio} />
                    </div>
                </div>

                {/* Display the grasswren Risk, description and location */}
                <div className='flex flex-row gap-5 m-5'>
                    <p className='text-white text-center uppercase border-2 border-white px-10 py-2 w-[150px]'>Risk</p>
                    <p className='text-white'>{risk_category}</p>
                </div>
                <div className='flex gap-5 m-5 items-start'>
                    <p className='text-white text-center uppercase border-2 border-white px-10 py-2 w-[150px]'>description</p>
                    <p className='text-white'>{description}</p>
                </div>
                <div className='flex flex-row gap-5 m-5 items-start'>
                    <p className='text-white text-center uppercase border-2 border-white px-10 py-2 w-[150px]'>location</p>
                    <div className='h-[250px] w-[500px]'>
                        <AustraliaMap location={location} />
                    </div>

                </div>

                {/* Back button */}
                <div className='flex items-end justify-end'>
                    <Link to={`/grasswren`} className='flex gap-5 text-white text-center uppercase border-2 border-white px-10 py-2'>
                        Back
                        <i className="fi fi-rr-angle-left text-sm pt-1"></i>
                    </Link>
                    
                </div>


            </div>
        </div>

    );
}

export default GrasswrenDetail;


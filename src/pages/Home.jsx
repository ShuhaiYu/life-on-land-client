import React from 'react'
import LandingImg1 from '../imgs/home/bellbird-birding-tours-australian-birdwatching-tours-28.jpg'
import LandingImg2 from '../imgs/home/grasswren-birdwatching-tour-bellbird-tours-1.jpg'
import LandingImg3 from '../imgs/home/ebird2.jpeg'
import LandingImg4 from '../imgs/home/grasswrens.png'
import BirdIcon from '../imgs/bird.png'
import Vector from '../imgs/Vector 1.png'
import NavCardImg1 from '../imgs/home/nsw2.jpg'
import NavCardImg2 from '../imgs/home/nsw3.jpg'
import NavCardImg3 from '../imgs/home/bushfire.jpg'

import NavCard from '../components/NavCard'

const HomePage = () => {
    return (
        <div className='flex flex-col'>
            {/* This is the landing imgs */}
            <div className="flex flex-col sm:flex-col md:flex-row  h-full">

                <div className='flex flex-col justify-center items-center sm:w-full md:w-[40%] '>
                    <img src={BirdIcon} alt="bird icon" className='self-center w-16 h-16 mx-1' />
                    <p className='text-2xl text-center font-bold w-2/3 my-5'>Did you know there are more than 200 Australian birds are now threatened with extinction? </p>
                    <img src={Vector} alt="Vector" className='w-auto h-auto' />
                </div>
                <div className='flex flex-col sm:w-full md:w-[20%] items-center'>
                    <img src={LandingImg1} alt="Birdwatching" className='h-64' />
                    <img src={LandingImg2} alt="Birdwatching" className='h-96' />
                </div>
                <img src={LandingImg3} alt="Birdwatching" className="sm:w-full md:w-[40%] h-[40rem]" />
            </div>
            <div className='flex flex-col sm:flex-col md:flex-row'>
                <img src={LandingImg4} alt="Grasswren" className="sm:w-full md:w-[40%] h-auto" />
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-xl sm:text-lg md:text-2xl text-center font-bold w-2/3 my-5'>Three new species have recenlty become significantly threatened species across Australia. According to the NSW Threatened Species Scientific Committee (2021), the total population of Mukarrthippi Grasswren is very likely to be less than 20 mature individuals, with a continuing decline caused by ongoing threats from wildfire, habitat deterioration and fragmentation of the small populations.</p>
                    <img src={Vector} alt="Vector" className='w-auto h-auto' />
                </div>


            </div>

            {/* Three nav cards */}
            <div className='flex flex-col sm:flex-col md:flex-row gap-8 justify-center my-16'>
                <NavCard title='threatened grasswren' img={NavCardImg1} link='/grasswren' />
                <NavCard title='what went wrong' img={NavCardImg3} link='/risk' />
                <NavCard title='becoming an expert' img={NavCardImg2} link='/education' />
            </div>
        </div>
    )
}

export default HomePage
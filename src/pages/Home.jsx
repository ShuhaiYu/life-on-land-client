import React from 'react'
import { Link } from 'react-router-dom'
import LandingImg1 from '../imgs/home/bellbird-birding-tours-australian-birdwatching-tours-28.jpg'
import LandingImg2 from '../imgs/home/grasswren-birdwatching-tour-bellbird-tours-1.jpg'
import LandingImg3 from '../imgs/home/ebird2.jpeg'
import LandingImg4 from '../imgs/home/grasswrens.png'
import BirdIcon from '../imgs/bird.png'
import Vector from '../imgs/Vector 1.png'
import NavCardImg1 from '../imgs/home/nsw2.jpg'
import NavCardImg2 from '../imgs/home/nsw3.jpg'
import NavCardImg3 from '../imgs/home/bushfire.jpg'
import NavCardImg4 from '../imgs/home/getinvolved.jpeg'
import GrasswrenSeries from '../imgs/home/Grasswren-Series.jpg'

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

            {/* This is timeline */}
            <section className='mt-20'>
                <div className="bg-dark-green text-white py-8">
                <h1 className="text-5xl text-center font-caveat-brush text-white">Grasswren Timeline: Fascinating Facts</h1>

                    <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
                        <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
                            <p className="ml-2 text-yellow-300 uppercase tracking-loose">Conservation Journey</p>
                            <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">Conservation Timeline of Grasswrens</p>
                            <p className="text-sm md:text-base text-gray-50 mb-4">
                                Explore the Threatened Grasswrens: Navigate through a comprehensive list and explore detailed profiles and habitat locations for each species.
                            </p>
                            <Link to="/grasswren"
                                className="bg-transparent mr-auto hover:bg-[#FFC100] text-white hover:text-dark-green rounded shadow hover:shadow-lg py-2 px-4 border border-[#FFC100] hover:border-transparent">
                                Explore Now</Link>
                        </div>
                        <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
                            <div className="container mx-auto w-full h-full">
                                <div className="relative wrap overflow-hidden p-10 h-full">
                                    <div className="border-2-2 border-yellow-555 absolute h-full border"
                                        style={{ right: '50%', border: '2px solid #FFC100', borderRadius: '1%' }}></div>
                                    <div className="border-2-2 border-yellow-555 absolute h-full border"
                                        style={{ left: '50%', border: '2px solid #FFC100', borderRadius: '1%' }}></div>
                                    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                        <div className="order-1 w-5/12"></div>
                                        <div className="order-1 w-5/12 px-1 py-4 text-right">
                                            <p className="mb-3 text-3xl text-[#FCE04E] font-bold">1890</p>
                                            <h4 className="mb-3 font-bold text-lg md:text-2xl">First Recorded Observation</h4>
                                            <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                                                Did you know the earliest observation record of the Mukarrthippi Grasswren dates all the way back to 1890!
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                                        <div className="order-1 w-5/12"></div>
                                        <div className="order-1  w-5/12 px-1 py-4 text-left">
                                            <p className="mb-3 text-3xl text-[#FCE04E] font-bold">1910</p>
                                            <h4 className="mb-3 font-bold text-lg md:text-2xl">Decline Noted</h4>
                                            <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                                                Between 1900 and 1910, Australia was home to at least six species of grasswrens that were actively living. Unfortunately, all of them are now endangered.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                        <div className="order-1 w-5/12"></div>
                                        <div className="order-1 w-5/12 px-1 py-4 text-right">
                                            <p className="mb-3 text-3xl text-[#FF9131] font-bold"> 2010</p>
                                            <h4 className="mb-3 font-bold text-lg md:text-2xl">Recovery Programs Initiated</h4>
                                            <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                                                Between 1940 and 1990, there were increasing records of various grasswren species. Since 2010, their population has experienced a dramatic decline.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                                        <div className="order-1 w-5/12"></div>

                                        <div className="order-1  w-5/12 px-1 py-4">
                                            <p className="mb-3 text-3xl text-[#FF9131] font-bold">2024</p>
                                            <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">Current Conservation Status</h4>
                                            <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                                                Currently, 10 grasswren species are listed as vulnerable or critically endangered, posing an unprecedented threat to our ecosystem and community.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <img class="mx-auto mt-10" src={GrasswrenSeries} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Three nav cards */}
            <div className='flex flex-col sm:flex-col md:flex-row gap-8 justify-center m-28'>
                <NavCard title='threatened grasswren' img={NavCardImg1} link='/grasswren' />
                <NavCard title='what went wrong' img={NavCardImg3} link='/risk' />
                <NavCard title='becoming an expert' img={NavCardImg2} link='/education' />
                <NavCard title='get involved' img={NavCardImg4} link='/involved' />
            </div>
        </div>
    )
}

export default HomePage
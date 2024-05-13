import React, { useRef } from 'react'
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
import TimeLineImg1 from '../imgs/home/gw1.png'
import TimeLineImg2 from '../imgs/home/gw2.png'
import TimeLineImg3 from '../imgs/home/gw3.png'
import TimeLineImg4 from '../imgs/home/gw4.png'
import TimeLineImg5 from '../imgs/home/gw5.png'
import TimeLineImg6 from '../imgs/home/gw6.jpg'

import NavCard from '../components/NavCard'

const HomePage = () => {
    const timeline = useRef(null)

    const scrollToTimeline = () => {
        timeline.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='flex flex-col'>
            {/* This is the landing imgs */}
            <div className="flex flex-col sm:flex-col md:flex-row  h-full">

                <div className='flex flex-col justify-center items-center sm:w-full md:w-[40%] '>
                    <img src={BirdIcon} alt="bird icon" className='self-center w-16 h-16 mx-1' />
                    <p className='text-2xl text-center font-bold w-[80%] my-5'>
                        Australia's vibrant grasswren populations are facing
                        critical decline, primarily due to habitat degradation.
                    </p>
                    <img src={Vector} alt="Vector" className='w-auto h-auto' />
                    <div className='flex gap-5 my-5'>
                        
                        <button className='btn-dark' onClick={scrollToTimeline}>Learn More</button>
                        <Link to='/risk' className='btn-light'>What Went Wrong</Link>
                    </div>
                </div>
                <div className='flex flex-col md:w-[20%] items-center'>
                    <img src={LandingImg1} alt="Birdwatching" className='h-64' />
                    <img src={LandingImg2} alt="Birdwatching" className='h-96' />
                </div>
                <img src={LandingImg3} alt="Birdwatching" className="sm:w-full md:w-[40%] h-[40rem] hidden sm:block" />
            </div>
            <div className='flex flex-col sm:flex-col md:flex-row'>
                <img src={LandingImg4} alt="Grasswren" className="sm:w-full md:w-[40%] h-auto hidden sm:block" />
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-xl sm:text-lg md:text-2xl text-center font-bold w-2/3 my-5'>
                        Species like the Mukarrthippi Grasswren are on the
                        brink of extinction, with less than 20 individuals remaining as of 2023.
                        The Grey Grasswren population also faces significant threat,
                        with numbers dropping below 200 posing a serious threat to
                        both biodiversity and cultural heritage on life on land.
                    </p>
                    <img src={Vector} alt="Vector" className='w-auto h-auto' />
                </div>


            </div>

            {/* This is timeline */}
            <section ref={timeline} className='mt-20'>
                <div className="bg-dark-green text-white py-8">
                    <h1 className="text-5xl text-center font-caveat-brush text-white">Conservation Timeline of Grasswrens</h1>
                    <p className="text-3xl text-center font-caveat-brush text-white">Discover Fascinating Facts About Grasswrens and Their Enemies</p>

                    <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
                        <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
                            <p className="ml-2 text-yellow-300 uppercase tracking-loose">Conservation Journey</p>
                            <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">Meet Endangered Grasswrens</p>
                            <p className="text-sm md:text-base text-gray-50 mb-4">
                                Explore their profiles and habitat locations
                            </p>
                            <Link to="/grasswren"
                                className="bg-transparent mr-auto hover:bg-[#FFC100] text-white hover:text-dark-green rounded shadow hover:shadow-lg py-2 px-4 border border-[#FFC100] hover:border-transparent">
                                Explore Now
                            </Link>
                            <img src={TimeLineImg1} className='w-64 h-64 rounded-lg mt-8' />
                        </div>
                        <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
                            <div className="container mx-auto w-full h-full">
                                <div className="relative wrap overflow-hidden p-10 h-full">
                                    <div className="border-2-2 border-yellow-555 absolute h-full border"
                                        style={{ right: '50%', border: '2px solid #FFC100', borderRadius: '1%' }}></div>
                                    <div className="border-2-2 border-yellow-555 absolute h-full border"
                                        style={{ left: '50%', border: '2px solid #FFC100', borderRadius: '1%' }}></div>

                                    <div className="mb-48 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                        <div className="order-1 w-5/12"></div>
                                        <div className="order-1 w-5/12 px-1 py-4 text-right">
                                            <div className='timeline-card'>
                                                <div className="card-front">
                                                    <p className="pb-3 text-3xl text-[#FCE04E] font-bold">1890</p>
                                                    <h4 className="pb-3 font-bold text-lg md:text-2xl">First Recorded Observation</h4>
                                                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                                                        Did you know the earliest observation record of the Mukarrthippi Grasswren dates all the way back to 1890!
                                                    </p>
                                                </div>
                                                <div className="card-back">

                                                    <div className="flex justify-center items-center">
                                                        <img src={TimeLineImg2} className='w-32 h-32 rounded-lg' />
                                                    </div>
                                                    <p className='text-sm md:text-base leading-snug text-gray-50 text-opacity-100 text-center mb-3'>
                                                        Mukarrthippi Grasswren is currently one of the critical endangered species
                                                    </p>
                                                    <Link to='/grasswren' className="bg-transparent hover:bg-[#FFC100] text-white hover:text-dark-green rounded shadow hover:shadow-lg py-2 px-4 border border-[#FFC100] hover:border-transparent">
                                                        Explore Profile
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="mb-48 flex justify-between items-center w-full right-timeline">
                                        <div className="order-1 w-5/12"></div>
                                        <div className="order-1  w-5/12 px-1 py-4 text-left ">
                                            <div className='timeline-card'>
                                                <div className="card-front">
                                                    <p className="pb-3 text-3xl text-[#FCE04E] font-bold">1910</p>
                                                    <h4 className="pb-3 font-bold text-lg md:text-2xl">Decline Noted</h4>
                                                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                                                        Between 1900 and 1910, Australia was home to at least six species of grasswrens that were actively living. Unfortunately, all of them are now endangered.
                                                    </p>
                                                </div>
                                                <div className="card-back">
                                                    <div className="flex justify-center items-center">
                                                        <img src={TimeLineImg3} className='w-32 h-32 rounded-lg' />
                                                    </div>
                                                    <p className='text-sm md:text-base leading-snug text-gray-50 text-opacity-100 text-center mb-3'>
                                                        The damaging fire patterns have resulted in a
                                                        dramatic decline in the grasswren population.

                                                    </p>
                                                    <Link to='/risk' className="bg-transparent hover:bg-[#FFC100] text-white hover:text-dark-green rounded shadow hover:shadow-lg py-2 px-4 border border-[#FFC100] hover:border-transparent">
                                                        What Went Wrong
                                                    </Link>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                    <div className="mb-48 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                        <div className="order-1 w-5/12"></div>
                                        <div className="order-1 w-5/12 px-1 py-4 text-right">
                                            <div className='timeline-card'>
                                                <div className="card-front">
                                                    <p className="mb-3 text-3xl text-[#FF9131] font-bold"> 2010</p>
                                                    <h4 className="mb-3 font-bold text-lg md:text-2xl">Recovery Programs Initiated</h4>
                                                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                                                        Between 1940 and 1990, there were increasing records of various grasswren species. Since 2010, their population has experienced a dramatic decline.
                                                    </p>
                                                </div>
                                                <div className="card-back">
                                                    <div className="flex justify-center items-center">
                                                        <img src={TimeLineImg4} className='w-32 h-32 rounded-lg' />
                                                    </div>
                                                    <p className='text-sm md:text-base leading-snug text-gray-50 text-opacity-100 text-center mb-3'>
                                                        Many conservation groups need extra hands
                                                        to support grasswren conservation efforts.
                                                    </p>
                                                    <Link to='/involved' className="bg-transparent hover:bg-[#FFC100] text-white hover:text-dark-green rounded shadow hover:shadow-lg py-2 px-4 border border-[#FFC100] hover:border-transparent">
                                                        Get Involved
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-48 flex justify-between items-center w-full right-timeline">
                                        <div className="order-1 w-5/12"></div>
                                        <div className="order-1  w-5/12 px-1 py-4">
                                            <div className='timeline-card'>
                                                <div className="card-front">
                                                    <p className="mb-3 text-3xl text-[#FF9131] font-bold">2024</p>
                                                    <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">Current Conservation Status</h4>
                                                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                                                        Currently, 10 grasswren species are listed as vulnerable or critically endangered, posing an unprecedented threat to our ecosystem and community.
                                                    </p>
                                                </div>
                                                <div className="card-back">
                                                    <div className="flex justify-center items-center">
                                                        <img src={TimeLineImg5} className='w-32 h-32 rounded-lg' />
                                                    </div>
                                                    <p className='text-sm md:text-base leading-snug text-gray-50 text-opacity-100 text-center mb-3'>
                                                        You can become part of the WrenGuard family!
                                                        Follow our guide and let's help protect these endangered grasswrens.
                                                    </p>
                                                    <Link to='/education' className="bg-transparent hover:bg-[#FFC100] text-white hover:text-dark-green rounded shadow hover:shadow-lg py-2 px-4 border border-[#FFC100] hover:border-transparent">
                                                        Build A Habitat
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-64 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                        <div className="order-1 w-5/12"></div>
                                        <div className="order-1 w-5/12 px-1 py-4 text-right">
                                            <div className='timeline-card'>
                                                <div className="card-front">
                                                    <p className="mb-3 text-3xl text-[#ff7d31] font-bold">Future</p>
                                                    <h4 className="mb-3 font-bold text-lg md:text-2xl">Predicted Future Challenges</h4>
                                                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100 mb-5">
                                                        Wildfire change and habitat destruction pose significant threats to grasswrens in the future. Conservation efforts must prioritize mitigating these risks to ensure the survival of grasswrens.
                                                    </p>

                                                </div>

                                                <div className="card-back">
                                                    <div className="flex justify-center items-center">
                                                        <img src={TimeLineImg6} className='w-32 h-32 rounded-lg' />
                                                    </div>
                                                    <p className='text-sm md:text-base leading-snug text-gray-50 text-opacity-100 text-center mb-3'>
                                                        Use our predictive modeling to foresee dangers in advance. Protecting nature requires each and every one of us.
                                                    </p>
                                                    <Link to="/risk/prediction"
                                                        className="bg-transparent hover:bg-[#FFC100] text-white hover:text-dark-green rounded shadow hover:shadow-lg py-2 px-4 border border-[#FFC100] hover:border-transparent">
                                                        Explore Future Risks
                                                    </Link>
                                                </div>
                                            </div>
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
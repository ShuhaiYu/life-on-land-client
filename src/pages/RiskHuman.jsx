import imgfire from '../imgs/home/bushfire.jpg'
import imgcat from '../imgs/risk/cat.png';
import imgnature from '../imgs/risk/nature.png';
import imgdiscover from '../imgs/risk/discover.png';
import imgvector from '../imgs/Vector 1.png';
import imgbirdRight from '../imgs/grasswren/bird-right.png';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import HoverImage from '../components/HoverImage';
import RiskMap from '../components/RiskMap';


const RiskHuman = () => {
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
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Tent_camping_along_the_Sulayr_trail_in_La_Taha%2C_Sierra_Nevada_National_Park_%28DSCF5147%29.jpg/1280px-Tent_camping_along_the_Sulayr_trail_in_La_Taha%2C_Sierra_Nevada_National_Park_%28DSCF5147%29.jpg" alt="Fox in nature" className='w-full h-[600px]' />
                    </div>
                    <div>
                        <img src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/msnbc/Components/Photo_StoryLevel/080204/080204-gamefarms-bcol-1p.jpg" alt="Ever alert" className='w-full h-[600px]' />
                    </div>
                </Slider>

            </div>
            {/* Landing Content */}
            <div className='flex flex-col items-center justify-center m-20'>
                <p className='text-dark-green text-3xl text-center m-10'>
                    Did you know unattended campfire or hunted for pleasure can threaten <br/>
                    the survival of endangered grasswrens,<br/>
                    whose habitats and lives are fragile and easily disrupted by such actions.<br/>
                    Check out where hunting and camping (brown dots) are conducted in each area on the map below<br/>

                </p>
                <img src={imgdiscover} alt="Discover" className='w-32' />

                <img src={imgvector} alt="Vector" className='w-auto h-auto m-10' />
                {/* <p className='text-xl text-dark-green font-bold text-center w-[70%] m-10 mb-20'>
                    Little did he know, <br />
                    every time he carelessly started a campfire or hunted for fun, <br />
                    he was unknowingly threatening the survival of endangered grasswrens, <br />
                    whose habitats and lives are fragile and easily disrupted by such actions.
                </p> */}

                {/* Map */}
                <div className="m-10 p-4 w-full sm:w-[60%] h-[70vh] border border-black shadow-lg shadow-black rounded-3xl">
                    <RiskMap isHumanShow={true} />
                </div>

            </div>


            {/* Content */}
            <div className='flex flex-col sm:flex-row m-20 justify-center items-center'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Tent_camping_along_the_Sulayr_trail_in_La_Taha%2C_Sierra_Nevada_National_Park_%28DSCF5147%29.jpg/1280px-Tent_camping_along_the_Sulayr_trail_in_La_Taha%2C_Sierra_Nevada_National_Park_%28DSCF5147%29.jpg" alt="Fox in nature" className='w-[300px] h-[300px] rounded-full mx-10' />
                <div className='text-xl text-dark-green w-[60%]'>
                    <h1 className='text-3xl text-dark-green font-bold pb-2'>Careless Fire Management</h1>
                    Camping, while a way for humans to reconnect with nature, can pose threats to the delicate ecosystems that grasswrens call home. The physical presence of campers, along with their equipment and waste, can lead to habitat degradation. Trampling of vegetation and disturbance of the soil affects the insects and seeds grasswrens feed on, reducing their food sources. Furthermore, campfires and other sources of light and noise can disrupt the natural behaviours of grasswrens, including their feeding and breeding patterns, contributing to a decline in their populations.
                </div>

            </div>
            <div className='flex flex-col sm:flex-row m-20 justify-center items-center'>
                <img src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/msnbc/Components/Photo_StoryLevel/080204/080204-gamefarms-bcol-1p.jpg" alt="Fox in nature" className='w-[300px] h-[300px] rounded-full mx-10' />
                <div className='text-xl text-dark-green w-[60%]'>
                    <h1 className='text-3xl text-dark-green font-bold pb-2'>Reckless Wildlife Hunting</h1>
                    Hunting, an activity often pursued for sport or subsistence, inadvertently impacts the grasswren populations. Though grasswrens are not typically targeted by hunters, the disruption caused in their natural habitats can be significant. The presence of hunters and the noise associated with hunting activities disturb these birds, leading to stress and displacement from their nesting grounds. Additionally, hunting of other animals can alter the ecological balance, potentially increasing the number of grasswren predators if their natural competitors are reduced.
                </div>

            </div>

            {/* Ending content */}
            <div className='flex flex-col mx-20 justify-center items-center'>
                <img src={imgbirdRight} alt="bird icon" className='self-center w-20 h-20 my-5 mx-1' />
                <p className='text-3xl text-dark-green font-bold text-center w-[70%] m-10'>
                    Your passion is recruited!
                </p>
                <p className='text-xl text-dark-green text-center font-bold w-[60%]'>
                    Human activities - such as leaving a campfire unattended, discarding lit cigarettes, debris burning and intentional arson - are among the top causes of wildfires.
                    <br /><br />
                    Creating fire management strategies to determine suitable fire frequencies for hazard reduction and wildfire control in high-risk areas is essential. Additionally, allowing regulated hunting can contribute to the continued recovery and success of the grasswren population.
                </p>
                <img src={imgvector} alt="Vector" className='w-auto h-auto m-10 mb-20' />
                <p className='text-xl text-dark-green text-center font-bold w-[60%]'>
                    Explore other risk about grasswren extinction
                </p>
            </div>
            {/* Hover Images that navigate to other risk pages */}
            <div className='flex flex-col items-center w-full h-auto'>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-12 m-32 mt-16'>

                    <HoverImage imgSrc={imgfire} title='Wildfire' link='/risk/fire' />
                    <HoverImage imgSrc={imgcat} title='Predators' link='/risk/predators' />
                    {/* <HoverImage imgSrc={imgnature} title='Humans' link='/risk/humans' /> */}
                </div>
            </div>
        </div>
    );
}

export default RiskHuman;
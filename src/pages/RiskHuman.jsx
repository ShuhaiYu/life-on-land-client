import imgfire from '../imgs/home/bushfire.jpg'
import imgcat from '../imgs/risk/cat.png';
import imgnature from '../imgs/risk/nature.png';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import HoverImage from '../components/HoverImage';


const RiskHuman = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 2000,
        arrows: true,

    };
    return (
        <div>

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
            <div className='flex flex-col items-center justify-center m-20'>
                <p className='text-3xl text-dark-green text-center w-[70%] m-20'>Exploring the Ripple Effects: How Human Actions Reshape the Destiny of Grasswrens</p>
                <div className='flex flex-row m-20'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Tent_camping_along_the_Sulayr_trail_in_La_Taha%2C_Sierra_Nevada_National_Park_%28DSCF5147%29.jpg/1280px-Tent_camping_along_the_Sulayr_trail_in_La_Taha%2C_Sierra_Nevada_National_Park_%28DSCF5147%29.jpg" alt="Fox in nature" className='w-[300px] h-[300px] rounded-full mx-10' />
                    <p className='text-2xl text-dark-green w-[60%]'>
                    Camping, while a way for humans to reconnect with nature, can pose threats to the delicate ecosystems that grasswrens call home. The physical presence of campers, along with their equipment and waste, can lead to habitat degradation. Trampling of vegetation and disturbance of the soil affects the insects and seeds grasswrens feed on, reducing their food sources. Furthermore, campfires and other sources of light and noise can disrupt the natural behaviors of grasswrens, including their feeding and breeding patterns, contributing to a decline in their populations.
                    </p>

                </div>
                <div className='flex flex-row m-20'>
                    <img src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/msnbc/Components/Photo_StoryLevel/080204/080204-gamefarms-bcol-1p.jpg" alt="Fox in nature" className='w-[300px] h-[300px] rounded-full mx-10' />
                    <p className='text-2xl text-dark-green w-[60%]'>
                    Hunting, an activity often pursued for sport or subsistence, inadvertently impacts the grasswren populations. Though grasswrens are not typically targeted by hunters, the disruption caused in their natural habitats can be significant. The presence of hunters and the noise associated with hunting activities disturb these birds, leading to stress and displacement from their nesting grounds. Additionally, hunting of other animals can alter the ecological balance, potentially increasing the number of grasswren predators if their natural competitors are reduced.
                    </p>

                </div>
                <p className='text-3xl text-dark-green text-center w-[70%] m-20'>Human actions like hunting and camping disrupt grasswren habitats. By fostering awareness and reducing our impact, we can safeguard their survival.</p>

            </div>
            <div className='grid grid-cols-2 gap-12 m-32'>

                <HoverImage imgSrc={imgfire} title='Wildfire' link='/risk/fire' />
                <HoverImage imgSrc={imgcat} title='Predators' link='/risk/predators' />
                {/* <HoverImage imgSrc={imgnature} title='Humans' link='/risk/humans' /> */}
            </div>
        </div>
    );
}

export default RiskHuman;
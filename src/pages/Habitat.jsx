import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import garden from '../imgs/education/garden.png';
import whiteLine from '../imgs/Vector 3.svg';
import profile from '../imgs/education/profile.png';
import person from '../imgs/education/person.png';
import leftBubble from '../imgs/education/criteria1.png';
import rightBubble from '../imgs/education/criteria2.png';
import { Link } from 'react-router-dom';
import NavCardImg1 from '../imgs/home/nsw2.jpg'
import NavCardImg3 from '../imgs/home/bushfire.jpg'
import NavCardImg4 from '../imgs/home/getinvolved.jpeg'

import NavCard from '../components/NavCard'

import FeedBerries from '../imgs/education/Feed-berries.jpg';
import FeedMantis from '../imgs/education/Feed-mantis.jpg';
import FeedSpider from '../imgs/education/Feed-spider.jpg';
import ShelterBoots from '../imgs/education/Shelter-boots.jpg';
import ShelterPlant from '../imgs/education/Shelter-plant.jpg';
import ShelterTyre from '../imgs/education/Shelter-tyre.jpg';
import WaterBox from '../imgs/education/Water-box.jpg';
import WaterPlatform from '../imgs/education/Water-platform.jpg';
import Shelter from '../imgs/education/shelter.png';
import Food from '../imgs/education/food.png';

import Modal from '../components/Modal';
import HoverImage from '../components/HoverImage';

const sections = [
    {
        title: "Build a Shelter",
        desc: "Grasswrens will happily roost in dense, thicket-like shrubbery and brush piles. Rock piles and wood piles are also good wren shelters. They will use roost boxes with 1.25-1.5-inch entrances. Because grasswrens can initially be shy, landscaping that creates corridors of dense shelter will help them move about the yard more comfortably. These birds can also be very creative about nesting spots. They may build nests in any suitable nook or cranny, such as flowerpots, coffee cans, shoes, on top of tires, or inside BBQ covers.",
        images: [
            { src: ShelterBoots, desc: "Old boots repurposed as nesting spots" },
            { src: ShelterPlant, desc: "Native plants providing natural shelter" },
            { src: ShelterTyre, desc: "Used tires make great shelters" }
        ],
        color: "#5EBA7B"
    },
    {
        title: "Water Source",
        desc: "Grasswrens need water, particularly in desert habitats or other dry regions. Except for rock wrens, which are known to get all their water from their food. Because these birds have shorter legs, shallow bird baths just 1-1.5 inches deep are best. Heated bird baths are essential to provide liquid water in winter regions when other water sources are frozen. Bird baths and fountains with small streams, dribbles, or wigglers will attract their attention with sparkles and splashes. ",
        images: [
            { src: WaterBox, desc: "A simple birdbath setup ensures water access" },
            { src: WaterPlatform, desc: "A garden stream enhances habitat hydration" }
        ],
        color: "#009379"
    },
    {
        title: "Feed Grasswrens",
        desc: "Grasswrens have a great appetite for insects, snails, and slugs. Minimising insecticides and pesticides in the yard will ensure a healthy, abundant food source for wrens. Leaving leaf litter intact will give them plenty of space for foraging on the ground. Grasswrens will also pluck spiders from webs, and will glean ants, gnats, and other insects from foliage and tree bark. Planting native berry-producing shrubs will also give wrens an attractive winter food source long after most insects have vanished.",
        images: [
            { src: FeedBerries, desc: "Berries provide essential nutrients" },
            { src: FeedMantis, desc: "Praying mantis - a common prey" },
            { src: FeedSpider, desc: "Spiders are important for dietary balance" }
        ],
        color: "#348F50"
    }
];

const stepsData = {
    Shelter: [
        { step: "Steps of building the shelter (1/3)", description: "Grasswrens inhabit forests with thick underbrush, forest edges, woodland clearings, open forests, shrublands, suburban gardens, parks, and backyards, particularly near trees or tall shrubs. It is recommended to build shelters with a height of 3-6 feet and spaced at least 330 feet apart." },
        { step: "Steps of building the shelter (2/3)", description: "Ensure that your nesting boxes are installed well before the breeding season begins. Don’t be discouraged if birds don’t immediately start nesting in them; sometimes, it takes time for the birds to discover them." },
        { step: "Steps of building the shelter (3/3)", description: "The Noel guard is a rectangular tube made of hardware cloth that is stapled to the front of the nest box. This makes it difficult for predators to reach into the box entrance hole while still allowing the nest-box occupants to come and go easily." }
    ],
    WaterPlatform: [
        { step: "Steps of the Water Platform (1/3)", description: "Birds are drawn to water sources for both drinking and bathing, much like they are to feeders. You can set up a birdbath using either a purchased bird bath or simple dishes or shallow pans. While birds often prefer baths at ground level, raised baths can also attract them. It's important to change the water daily to maintain freshness and cleanliness. " },
        { step: "Steps of the Water Platform (2/3)", description: "If the bath is on the ground, consider placing a few branches or stones in the water to provide perches for birds to stand on while drinking without getting wet, especially during winter.        " },
        { step: "Steps of the Water Platform (3/3)", description: "To enhance the appeal of your birdbath, consider providing dripping water. You can purchase a dripper or sprayer, or you can repurpose an old bucket or plastic container by creating a small hole in the bottom, filling it with water, and suspending it above the birdbath to allow water to drip out.        " }
    ],
    Food: [
        { step: "Steps of the Food (1/3)", description: "Leave dead trees and limbs in place, if safe, as they host insects that are vital food sources for birds like woodpeckers, chickadees, and nuthatches. Plant native vines like Virginia creeper to beautify dead trees." },
        { step: "Steps of the Food (2/3)", description: "Use hulled sunflower seeds, which lack shells and reduce mess. Most seed-eating birds enjoy them, and they're easy to eat. Be sure to keep the seed dry because it tends to spoil more quickly than sunflower in the shell. Small pieces of shelled peanuts also attract grasswrens. Ensure they're mold-free and offer them on hopper or platform feeders.        " },
        { step: "Steps of the Food (3/3)", description: "Mealworms, these high-protein treats are larvae of the mealworm beetle. Offer live or dried mealworms on a tray or specialised feeder to attract birds. Berries can be attractive to grasswren; however, be sure to dispose of any fruit or berry that becomes moldy because some molds create toxins that are harmful to them.        " }
    ]
};


const HabitatPage = () => {
    const [step, setStep] = useState(1);
    const [postcode, setPostcode] = useState('');
    const [residenceType, setResidenceType] = useState('');
    const [gardeningSkill, setGardeningSkill] = useState('');
    const [habitatSize, setHabitatSize] = useState('');
    const [hasPets, setHasPets] = useState('');
    const [petType, setPetType] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState({ message: '', emoji: '' });

    const [currentSection, setCurrentSection] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const [showStepModal, setShowStepModal] = useState(false);
    const [currentSteps, setCurrentSteps] = useState([]);
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    const [showQualifiedContent, setShowQualifiedContent] = useState(false);

    const [showHereWeGoContent, setShowHereWeGoContent] = useState(false);


    const handleStep1Validation = async () => {
        // Reset error message each time we try to proceed
        setShowModal(false);
        setErrorMessage('');

        // Regex for Australian postcodes: 4-digit numbers ranging from 0200 to 9999
        const postcodeRegex = /^(0[2-9]\d{2}|[1-9]\d{3})$/;

        // Step 1 validations
        if (!postcodeRegex.test(postcode)) {
            setModalContent({ message: "Please enter a valid Australian postcode.", emoji: '🌍' });
            setShowModal(true);
            return;
        }

        // Check if the postcode area has grasswrens nearby
        try {
            const response = await axios.get(`${import.meta.env.VITE_SERVER_DOMAIN}/api/grasswren/geo/nearby`, {
                params: { postcode }
            });
            if (!response.data.nearby) {
                setModalContent({ message: "Sorry, there's no grasswren in your region, we look forward to your help in other conservation activities!", emoji: '😢' });
                setShowModal(true);
                return;
            }
        } catch (error) {
            console.error('Error checking for grasswrens:', error);
            setModalContent({ message: "Failed to check for grasswrens. Please try again later.", emoji: '😞' });
            setShowModal(true);
            return;
        }
        if (!['house'].includes(residenceType)) {
            setModalContent({ message: "Sorry, your residence type is not suitable for building a habitat, we look forward to your help in other conservation activities!", emoji: '😔' });
            setShowModal(true);
            return;
        }
        if (!['high', 'medium'].includes(gardeningSkill)) {
            setModalContent({ message: "Sorry, maybe try to improve your gardening skills, we look forward to your help in the near future!", emoji: '🌱' });
            setShowModal(true);
            return;
        }
        // Proceed to the next step if all validations are passed
        setStep(step + 1);
    };

    const handlePreviousStep = () => {
        if (step === 1) return;
        setStep(step - 1);
    };

    const handleStep2Validation = () => {
        setShowModal(false);

        if (habitatSize !== "300*300 or more") {
            setModalContent({ message: "Sorry, the size of your garden is less than 300*300 cm, which is not suitable for building a habitat for grasswrens, we look forward to your help in other conservation activities!", emoji: '🏞️' });
            setShowModal(true);
            return;
        }
        setStep(step + 1);
    };

    const handleStep3Validation = () => {
        setShowModal(false);

        if ((hasPets === "yes" && !['Others'].includes(petType)) || hasPets === "") {
            setModalContent({ message: "Sorry, pets may bring potential harm to grasswrens, we look forward to your help in other conservation activities!", emoji: '🐕🐈' });
            setShowModal(true);
            return;
        }
        setModalContent({ message: "Congratulations! You can start building a habitat for lovely grasswrens in your backyard! Follow our guide below! 🎉", emoji: '🎉' });
        setShowModal(true);
    };



    const handlePrevSection = () => {
        setCurrentSection(currentSection > 0 ? currentSection - 1 : sections.length - 1);
        setCurrentImageIndex(0); // Reset image index on section change
    };

    const handleNextSection = () => {
        setCurrentSection(currentSection < sections.length - 1 ? currentSection + 1 : 0);
        setCurrentImageIndex(0); // Reset image index on section change
    };

    const handlePrevImage = () => {
        const images = sections[currentSection].images;
        setCurrentImageIndex(currentImageIndex > 0 ? currentImageIndex - 1 : images.length - 1);
    };

    const handleNextImage = () => {
        const images = sections[currentSection].images;
        setCurrentImageIndex(currentImageIndex < images.length - 1 ? currentImageIndex + 1 : 0);
    };

    const currentImages = sections[currentSection].images;

    const handleImageClick = (type) => {
        setCurrentSteps(stepsData[type]);
        setCurrentStepIndex(0);
        setShowStepModal(true);
    };

    const handleNextStep = () => {
        if (currentStepIndex === currentSteps.length - 1) {
            return;
        }

        setCurrentStepIndex((prev) => (prev + 1) % currentSteps.length);
    };

    const handlePrevStep = () => {
        if (currentStepIndex === 0) {
            return;
        }
        setCurrentStepIndex((prev) => (prev - 1 + currentSteps.length) % currentSteps.length);
    };

    const handleQualifiedClick = () => {
        setShowQualifiedContent(true);
    };

    const handlePreparationClick = () => {
        setShowPreparationContent(true);
    };

    // const handleReadyClick = () => {
    //     setShowReadyContent(!showReadyContent);
    // };

    const handleHereWeGoClick = () => {
        setShowHereWeGoContent(true);
    };

    return (
        <div className='flex flex-col bg-grey h-auto relative'>
            <Link to="/education" className="z-10 absolute top-5 right-5 p-3 bg-light-green hover:bg-dark-green text-white rounded-full transition duration-300 ease-in-out px-4 shadow flex items-center justify-center">
                <i className="fi fi-rr-angle-left text-xl"></i>
                <span className="pl-2">Back to Education</span>
            </Link>
            <div className='relative'>
                <img src={garden} alt="Garden" className="w-full h-auto object-cover opacity-75" />
                <h1 className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[96px] text-white font-Poppins tracking-widest whitespace-nowrap">
                    Build A Habitat
                </h1>
                <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl text-white text-center font-Poppins tracking-widest">
                    It's not difficult to contribute to grasswren conservation efforts.<br />
                    Follow the guide and help save the grasswrens.
                </p>
                <img src={whiteLine} alt="White Line" className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 w-auto h-auto" />
                <h2 className="absolute bottom-[20%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl text-white font-Poppins tracking-widest">
                    Be A WrenGuard
                </h2>
            </div>



            <h1 className="text-5xl text-dark-green text-center font-bold my-10 ">
                What Should I Do First?
            </h1>
            <p className="text-2xl text-center font-semibold text-dark-green ">
                Explore the three key preparation steps and shop for the necessary elements!
            </p>

            <div className='flex flex-col items-center justify-center mt-20'>
                <div className='relative'>
                    <img src={garden} alt="Garden" className="w-full h-auto object-cover" />

                    <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] px-20 py-10 rounded-3xl " style={{ backgroundColor: sections[currentSection].color }}>
                        <div className="z-10 absolute -top-[50px] left-[50px]">
                            <div className='flex justify-center items-center'>
                                <h1 className='text-4xl bg-white border border-dark-green rounded-full w-32 h-32 flex justify-center items-center font-bold'>
                                    {`${currentSection + 1}`}
                                </h1>
                            </div>
                        </div>
                        <div className='flex items-start justify-center gap-20 pt-20'>
                            <div className='flex flex-col w-[50%]'>
                                <h1 className="text-[64px] text-white text-start font-bold whitespace-nowrap ">
                                    {sections[currentSection].title}
                                </h1>
                                <p className="text-white font-semibold text-xl text-start mt-5">{sections[currentSection].desc}</p>
                            </div>
                            <div className='flex flex-row items-center justify-center gap-4 w-[50%]'>
                                <button onClick={handlePrevImage} className="btn-light my-5"><i className='fi fi-br-angle-left' /></button>
                                <div className='flex flex-col justify-center items-center'>
                                    <img src={currentImages[currentImageIndex].src} alt="Section Image" className="w-72 h-72 rounded-full" />
                                    <p className="text-white font-semibold text-lg text-center mt-5">{currentImages[currentImageIndex].desc}</p>
                                </div>
                                <button onClick={handleNextImage} className="btn-light my-5"><i className='fi fi-br-angle-right' /></button>
                            </div>
                        </div>
                        <div className="absolute left-[20px] transform -translate-x-full -translate-y-1/2 top-1/2">
                            <button onClick={handlePrevSection} className="btn-dark my-5 pt-5 px-6"><i className='fi fi-br-angle-left text-3xl' /></button>
                        </div>
                        <div className="absolute right-[20px] transform translate-x-full -translate-y-1/2 top-1/2">
                            <button onClick={handleNextSection} className="btn-dark my-5 pt-5 px-6"><i className='fi fi-br-angle-right text-3xl' /></button>
                        </div>
                    </div>
                </div>


            </div>

            <div className='flex items-center justify-center'>
                <div className='relative'>
                    <img src={leftBubble} alt="Left Bubble" className="w-auto h-auto object-cover" />
                    <p className="absolute top-1/2 left-[40%] transform -translate-x-1/2 -translate-y-1/2 text-2xl text-center font-bold">
                        I have the knowledge<br /> and passion!
                    </p>
                </div>
                <img src={person} alt="Profile" className="w-auto h-auto object-cover" />
                <div className='relative'>
                    <img src={rightBubble} alt="Right Bubble" className="w-auto h-auto object-cover" />
                    <p className="absolute top-1/2 left-[60%] transform -translate-x-1/2 -translate-y-1/2 text-2xl text-center font-bold whitespace-nowrap">
                        All the equipments
                        <br />and plants are
                        <br />prepared!
                    </p>
                </div>

            </div>
            <h1 className="text-5xl text-dark-green text-center font-bold my-10 ">
                Lets Start Building
                The Habitat
            </h1>
            {!showHereWeGoContent && (
                <button onClick={handleHereWeGoClick} className="btn-dark w-1/4 mx-auto mb-16 py-4 rounded-lg bounce">Here we go!</button>

            )}
            {showHereWeGoContent && (
                <>
                    <div className='flex items-center justify-center'>
                        <div className='relative'>
                            <img src={garden} alt="Garden" className="w-full h-auto object-cover opacity-80" />
                            <div className="absolute top-1/2 left-[5%] -translate-y-1/2 w-[250px] h-[180px]">
                                <HoverImage imgSrc={Shelter} onClick={() => handleImageClick('Shelter')} title="Shelter" />
                            </div>

                            <div className="absolute bottom-0 left-1/3 -translate-y-1/2 w-[250px] h-[180px]">
                                <HoverImage imgSrc={WaterPlatform} onClick={() => handleImageClick('WaterPlatform')} title="Water" />
                            </div>

                            <div className="absolute top-1/2 right-[5%] -translate-y-1/2 w-[250px] h-[180px]">
                                <HoverImage imgSrc={Food} onClick={() => handleImageClick('Food')} title="Food" />
                            </div>

                            {showStepModal && (
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center" onClick={() => setShowStepModal(false)}>
                                    <div className="bg-white bg-opacity-75 w-1/3 h-1/2 p-5 rounded-lg shadow-lg flex flex-col" onClick={(e) => e.stopPropagation()}>
                                        <div className='px-6 py-4'>
                                            <h2 className='text-3xl'>{currentSteps[currentStepIndex].step}</h2>
                                            <p className='text-xl mb-6'>{currentSteps[currentStepIndex].description}</p>
                                        </div>
                                        <div className='mt-auto flex justify-evenly'>
                                            {currentStepIndex > 0 && (
                                                <button onClick={handlePrevStep} className='btn-light'>Previous</button>
                                            )}
                                            {currentStepIndex < currentSteps.length - 1 ? (
                                                <button onClick={handleNextStep} className='btn-light'>Next</button>
                                            ) : (
                                                <button onClick={() => setShowStepModal(false)} className='btn-light'>Close</button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <h1 className="text-4xl text-dark-green text-center font-bold my-10 ">
                        To find out if your garden is suitable for building a habitat, try the form below!
                    </h1>


                    <div className='flex items-center justify-center'>
                        <div className='relative'>
                            <img src={leftBubble} alt="Left Bubble" className="w-auto h-auto object-cover" />
                            <p className="absolute top-[40%] left-[40%] transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold">
                                I don’t know much about grasswren
                            </p>
                            <Link to='/education/quiz' className="absolute top-[70%] left-[40%] transform -translate-x-1/2 -translate-y-1/2 btn-light py-2">
                                Threatened Grasswren
                            </Link>
                        </div>
                        <img src={profile} alt="Profile" className="w-auto h-auto object-cover" />
                        <div className='relative'>
                            <img src={rightBubble} alt="Right Bubble" className="w-auto h-auto object-cover" />
                            <p className="absolute top-[40%] left-[60%] transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold whitespace-nowrap">
                                I am not sure if I can do this

                            </p>
                            <Link to='/education/quiz' className="absolute top-3/4  left-[60%] transform -translate-x-1/2 -translate-y-1/2 btn-light py-2">
                                Do The Tests
                            </Link>
                        </div>
                    </div>



                    <Modal isOpen={showModal} content={modalContent} onClose={() => setShowModal(false)} />

                    <div className="flex flex-col items-center justify-center bg-white rounded-3xl p-10 w-[60%] mx-auto">
                        <div className="w-full flex justify-start">
                            <h1 className="text-3xl">
                                Can I grow a grasswren-friendly garden?
                            </h1>
                        </div>
                        <div className="w-full flex justify-end">
                            <div className="text-right my-2">
                                <span className="text-dark-green">Step {step}</span>
                                <span className='text-dark-grey'> of 3</span>
                            </div>
                        </div>

                        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
                            <div className="bg-dark-green h-2.5 rounded-full" style={{ width: `${(step / 3) * 100}%` }}></div>
                        </div>
                        {errorMessage && <div className="text-red text-center text-2xl opacity-80 my-4">{errorMessage}</div>}
                        {step === 1 && (
                            <div className='flex flex-col w-full'>
                                <div className="flex flex-col my-2 p-2 rounded-lg border" >
                                    <label htmlFor="postcode">Postcode</label>
                                    <input type="text" placeholder="Enter your postcode" value={postcode}
                                        onChange={e => setPostcode(e.target.value)} />

                                </div>
                                <div className='grid grid-cols-2 gap-8'>
                                    <div className='flex flex-col my-2 p-2 rounded-lg border'>
                                        <label htmlFor="residenceType">Residence Type</label>
                                        <select value={residenceType} onChange={e => setResidenceType(e.target.value)}
                                        >
                                            <option value="" disabled>Select Residence Type</option>
                                            <option value="apartment">Apartment</option>
                                            <option value="townhouse">Townhouse</option>
                                            <option value="house">House</option>
                                        </select>
                                    </div>

                                    <div className='flex flex-col my-2 p-2 rounded-lg border'>
                                        <label htmlFor="gardeningSkill">Gardening Experience</label>
                                        <select value={gardeningSkill} onChange={e => setGardeningSkill(e.target.value)}
                                        >
                                            <option value="" disabled>Select Gardening Experience</option>
                                            <option value="high">More than 1 year</option>
                                            <option value="medium">Between 3 months to 1 year</option>
                                            <option value="low">Less than 3 months</option>
                                            <option value="no experience">No experience</option>
                                        </select>
                                    </div>

                                </div>
                                <div className='flex gap-14 items-center justify-center'>

                                    <button onClick={handleStep1Validation} className="btn-dark p-2 my-4 w-[180px] rounded-lg">Next</button>

                                </div>
                            </div>
                        )}
                        {step === 2 && (
                            <div className='flex flex-col w-full'>
                                <div className="flex flex-col my-2 p-2 rounded-lg border">
                                    <label>Habitat Size</label>
                                    <select value={habitatSize} onChange={e => setHabitatSize(e.target.value)}
                                        className="my-2 p-2">
                                        <option value="" disabled>Select Habitat Size</option>
                                        <option value="less than 300*300">Less than 300*300 cm</option>
                                        <option value="300*300 or more">Equal to or greater than 300*300 cm</option>
                                    </select>
                                </div>
                                <div className='flex gap-14 items-center justify-center'>

                                    <button onClick={handlePreviousStep} className="btn-light p-2 my-4 w-[180px] rounded-lg">Previous</button>
                                    <button onClick={handleStep2Validation} className="btn-dark p-2 my-4 w-[180px] rounded-lg">Next</button>

                                </div>
                            </div>
                        )}
                        {step === 3 && (
                            <div className='flex flex-col w-full'>
                                <div className='grid grid-cols-2 gap-4'>
                                    <div className="flex flex-col my-2 p-2 rounded-lg border">
                                        <label>Do you have pets?</label>
                                        <select value={hasPets} onChange={e => setHasPets(e.target.value)}
                                            className="my-2 p-2">
                                            <option value="" disabled>Select an option</option>
                                            <option value="yes">I have pets</option>
                                            <option value="no">I don't have pets</option>
                                        </select>
                                    </div>
                                    {hasPets === "yes" && (
                                        <div className="flex flex-col my-2 p-2 rounded-lg border">
                                            <label>Type of your pet:</label>
                                            <select value={petType} onChange={e => setPetType(e.target.value)}
                                                className="my-2 p-2">
                                                <option value="" disabled>Select Pet Type</option>
                                                <option value="Cat">Cat</option>
                                                <option value="Dog">Dog</option>
                                                <option value="Others">Others</option>
                                            </select>
                                        </div>
                                    )}
                                </div>

                                <div className='flex gap-14 items-center justify-center'>

                                    <button onClick={handlePreviousStep} className="btn-light p-2 my-4 w-[180px] rounded-lg">Previous</button>
                                    <button onClick={handleStep3Validation} className="btn-dark p-2 my-4 w-[180px] rounded-lg">Submit</button>

                                </div>
                            </div>
                        )}
                    </div>

                    <h1 className="text-5xl text-dark-green text-center font-bold my-10 ">
                        Monitoring and caring
                        for your habitat
                    </h1>
                    <div className='flex items-center justify-center'>

                        <div className='relative'>
                            <img src={leftBubble} alt="Left Bubble" className="w-auto h-auto object-cover" />
                            <p className="absolute top-1/2 left-[40%] transform -translate-x-1/2 -translate-y-1/2 text-2xl text-center font-bold">
                                Be careful for the wild <br />cats and foxes.
                            </p>
                        </div>
                        <img src={person} alt="Profile" className="w-auto h-auto object-cover" />
                        <div className='relative'>
                            <img src={rightBubble} alt="Right Bubble" className="w-auto h-auto object-cover" />
                            <p className="absolute top-1/2 left-[60%] transform -translate-x-1/2 -translate-y-1/2 text-2xl text-center font-bold whitespace-nowrap">
                                Change the water <br />
                                frequently and ensure the <br />
                                plants are healthy.
                            </p>
                        </div>

                    </div>
                    <div className='flex items-center justify-center mb-20'>
                        <p className='w-2/3 text-2xl'>
                            Grasswrens can be shy, and wrenguards should watch carefully for these birds to first arrive in the yard. Once they learn about the resources a yard offers, however, they will become more comfortable.
                            Their natural curiosity and intelligence will quickly become apparent. Positioning feeding areas and bird baths in a quiet corner will help grasswrens feel more comfortable at first.
                            Before you know it, these spritely birds will be flitting all over the yard and you can enjoy their company throughout the year.
                        </p>
                    </div>
                    {/* Three nav cards */}
                    <div className='flex flex-col sm:flex-col md:flex-row gap-8 justify-center m-28'>
                        <NavCard title='threatened grasswren' img={NavCardImg1} link='/grasswren' />
                        <NavCard title='what went wrong' img={NavCardImg3} link='/risk' />
                        {/* <NavCard title='becoming an expert' img={NavCardImg2} link='/education' /> */}
                        <NavCard title='get involved' img={NavCardImg4} link='/involved' />
                    </div>




                </>

            )}



        </div>
    );
}

export default HabitatPage;
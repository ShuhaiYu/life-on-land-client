import TopicSelectCard from "../components/TopicSelectCard";
import { Link } from "react-router-dom";

import OrangeBg from '../imgs/education/Rectangle 2.svg'
import wrens from '../imgs/education/Carpentarian-Grasswren-Pair4.jpg'
import wren from '../imgs/education/grasswren.jpg'
import bird from '../imgs/education/bird.png'
import telescope from '../imgs/education/telescope2.png'
import nest from '../imgs/education/nest.png'
import berries from '../imgs/education/berries.png'
import NavCard from '../components/NavCard'
import NavCardImg1 from '../imgs/home/nsw2.jpg'
import NavCardImg3 from '../imgs/home/bushfire.jpg'
import NavCardImg4 from '../imgs/home/getinvolved.jpeg'



const EducationPage = () => {
    return (
        <div className="flex flex-col bg-grey">
            {/* Part One */}
            <div className="flex flex-row items-center justify-center w-full h-full m-20">
                <div className="flex flex-col items-start justify-center w-1/2 m-20">
                    <h1 className="text-[75px] font-bold">Become a WrenGuard</h1>
                    <p className="text-xl">Ready to test your knowledge and passion for threatened grasswrens? We've crafted four engaging topics to help you dive deep into their world and discover how we can all contribute to their conservation. Take the challenge and join the WrenGuard family today!</p>
                    <div className="flex flex-row gap-5 items-start justify-start w-full pt-10">
                        <button className="btn-dark">Get Started</button>
                        <button className="btn-light">Build A Habitat</button>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center w-1/2">
                    <img src={wrens} alt="Grasswren" className="w-[60%] my-10 rounded-full" />
                </div>
            </div>
            {/* Part Two */}
            <div className="flex flex-col items-center justify-center w-full h-full">
                <h1 className="text-4xl text-center text-dark-green font-bold">
                    Get involved today and you can help <br />
                    conserve Australia's unique wildlife
                </h1>
                <p className="text-2xl text-center p-20 w-1/2">Select the topics below to start the challenge! Remember, your test result will disappear if you refresh the page!</p>
                <div className="flex flex-row gap-5 items-start justify-start w-full p-20">
                    <TopicSelectCard topicName="Threatened Species" topicDescription="How do we determine if a species is threatened?" imgIcon={bird}/>
                    <TopicSelectCard topicName="Spot A Grasswren" topicDescription="How do we know if that is a grasswren?" imgIcon={telescope} />
                    <TopicSelectCard topicName="Where Do They Live" topicDescription="Reveal the secret of the grasswren's habitat!" imgIcon={nest} />
                    <TopicSelectCard topicName="Grasswren's Favorite" topicDescription="Did you know the grasswren has a serious dietary routine?" imgIcon={berries} />
                </div>
                <Link to="/habitat" className="btn-light">Build A Habitat</Link>
            </div>
            {/* Part Three */}
            <div className="flex justify-end my-20">
                <div className="relative w-[80%]">
                    <img src={OrangeBg} alt="Orange Background" className="w-full h-auto" />
                    <p className="absolute top-1/3 left-40 right-0 text-3xl text-white font-bold">
                        We need you to protect our history!
                    </p>
                    <h1 className="absolute top-1/2 left-40 right-0 text-[80px] text-white font-bold transform -translate-y-1/2">
                        Become A <br />WrenGuard
                    </h1>
                    
                    <Link to="/education/quiz" className="btn-light shadow-xl border-0 text-3xl text-orange absolute bottom-1/4 left-1/3">
                        Get Started
                    </Link>
                    <img src={wren} alt="Grasswren" className="absolute right-20 top-1/2 transform -translate-y-1/2 rounded-full w-auto h-[60%] border-sky-100 border-spacing-20 border-[40px]" />

                </div>
            </div>
            {/* Three nav cards */}
            <div className='flex flex-col sm:flex-col md:flex-row gap-8 justify-center m-28'>
                <NavCard title='threatened grasswren' img={NavCardImg1} link='/grasswren' />
                <NavCard title='what went wrong' img={NavCardImg3} link='/risk' />
                <NavCard title='get involved' img={NavCardImg4} link='/involved' />
            </div>


        </div>

    );
}

export default EducationPage;
import TopicSelectCard from "../components/TopicSelectCard";
import { Link } from "react-router-dom";

import OrangeBg from '../imgs/education/Rectangle 2.svg'

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
                    <img src="https://via.placeholder.com/300" alt="Grasswren" className="w-[80%] my-10 rounded-full" />
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
                    <TopicSelectCard topicName="Grasswren Identification" topicDescription="Learn how to identify different species of grasswrens" imgIcon="https://via.placeholder.com/150" />
                    <TopicSelectCard topicName="Grasswren Habitat" topicDescription="Discover the unique habitats of grasswrens" imgIcon="https://via.placeholder.com/150" />
                    <TopicSelectCard topicName="Grasswren Conservation" topicDescription="Learn about the conservation efforts for grasswrens" imgIcon="https://via.placeholder.com/150" />
                    <TopicSelectCard topicName="Grasswren Threats" topicDescription="Understand the threats that grasswrens face" imgIcon="https://via.placeholder.com/150" />
                </div>
                <Link to="/habitat" className="btn-light">Build A Habitat</Link>
            </div>
            {/* Part Three */}
            <div className="flex justify-end my-20">
                <div className="relative w-[80%]">
                    <img src={OrangeBg} alt="Orange Background" className="w-full h-auto" />
                    <p className="absolute top-1/3 left-20 right-0 text-3xl text-white font-bold">
                        We need you to protect our history!
                    </p>
                    <h1 className="absolute top-1/2 left-20 right-0 text-5xl text-white font-bold transform -translate-y-1/2">
                        Become A <br />WrenGuard
                    </h1>
                    <Link to="/quiz" className="btn-light absolute bottom-1/4 left-40">
                        Get Started
                    </Link>
                </div>
            </div>



        </div>

    );
}

export default EducationPage;
import React from 'react';
import ResultBg from '../imgs/education/ResultBg.svg';
import { Link } from 'react-router-dom';

const QuizResult = ({ score, nextQuizLink }) => {
    const getResultContent = (score) => {
        if (score < 50) {
            return {
                title: "You Are Getting There!",
                desc: "Don't worry! Everyone starts somewhere. Let's learn together and try again. You've got this!",
                bgColor: "#3A8151" // Green
            };
        } else if (score >= 50 && score < 80) {
            return {
                title: "You Can Do This!",
                desc: "You only scored 50% correct answers!  Let's give it another shot and see if we can boost that score up! Keep going, you're getting closer!!",
                bgColor: "#C7A801" // Yellow
            };
        } else if (score >= 80 && score < 100) {
            return {
                title: "Congratulation!",
                desc: "You scored 80% correct answers! Great job! Keep up the momentum and take on the next challenge!",
                bgColor: "#FF9131" // Orange
            };
        } else if (score == 100) {
            return {
                title: "You Are The Expert!",
                desc: "You got 100% correct answers! You're a true Grasswren expert! Congratulations! Keep up the fantastic work!",
                bgColor: "#5A3F37" // Brown
            };
        }
        // Add a default case for unexpected scenarios
        console.error("Unexpected score value:", score);
        return {
            title: "Check Your Results!",
            desc: "There seems to be an issue with scoring. Please review your answers.",
            bgColor: "#333333" // Default fallback color
        };
    };

    const { title, desc, bgColor } = getResultContent(score);

    return (
        <div className='flex items-center justify-center'>
            <div className="w-[80%]  text-white p-4 rounded-md mt-10 mb-5 relative">
                <svg width="100%" height="100%" viewBox="0 0 1320 629" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill={bgColor}>
                    <path d="M1176 969.5L746.997 969.501L196.699 969.501L0.00270627 729.312L0.011006 676.99C0.0214733 610.705 34.2223 549.112 90.4822 514.061L110.288 501.722C156.168 473.136 166.677 410.84 132.712 368.786L79.6267 303.057C15.5768 220.722 47.0904 100.038 143.218 59.5299L154.238 54.8859C182.385 43.0248 212.146 35.4349 242.535 32.3672L534.464 2.89873C562.892 0.029156 591.548 0.292192 619.918 3.68301L841.388 30.1536C863.644 32.8137 886.122 33.0755 908.434 30.9343L1076.61 14.7953C1179.01 4.96857 1263.33 94.0943 1247.85 195.795L1229.91 313.627C1219.99 378.775 1234.46 445.292 1270.55 500.428C1336.37 600.973 1335.67 731.129 1268.8 830.969L1176 969.5Z" />
                </svg>
                <div className="absolute top-0 left-0 right-0 bottom-36 flex flex-col items-center justify-center">
                    <h1 className="text-5xl font-bold p-10">{title}</h1>
                    <p className=" w-1/3 text-center text-3xl">{desc}</p>
                </div>
                <div style={{ '--text-color': bgColor }} className="parent-class">
                    <Link to={nextQuizLink} className="absolute left-1/2 transform -translate-x-1/2 bottom-20 btn-light rounded-xl px-6 py-4 font-bold text-[var(--text-color)]">
                        Next Challenge
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default QuizResult;

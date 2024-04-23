import React, { useState } from "react";
import QuizResult from "./QuizResult";

import habitat from "../imgs/education/habitat.jpeg";
import bird from "../imgs/education/bird.png";

const iconData = [
    { id: 1, label: "Dense shrubbery", correct: true, info: "Correct! Grasswrens use dense shrubbery for nesting.", position: "top-[55%] left-[10%]" },
    { id: 2, label: "Low shrubbery", correct: true, info: "Correct! Grasswrens forage for food in low shrubbery.", position: "bottom-[20%] left-[20%]" },
    { id: 3, label: "High tree canopies", correct: false, info: "Incorrect. Grasswrens do not dwell in high tree canopies.", position: "top-[15%] right-[30%]" },
    { id: 4, label: "High humidity & moisture", correct: false, info: "Incorrect. Grasswrens do not typically inhabit areas with high humidity and moisture.", position: "bottom-[25%] right-[15%]" },
];

const QuizWhere = () => {
    const [selected, setSelected] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(null);

    const handleIconClick = (id) => {
        setSelected((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    let nextTopicName = "Grasswren's Favorite";
    const encodedTopicName = encodeURIComponent(nextTopicName);

    const handleSubmit = () => {
        const calculatedScore = calculateCorrectAnswers();
        setScore(calculatedScore);
        setSubmitted(true);
    };

    const calculateCorrectAnswers = () => {
        return Object.keys(iconData).reduce((acc, index) => {
            const icon = iconData[index];
            const isSelected = selected[icon.id];
            if (icon.correct && isSelected) {
                // User correctly selected a right answer
                acc += 25;
            } else if (!icon.correct && !isSelected) {
                // User correctly did not select a wrong answer
                acc += 25;
            }
            return acc;
        }, 0);
    };


    return (
        <div className="flex flex-col items-center justify-center">
            <div className="relative w-[80%]">
                <img src={habitat} alt="Habitat" className="w-full h-auto" />
                {iconData.map((icon) => (
                    <button
                        key={icon.id}
                        className={`tooltip absolute ${icon.position} p-2 rounded-full ${selected[icon.id]
                                ? (submitted ? (icon.correct ? 'bg-light-green border border-light-green' : 'bg-error border border-error') : 'bg-light-yellow border border-light-yellow')
                                : 'bg-transparent border border-transparent'
                            } hover:bg-gray-200 hover:border-gray-200`}
                        data-info={submitted ? icon.info : icon.label}
                        style={{ transform: "translate(-50%, -50%)" }}
                        onClick={() => handleIconClick(icon.id)}
                    >
                        <img src={bird} alt="Bird" className="w-32 h-32 p-3 rounded-full bg-white" />
                    </button>
                ))}
            </div>
            {!submitted ? (
                <button onClick={handleSubmit} className="btn-dark my-5">
                    Submit
                </button>
            ) : (
                <div className='w-full'>
                    {/* <button onClick={() => setSubmitted(false)} className="text-lg py-2 font-semibold mt-4 bg-blue-500 hover:bg-blue-700 text-white px-4 rounded">
                        Reset Quiz
                    </button> */}
                    <QuizResult score={score} nextQuizLink={`/education/quiz?title=${encodedTopicName}`} />
                </div>
            )}

        </div>
    );
};

export default QuizWhere;
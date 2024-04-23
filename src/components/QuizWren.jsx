import React, { useState } from 'react';
import ChoiceQuestion from './ChoiceQuestion';
import QuizResult from './QuizResult';

const questions = [
    {
        question: "What is the primary method used to determine if a species is threatened?",
        options: [
            { label: "A) Estimating its population size over several years", content: null, type: "text" },
            { label: "B) Assessing the geographic range of the species", content: null, type: "text" },
            { label: "C) Both A and B", content: null, type: "text" }
        ],
        correct: "C) Both A and B"
    },
    {
        question: "What type of data is crucial for assessing the threat level to a species?",
        options: [
            { label: "A) Celebrity endorsements for conservation", content: null, type: "text" },
            { label: "B) Historical and current population data", content: null, type: "text" },
            { label: "C) Opinion polls about the species", content: null, type: "text" }
        ],
        correct: "B) Historical and current population data"
    },
    {
        question: "What does it mean for a species to be listed as 'Endangered' under the IUCN Red List?",
        options: [
            { label: "A) The species has a large and stable population.", content: null, type: "text" },
            { label: "B) The species is at risk of extinction in the wild.", content: null, type: "text" },
            { label: "C) The species is only found in captivity.", content: null, type: "text" }
        ],
        correct: "B) The species is at risk of extinction in the wild."
    },
    {
        question: "Which of the following factors is NOT considered when assessing the threat status of a species?",
        options: [
            { label: "A) Economic value of the species", content: null, type: "text" },
            { label: "B) Rate of decline in population size", content: null, type: "text" },
            { label: "C) Degree of habitat fragmentation", content: null, type: "text" }
        ],
        correct: "A) Economic value of the species"
    },
    {
        question: "What role do habitat changes play in determining whether a species is threatened?",
        options: [
            { label: "A) Habitat changes are monitored but not crucial.", content: null, type: "text" },
            { label: "B) Significant habitat changes can indicate a threat to the species.", content: null, type: "text" },
            { label: "C) Only sudden habitat changes are considered.", content: null, type: "text" }
        ],
        correct: "C) Only sudden habitat changes are considered."
    }
];


const QuizWren = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState(Array(questions.length).fill(null));
    const [submitted, setSubmitted] = useState(false);

    let nextTopicName = "Spot A Grasswren";
    const encodedTopicName = encodeURIComponent(nextTopicName);

    const handleAnswerSelect = (answer) => {
        const newAnswers = [...answers];
        newAnswers[currentQuestionIndex] = answer;
        setAnswers(newAnswers);
        nextQuestion();
    };

    const nextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const previousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const handleSubmit = () => {
        setSubmitted(true);
        setCurrentQuestionIndex(0);
    };

    const calculateCorrectAnswers = () => {
        let correctCount = 0;
        answers.forEach((answer, index) => {
            if (answer === questions[index].correct) {
                correctCount++;
            }
        });
        console.log((correctCount / questions.length * 100).toFixed(0));
        return (correctCount / questions.length * 100).toFixed(0);
    };

    const progress = (currentQuestionIndex + 1) / questions.length * 100;

    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='w-3/4 bg-white p-10 rounded-xl shadow-xl'>
                <ChoiceQuestion
                    question={questions[currentQuestionIndex]}
                    handleAnswerSelect={handleAnswerSelect}
                    selectedOption={answers[currentQuestionIndex]}
                    submitted={submitted}
                />
            </div>
            <div className='flex justify-between gap-4 mt-4'>
                <button onClick={previousQuestion} disabled={currentQuestionIndex === 0} className="pt-2 px-4 rounded-full hover:bg-gray-300 disabled:text-gray-400 text-dark-green  disabled:cursor-not-allowed transition duration-300 ease-in-out">
                <i className="fi fi-rr-angle-left text-2xl"></i>
                </button>
                <button onClick={nextQuestion} disabled={currentQuestionIndex === questions.length - 1} className="pt-2 px-4 rounded-full hover:bg-gray-300 disabled:text-gray-400 text-dark-green  disabled:cursor-not-allowed transition duration-300 ease-in-out">
                    <i className="fi fi-rr-angle-right text-2xl"></i>
                </button>
            </div>
            <div className="w-[50%] bg-gray-200 rounded-full h-2.5 mt-4">
                <div className="bg-dark-green h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
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
                    <QuizResult score={calculateCorrectAnswers() } nextQuizLink={`/education/quiz?title=${encodedTopicName}`} />
                </div>
            )}
        </div>
    );
}

export default QuizWren;

import React, { useState } from 'react';
import ChoiceQuestion from './ChoiceQuestion';

const questions = [
    {
        question: "What is the primary method used to determine if a species is threatened?",
        options: [
            "A) Estimating its population size over several years",
            "B) Assessing the geographic range of the species",
            "C) Both A and B"
        ],
        correct: "C) Both A and B"
    },
    {
        question: "What type of data is crucial for assessing the threat level to a species?",
        options: [
            "A) Celebrity endorsements for conservation",
            "B) Historical and current population data",
            "C) Opinion polls about the species"
        ],
        correct: "B) Historical and current population data"
    },
    {
        question: "What does it mean for a species to be listed as 'Endangered' under the IUCN Red List?",
        options: [
            "A) The species has a large and stable population.",
            "B) The species is at risk of extinction in the wild.",
            "C) The species is only found in captivity."
        ],
        correct: "B) The species is at risk of extinction in the wild."
    },
    {
        question: "Which of the following factors is NOT considered when assessing the threat status of a species?",
        options: [
            "A) Economic value of the species",
            "B) Rate of decline in population size",
            "C) Degree of habitat fragmentation"
        ],
        correct: "A) Economic value of the species"
    },
    {
        question: "What role do habitat changes play in determining whether a species is threatened?",
        options: [
            "A) Habitat changes are monitored but not crucial.",
            "B) Significant habitat changes can indicate a threat to the species.",
            "C) Only sudden habitat changes are considered."
        ],
        correct: "C) Only sudden habitat changes are considered."
    }
];


const QuizWren = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState(Array(questions.length).fill(null));
    const [submitted, setSubmitted] = useState(false);

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
        return (correctCount / questions.length * 100).toFixed(0);
    };

    const progress = (currentQuestionIndex + 1) / questions.length * 100;

    return (
        <div className='flex flex-col items-center justify-center w-full'>
            <div className='w-3/4 bg-white p-10 rounded-xl shadow-xl'>
                <ChoiceQuestion
                    question={questions[currentQuestionIndex]}
                    handleAnswerSelect={handleAnswerSelect}
                    selectedOption={answers[currentQuestionIndex]}
                    submitted={submitted}
                />
            </div>
            <div className='flex justify-between mt-4'>
                <button onClick={previousQuestion} disabled={currentQuestionIndex === 0} className="text-lg px-4 py-2 rounded bg-gray-300 hover:bg-gray-400">
                    Previous
                </button>
                <button onClick={nextQuestion} disabled={currentQuestionIndex === questions.length - 1} className="text-lg px-4 py-2 rounded bg-gray-300 hover:bg-gray-400">
                    Next
                </button>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
            </div>
            {!submitted ? (
                <button onClick={handleSubmit} className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Submit
                </button>
            ) : (
                <div className="text-lg mt-4 font-semibold">
                    <button onClick={() => setSubmitted(false)} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Reset Quiz
                    </button>
                    Correct Answers: {calculateCorrectAnswers()}%
                </div>
            )}
        </div>
    );
}

export default QuizWren;

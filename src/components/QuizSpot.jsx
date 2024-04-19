import React, { useState } from 'react';
import ChoiceQuestion from './ChoiceQuestion';
import QuizResult from './QuizResult';

import shadowGrasswren from '../imgs/education/Shadow_Grasswren.png';
import shadowNoisyMiner from '../imgs/education/Shadow_Noisy Miner.png';
import soundNoisyMiner from '../imgs/education/Bird song of Noisy Miner.mp3';

const questions = [
    {
        question: "Which one is grasswren?",
        options: [
            { label: "A) Image of a grasswren", content: shadowGrasswren, type: "image" },
            { label: "B) Image of a not grasswren", content: shadowNoisyMiner, type: "image" },
        ],
        correct: "A) Image of a grasswren"
    },
    {
        question: "Which one is grasswren?",
        options: [
            { label: "A) Bright, multi-colored plumage", content: null, type: "text" },
            { label: "B) Short tail and streaked appearance", content: null, type: "text" }
        ],
        correct: "B) Short tail and streaked appearance"
    },
    {
        question: "Which one is grasswren?",
        options: [
            { label: "A) Bird song of Noisy Miner", content: soundNoisyMiner, type: "audio" },
            { label: "B) Bird song of grasswren", content: "https://wrenguard.s3.ap-southeast-2.amazonaws.com/striated.mp3", type: "audio" }
        ],
        correct: "B) Bird song of grasswren"
    },
    {
        question: "Which one is grasswren's behaviour?",
        options: [
            { label: "A) Swimming in shallow water", content: null, type: "text" },
            { label: "B) Skulking in low vegetation", content: null, type: "text" }
        ],
        correct: "B) Skulking in low vegetation"
    },
    {
        question: "Which appearance helps distinguish different grasswren species?",
        options: [
            { label: "A) Colour patterns on their plumage", content: null, type: "text" },
            { label: "B) Length of their beak", content: null, type: "text" }
        ],
        correct: "B) Length of their beak"
    }
];

const QuizSpot = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState(Array(questions.length).fill(null));
    const [submitted, setSubmitted] = useState(false);

    let nextTopicName = "Where Do They Live";
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
        setCurrentQuestionIndex(0); // Resets to review answers
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
                <button onClick={previousQuestion} disabled={currentQuestionIndex === 0} className="text-lg px-4 pt-2 rounded bg-gray-300 hover:bg-gray-400">
                    <i className="fi fi-rr-angle-left text-2xl"></i>
                </button>
                <button onClick={nextQuestion} disabled={currentQuestionIndex === questions.length - 1} className="text-lg px-4 pt-2 rounded bg-gray-300 hover:bg-gray-400">
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
};

export default QuizSpot;

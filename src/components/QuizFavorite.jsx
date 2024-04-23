import React, { useState } from 'react';
import ChoiceQuestion from './ChoiceQuestion';
import QuizResult from './QuizResult';

const questions = [
    {
        question: "What is a primary component of the grasswren diet?",
        options: [
            { label: "A) Fruits and berries", content: null, type: "text" },
            { label: "B) Large seeds", content: null, type: "text" },
            { label: "C) Insects and small arthropods", content: null, type: "text" }
        ],
        correct: "C) Insects and small arthropods"
    },
    {
        question: "How do grasswrens typically find their food?",
        options: [
            { label: "A) By foraging on the ground", content: null, type: "text" },
            { label: "B) By catching insects in flight", content: null, type: "text" },
            { label: "C) By fishing in shallow waters", content: null, type: "text" }
        ],
        correct: "A) By foraging on the ground"
    },
    {
        question: "Which of the following is least likely to be found in a grasswren's diet?",
        options: [
            { label: "A) Beetles", content: null, type: "text" },
            { label: "B) Spiders", content: null, type: "text" },
            { label: "C) Leaves", content: null, type: "text" }
        ],
        correct: "C) Leaves"
    },
    {
        question: "During what time are grasswrens most active in searching for food?",
        options: [
            { label: "A) Midday", content: null, type: "text" },
            { label: "B) Dawn and dusk", content: null, type: "text" },
            { label: "C) Midnight", content: null, type: "text" }
        ],
        correct: "B) Dawn and dusk"
    },
    {
        question: "What feeding behaviour is unique to grasswrens?",
        options: [
            { label: "A) Extracting insects from under the bark of trees", content: null, type: "text" },
            { label: "B) Skulking through underbrush to catch insects", content: null, type: "text" },
            { label: "C) Diving into water to catch aquatic insects", content: null, type: "text" }
        ],
        correct: "B) Skulking through underbrush to catch insects"
    }
];

const QuizFavorite = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState(Array(questions.length).fill(null));
    const [submitted, setSubmitted] = useState(false);

    let nextTopicName = "Threatened Species";
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
};

export default QuizFavorite;

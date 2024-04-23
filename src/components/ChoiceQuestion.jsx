import React, { useState, useRef } from 'react';

const ChoiceQuestion = ({ question, handleAnswerSelect, selectedOption, submitted }) => {
    const [isPlaying, setIsPlaying] = useState({});
    const audioRefs = useRef({});

    const getButtonClass = (option) => {
        if (!submitted) {
            return "hover:bg-light-yellow " + (selectedOption === option.label ? 'bg-light-yellow' : 'bg-white');
        } else {
            if (option.label === question.correct) {
                return "border border-light-green text-light-green";  // Correct answers are green
            } else if (selectedOption === option.label) {
                return "border border-error text-error";  // Incorrectly selected answers are red
            } else {
                return "";  // Unselected options remain
            }
        }
    };

    const togglePlayPause = (event, optionIndex) => {
        event.stopPropagation();  // Prevent event from bubbling up to parent elements
        const newIsPlaying = { ...isPlaying };
        if (newIsPlaying[optionIndex]) {
            audioRefs.current[optionIndex].pause();
        } else {
            audioRefs.current[optionIndex].play();
        }
        newIsPlaying[optionIndex] = !newIsPlaying[optionIndex];
        setIsPlaying(newIsPlaying);
    };
    
    const renderOptionContent = (option, index) => {
        switch (option.type) {
            case 'image':
                return <img src={option.content} alt={option.label} className="w-32 h-32 object-cover" />;
            case 'audio':
                return (
                    <div className="flex items-center">
                        <audio ref={el => audioRefs.current[index] = el} src={option.content} onPlay={() => setIsPlaying({ ...isPlaying, [index]: true })} onPause={() => setIsPlaying({ ...isPlaying, [index]: false })}>
                            Your browser does not support the audio element.
                        </audio>
                        <button onClick={(event) => togglePlayPause(event, index)} className='mx-10 text-dark-green focus:outline-none transition duration-300 ease-in-out rounded-full pt-2 px-2'>
                            <i className={`fi fi-rr-${isPlaying[index] ? 'pause' : 'play'}-circle text-5xl`} ></i>
                        </button>
                    </div>
                );
            default:
                return <span className='text-2xl'>{option.label}</span>;
        }
    };
    // Determine layout based on question types
    const isHorizontalLayout = question.options.some(option => option.type === 'image' || option.type === 'audio');
    const optionsContainerClass = isHorizontalLayout ? 'flex-row items-center justify-center' : 'flex-col items-center justify-center';
    

    return (
        <div className='flex flex-col items-center justify-center'>
            <i className="fi fi-rr-interrogation text-5xl rounded-full text-dark-green"></i>
            <h1 className='text-3xl text-dark-green p-10 text-center'>{question.question}</h1>
            <div className={`flex ${optionsContainerClass} gap-4`}>
                {question.options.map((option, index) => (
                    <button key={index}
                        className={`w-full p-2 my-2 text-2xl rounded-lg border-2 ${getButtonClass(option)}`}
                        onClick={() => handleAnswerSelect(option.label)}
                        disabled={submitted}
                    >
                        {renderOptionContent(option, index)}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ChoiceQuestion;

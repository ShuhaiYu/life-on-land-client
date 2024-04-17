import React from 'react';

const ChoiceQuestion = ({ question, handleAnswerSelect, selectedOption, submitted }) => {
  const getButtonClass = (option) => {
    if (!submitted) {
      return "bg-blue-500 hover:bg-blue-700 " + (selectedOption === option ? 'bg-green-500' : 'bg-blue-500');
    } else {
      if (option === question.correct) {
        return "bg-green-500";  // Correct answers are green
      } else if (selectedOption === option) {
        return "bg-red";  // Incorrectly selected answers are red
      } else {
        return "bg-blue-500";  // Unselected options remain blue
      }
    }
  };

  return (
    <div>
      <h1>{question.question}</h1>
      <div>
        {question.options.map((option, index) => (
          <button key={index}
            className={`w-full p-2 my-2 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${getButtonClass(option)}`}
            onClick={() => handleAnswerSelect(option)}
            disabled={submitted}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChoiceQuestion;

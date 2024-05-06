import React from 'react';
import fireRiskImage from '../imgs/risk/firerisk.png';


const RiskIndicator = ({ riskLevel, city, state }) => {

  // Get the current date
  const currentDate = new Date();
  // Get the next month date
  const nextMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
  // Get the next month and year
  const nextMonth = nextMonthDate.toLocaleString('default', { month: 'long' });
  const year = nextMonthDate.getFullYear();

  return (
    <div className='flex flex-col justify-center items-center m-10'>
      <div className='w-2/3 bg-white rounded-3xl shadow-2xl p-10 m-auto'>
        <div className="container mx-auto ">
          <h1 className="text-center text-2xl text-dark-green font-bold mb-4">
            Wildfire in {city} {state} in {nextMonth} {year}
          </h1>
        </div>
        <div className="relative flex justify-center items-center w-full h-auto">
          <img src={fireRiskImage} alt="Fire Risk" className="w-1/2 h-auto" />
          
        </div>
        <div className="container mx-auto mt-10">
          <h1 className="text-center text-2xl text-dark-green font-bold mb-4">
            Risk Level: {riskLevel}
          </h1>
          <p className="text-center text-dark-green font-bold mb-4">
            The risk level is predicted based on the historical data and the current weather conditions.
          </p>
        </div>
      </div>
    </div>

  );
};

export default RiskIndicator;

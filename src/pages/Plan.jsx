import React, { useState, useEffect, useRef } from 'react';
import DatePicker from 'react-datepicker';
import Calendar from 'react-calendar';
import "react-datepicker/dist/react-datepicker.css";
import 'react-calendar/dist/Calendar.css';
import 'tailwindcss/tailwind.css';
import ImgWren from '../imgs/education/wren.png';

const PlanPage = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [tasks, setTasks] = useState([]);
    const [tempDate, setTempDate] = useState(new Date());
    const top = useRef(null);

    const handleConfirm = () => {
        setStartDate(tempDate);
    };

    useEffect(() => {
        const generateTasks = () => {
            let newTasks = [];
            let currentDate = new Date(startDate);

            for (let i = 0; i < 30; i++) {
                let taskDay = new Date(currentDate);
                let taskList = [];

                if (i % 3 === 0) taskList.push("💧");
                if (i % 5 === 0) taskList.push("🍒");
                if (i % 7 === 0) taskList.push("🧹");

                newTasks.push({ date: taskDay, tasks: taskList });
                currentDate.setDate(currentDate.getDate() + 1);
            }
            return newTasks;
        };

        setTasks(generateTasks());
    }, [startDate]);

    // Function to format the task for display
    const taskFormatter = (date, view) => {
        const dayTasks = tasks.find(task => task.date.toDateString() === date.toDateString());
        return (
            <div>
                {dayTasks && dayTasks.tasks.map((task, index) => (
                    <span key={index} className={`p-1 text-xs ${task === "Water" ? 'text-blue-500' : task === "Feed" ? 'text-orange' : 'text-green-500'}`}>
                        {task}
                    </span>
                ))}
            </div>
        );
    };


    const scrollToTop = () => {
        top.current.scrollIntoView({ behavior: 'smooth' });
    };

    const addToGoogleCalendar = () => {
        const format = date => `${date.getFullYear()}${(date.getMonth() + 1).toString().padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}T${date.getHours().toString().padStart(2, '0')}${date.getMinutes().toString().padStart(2, '0')}00Z`;
    
        const startDate = new Date(tempDate); // 使用tempDate，假设这是事件开始日期
        const endDate = new Date(startDate.getTime() + 3600 * 1000); // 事件持续1小时
    
        const details = encodeURIComponent("Maintain your habitat: Water, Feed, and Clean.");
        const title = encodeURIComponent("Habitat Maintenance");
        const location = encodeURIComponent("Home");
    
        const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${format(startDate)}/${format(endDate)}&details=${details}&location=${location}&sf=true&output=xml`;
    
        window.open(url, '_blank');
    };
    


    return (
        <div className='flex flex-col items-center justify-center p-4'>
            <h1 ref={top} className='text-[75px] text-dark-green font-bold text-center mb-4'>Maintenance Plan</h1>
            <p className='text-3xl text-center mb-4'>We are here to help you make a plan to maintain your habitat! <br />Select the date you plan to start the work!</p>
            <div className='flex justify-center mb-4'>
                <DatePicker
                    selected={tempDate}
                    onChange={(date) => setTempDate(date)}
                    dateFormat="yyyy/MM/dd"
                    className="text-xl text-center p-4 rounded border border-gray-300 focus:border-blue-500 focus:ring-blue-500"

                />
                <button
                    onClick={handleConfirm}
                    className="btn-light ml-4"
                >
                    Confirm
                </button>
            </div>
            <img src={ImgWren} alt="Wren" className='w-1/4 h-auto rounded-full m-10' />
            <h1 className='w-2/3 text-4xl text-dark-green font-noto-sans-tc text-center mt-4'>The steps and actions are listed in the calendar below. Let's get started!</h1>
            <div className='flex-grow w-1/2 mt-10'>
                <Calendar
                    onChange={setStartDate}
                    value={startDate}
                    tileContent={({ date, view }) => taskFormatter(date, view)}
                    className="w-full h-full text-xl text-green-700"
                    tileClassName="hover:scale-110 hover:bg-green-100 transition-transform duration-200"
                />
            </div>
            <div className='flex justify-center my-10'>
                <button onClick={scrollToTop} className='btn-light'>Change Date</button>
                <button className='btn-light ml-4' onClick={addToGoogleCalendar}>Add to Google Calendar</button>
            </div>
        </div>
    );
}

export default PlanPage;

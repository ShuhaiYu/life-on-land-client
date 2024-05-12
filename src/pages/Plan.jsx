import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import Calendar from 'react-calendar';
import "react-datepicker/dist/react-datepicker.css";
import 'react-calendar/dist/Calendar.css';
import 'tailwindcss/tailwind.css';
import ImgWren from '../imgs/education/wren.png';
import NavCard from '../components/NavCard';
import NavCardImg1 from '../imgs/home/nsw2.jpg'
import NavCardImg3 from '../imgs/home/bushfire.jpg'
import NavCardImg4 from '../imgs/home/getinvolved.jpeg'

const PlanPage = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [tasks, setTasks] = useState([]);
    const [tempDate, setTempDate] = useState(new Date());
    const top = useRef(null);
    const today = new Date();

    const handleConfirm = () => {
        setStartDate(tempDate);
    };

    const formatDate = (date) => {
        const d = new Date(date);
        return `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}`;
    };

    useEffect(() => {
        const generateTasks = () => {
            let newTasks = [];
            let currentDate = new Date(startDate);

            for (let i = 0; i < 30; i++) {
                let taskDay = new Date(currentDate);
                let taskList = [];

                if (i % 3 === 0) taskList.push({ type: 'Water', icon: 'fi fi-rs-raindrops' });
                if (i % 5 === 0) taskList.push({ type: 'Feed', icon: 'fi fi-rs-flower-tulip' });
                if (i % 7 === 0) taskList.push({ type: 'Clean', icon: 'fi fi-rs-clean' });

                newTasks.push({ date: taskDay, tasks: taskList });
                currentDate.setDate(currentDate.getDate() + 1);
            }
            return newTasks;
        };

        setTasks(generateTasks());
    }, [startDate]);

    // Function to format the task for display
    const taskFormatter = (date, view) => {
        const dayTasks = tasks.find(task => formatDate(task.date) === formatDate(date));
        return (
            <div>
                {dayTasks && dayTasks.tasks.map((task, index) => (
                    <span key={index} className={`p-1 text-xs ${task.type === "Water" ? 'text-blue-500' : task.type === "Feed" ? 'text-orange' : 'text-green-500'}`}>
                        <i className={task.icon}></i>
                    </span>
                ))}
            </div>
        );
    };

    const getTileClassName = ({ date, view }) => {
        // Highlight today's date
        if (view === "month" && formatDate(date) === formatDate(today)) {
            return 'text-light-green hover:scale-110 hover:bg-green-100 transition-transform duration-200';
        } else {
            return 'hover:scale-110 hover:bg-green-100 transition-transform duration-200'; // Default style
        }
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

    // Legend for task icons
    const TaskLegend = () => {
        return (
            <div className="flex justify-around items-center w-1/2 mt-4 p-4 bg-white rounded-lg shadow">
                <div className="flex items-center">
                    <i className="fi fi-rs-raindrops text-blue-500 mr-2 text-xl"></i>
                    <span className="text-sm text-gray-600">Watering</span>
                </div>
                <div className="flex items-center">
                    <i className="fi fi-rs-flower-tulip text-orange mr-2 text-xl"></i>
                    <span className="text-sm text-gray-600">Feeding</span>
                </div>
                <div className="flex items-center">
                    <i className="fi fi-rs-clean text-green-500 mr-2 text-xl"></i>
                    <span className="text-sm text-gray-600">Cleaning</span>
                </div>
            </div>
        );
    };
    


    return (
        <div className='bg-grey h-auto relative'>
            <Link to="/education/habitat" className="absolute top-5 right-5 p-3 bg-light-green hover:bg-dark-green text-white rounded-full transition duration-300 ease-in-out px-4 shadow flex items-center justify-center">
                <i className="fi fi-rr-angle-left text-xl"></i>
                <span className="pl-2">Back to Build a Habitat</span>
            </Link>
            <div className='flex flex-col items-center justify-center p-4'>
                <h1 ref={top} className='text-[75px] text-dark-green font-bold text-center mb-4'>Want to keep going?</h1>
                <p className='text-3xl text-center'>We are here to help you make a plan to maintain your habitat <br />Select the date you plan to start the work</p>
                <div className='flex justify-center my-16'>
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

                <h1 className='w-2/3 text-3xl text-dark-green font-noto-sans-tc text-center'>The steps and actions are listed in the calendar below.<br /> Let's get started!</h1>
                <div className='flex mt-10'>
                    <img src={ImgWren} alt="Wren" className='w-1/4 h-auto rounded-full p-20' />

                    <div className='flex-grow w-1/2 '>
                        <Calendar
                            value={startDate}
                            tileContent={({ date, view }) => taskFormatter(date, view)}
                            className="w-full h-full text-xl text-green-700"
                            tileClassName={getTileClassName}                        />
                    </div>
                    <div className='w-1/4 p-4 bg-green-100 rounded-lg shadow-lg'>
                        <h2 className="text-lg text-dark-green font-bold mb-2">Why It Matters</h2>
                        <p className="text-sm text-gray-700">
                            Your efforts in maintaining a backyard habitat are crucial for the survival of the grasswren. Here’s how you can help:
                        </p>
                        <ul className="list-disc pl-5 mt-2 text-sm">
                            <li><strong>Watering (<i className="fi fi-rs-raindrops text-blue-500 mx-2 text-xl"></i>):</strong> Provides a reliable source of fresh water for drinking, especially important during dry spells.</li>
                            <li><strong>Feeding (<i className="fi fi-rs-flower-tulip text-orange mx-2 text-xl"></i>):</strong> Helps supplement the natural diet of Grasswrens, ensuring they get enough nutrients to thrive.</li>
                            <li><strong>Cleaning (<i className="fi fi-rs-clean text-green-500 mx-2 text-xl"></i>):</strong> Reduces risks from predators by keeping the area tidy and free from materials that could hide or attract them.</li>
                        </ul>
                        <p className="text-sm text-gray-700 mt-2">
                            By carefully managing these tasks, you contribute significantly to the conservation of grasswrens in your area.
                        </p>
                    </div>



                </div>

                <TaskLegend />
                <div className='flex justify-center my-10'>
                    {/* <button onClick={scrollToTop} className='btn-light'>Change Date</button> */}
                    <button className='btn-light ml-4' onClick={addToGoogleCalendar}>Add to Google Calendar</button>
                </div>
                {/* Three nav cards */}
                <div className='flex flex-col sm:flex-col md:flex-row gap-8 justify-center m-28'>
                    <NavCard title='threatened grasswren' img={NavCardImg1} link='/grasswren' />
                    <NavCard title='what went wrong' img={NavCardImg3} link='/risk' />
                    {/* <NavCard title='becoming an expert' img={NavCardImg2} link='/education' /> */}
                    <NavCard title='get involved' img={NavCardImg4} link='/involved' />
                </div>
            </div>
        </div>

    );
}

export default PlanPage;

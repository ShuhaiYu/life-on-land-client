import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';


function LoginPage({ onLoginSuccess }) {
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === 'FYJI') { // check password
            onLoginSuccess();
            navigate(from, { replace: true }); // redirect to previous page
        } else {
            alert('Incorrect password');
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
            <div className="max-w-md w-full mx-auto">
                <div className="text-center font-medium text-2xl text-dark-green">Welcome To Wren Guard!</div>
                <div className="bg-white p-8 border border-gray-300 mt-6 rounded-lg shadow-md">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="password" className="text-sm font-medium text-gray-700 block">Password</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                                id="password"
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-light-green focus:border-transparent"
                            />
                        </div>
                        <div>
                            <button type="submit"
                                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-light-green hover:bg-dark-green focus:outline-none focus:ring-2 focus:ring-dark-green focus:ring-offset-2">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default LoginPage;

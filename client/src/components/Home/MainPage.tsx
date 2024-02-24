import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const MainPage: React.FC = () => {
    const [location, setLocation] = useState('');
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');

    const handleSearch = () => {
        // Implement search functionality here
        console.log('Searching for hotels...');
    };

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-screen-lg mx-auto">
                <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-800">
                    Find Your Perfect Stay
                </h1>
                <div className="relative">
                    <img
                        src="https://images.unsplash.com/photo-1455587734955-081b22074882?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Awesome Hotel"
                        className="w-full h-64 object-cover rounded-lg mb-6"
                    />
                    <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                        <h2 className="text-3xl font-semibold mb-3">Book Your Stay Now!</h2>
                        <p className="text-lg">Experience luxury like never before</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <input
                        type="text"
                        placeholder="Enter Location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="border border-gray-300 p-3 rounded-lg w-full md:w-auto focus:outline-none focus:border-blue-500"
                    />
                    <input
                        type="date"
                        placeholder="Check-in Date"
                        value={checkInDate}
                        onChange={(e) => setCheckInDate(e.target.value)}
                        className="border border-gray-300 p-3 rounded-lg w-full md:w-auto focus:outline-none focus:border-blue-500"
                    />
                    <input
                        type="date"
                        placeholder="Check-out Date"
                        value={checkOutDate}
                        onChange={(e) => setCheckOutDate(e.target.value)}
                        className="border border-gray-300 p-3 rounded-lg w-full md:w-auto focus:outline-none focus:border-blue-500"
                    />
                    <button
                        onClick={handleSearch}
                        className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg flex items-center justify-center w-full md:w-auto hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    >
                        <FaSearch className="mr-2" /> Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MainPage;

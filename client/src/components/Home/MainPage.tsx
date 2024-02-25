import React from 'react';
import { FiMapPin, FiCalendar, FiChevronRight } from 'react-icons/fi';

const MainPage = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-center mb-8">Find Your Perfect Stay</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white rounded-lg shadow-md p-8">
                        <img src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdGVsfGVufDB8fDB8fHww" alt="Hotel" className="w-full h-64 object-cover rounded-lg mb-6" />
                        <h2 className="text-xl font-bold mb-2">Hotel Name</h2>
                        <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lorem et nisi tempus consequat.</p>
                        <div className="flex items-center">
                            <FiMapPin className="text-gray-600 mr-2" />
                            <p className="text-gray-600">Location</p>
                        </div>
                        <div className="flex items-center mt-2">
                            <FiCalendar className="text-gray-600 mr-2" />
                            <p className="text-gray-600">Check-in - Check-out Dates</p>
                        </div>
                        <button className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg flex items-center justify-center mt-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                            Book Now <FiChevronRight className="ml-2" />
                        </button>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-8">
                        <img src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdGVsfGVufDB8fDB8fHww" alt="Hotel" className="w-full h-64 object-cover rounded-lg mb-6" />
                        <h2 className="text-xl font-bold mb-2">Hotel Name</h2>
                        <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lorem et nisi tempus consequat.</p>
                        <div className="flex items-center">
                            <FiMapPin className="text-gray-600 mr-2" />
                            <p className="text-gray-600">Location</p>
                        </div>
                        <div className="flex items-center mt-2">
                            <FiCalendar className="text-gray-600 mr-2" />
                            <p className="text-gray-600">Check-in - Check-out Dates</p>
                        </div>
                        <button className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg flex items-center justify-center mt-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                            Book Now <FiChevronRight className="ml-2" />
                        </button>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-8">
                        <img src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdGVsfGVufDB8fDB8fHww" alt="Hotel" className="w-full h-64 object-cover rounded-lg mb-6" />
                        <h2 className="text-xl font-bold mb-2">Hotel Name</h2>
                        <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lorem et nisi tempus consequat.</p>
                        <div className="flex items-center">
                            <FiMapPin className="text-gray-600 mr-2" />
                            <p className="text-gray-600">Location</p>
                        </div>
                        <div className="flex items-center mt-2">
                            <FiCalendar className="text-gray-600 mr-2" />
                            <p className="text-gray-600">Check-in - Check-out Dates</p>
                        </div>
                        <button className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg flex items-center justify-center mt-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                            Book Now <FiChevronRight className="ml-2" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;

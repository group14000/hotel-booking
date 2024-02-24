import React, { useState } from 'react';
import { IoReorderThreeOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white shadow-lg">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center py-4 px-2">
                        <Link to={"*"} className="font-semibold text-gray-800 text-lg">Hotelly</Link>
                    </div>
                    <div className="hidden md:flex space-x-4">
                        <Link to="#" className="py-4 px-2 text-gray-600 hover:text-green-500 transition duration-300">Booking</Link>
                        <Link to="#" className="py-4 px-2 text-gray-600 hover:text-green-500 transition duration-300">Facilities</Link>
                        <Link to="#" className="py-4 px-2 text-gray-600 hover:text-green-500 transition duration-300">About Us</Link>
                        <Link to="#" className="py-4 px-2 text-gray-600 hover:text-green-500 transition duration-300">Location</Link>
                        <Link to="#" className="py-4 px-2 text-gray-600 hover:text-green-500 transition duration-300">Contact</Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-3">
                        <Link to="/login" className="py-2 px-4 font-medium text-white bg-green-500 rounded-full hover:bg-green-400 transition duration-300" type="button">Login</Link>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button className="outline-none mobile-menu-button" onClick={toggleMenu} type="button">
                            <IoReorderThreeOutline className="text-3xl text-gray-800" />
                        </button>
                    </div>
                </div>
            </div>
            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                <Link to="#" className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-200">Booking</Link>
                <Link to="#" className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-200">Facilities</Link>
                <Link to="#" className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-200">About Us</Link>
                <Link to="#" className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-200">Location</Link>
                <Link to="#" className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-200">Contact</Link>
                <Link to="/login" className="block py-2 px-4 text-sm text-white bg-green-500 rounded-full hover:bg-green-400" type="button">Login</Link>
            </div>
        </nav>
    );
};

export default Navbar;

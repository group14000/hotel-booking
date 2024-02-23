import React from 'react';
import { FaFacebook, FaInstagram, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 lg:w-1/4 mb-6 md:mb-0">
                        <p className="text-gray-700 text-sm mb-4">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <div className="flex space-x-4">
                            <Link to="#" className="text-gray-700 hover:text-black" aria-label="Facebook"><FaFacebook /></Link>
                            <Link to="#" className="text-gray-700 hover:text-black" aria-label="Instagram"><FaInstagram /></Link>
                            <Link to="#" className="text-gray-700 hover:text-black" aria-label="Google"><FaGoogle /></Link>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 mb-6 md:mb-0">
                        <h4 className="text-black font-semibold mb-4">Home</h4>
                        <ul className="text-sm">
                            <li><Link to="#" className="text-gray-700 hover:text-black">Booking</Link></li>
                            <li><Link to="#" className="text-gray-700 hover:text-black">Facilities</Link></li>
                            <li><Link to="#" className="text-gray-700 hover:text-black">Location</Link></li>
                            <li><Link to="#" className="text-gray-700 hover:text-black">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 mb-6 md:mb-0">
                        <h4 className="text-black font-semibold mb-4">Help</h4>
                        <ul className="text-sm">
                            <li><Link to="#" className="text-gray-700 hover:text-black">About Us</Link></li>
                            <li><Link to="#" className="text-gray-700 hover:text-black">Help center</Link></li>
                            <li><Link to="#" className="text-gray-700 hover:text-black">Privacy policy</Link></li>
                            <li><Link to="#" className="text-gray-700 hover:text-black">FAQs</Link></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4">
                        <h4 className="text-black font-semibold mb-4">Get the app</h4>
                        <ul className="text-sm">
                            <li><Link to="#" className="text-gray-700 hover:text-black">iOS app</Link></li>
                            <li><Link to="#" className="text-gray-700 hover:text-black">Android app</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

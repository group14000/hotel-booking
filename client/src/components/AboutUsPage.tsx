import React from 'react';
import { useState } from 'react';

const AboutUsPage: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-semibold text-gray-800 mb-4">About Us</h1>
                <div className="flex justify-center mb-6">
                    <img src="https://plus.unsplash.com/premium_photo-1682089297123-85459da8036b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGhvdGVsfGVufDB8fDB8fHww" alt="Hotel Exterior" className="w-full max-w-lg rounded-lg shadow-lg" />
                </div>
                <p className="text-gray-700 mb-6">
                    Welcome to our luxury hotel! We aim to provide our guests with an unforgettable experience
                    that combines comfort, style, and exceptional service. Our dedicated team is committed to
                    ensuring that your stay with us is nothing short of perfect.
                </p>
                <p className="text-gray-700 mb-6">
                    At our hotel, we offer a range of amenities and services designed to cater to your every
                    need. From elegantly appointed rooms and suites to gourmet dining options and relaxing
                    spa treatments, we have everything you need for a relaxing and enjoyable stay.
                </p>
                <p className="text-gray-700 mb-6">
                    Whether you're traveling for business or pleasure, our goal is to exceed your expectations
                    and provide you with a truly memorable experience. We look forward to welcoming you to our
                    hotel and making your stay with us a truly unforgettable one.
                </p>
                <div className="flex justify-center">
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        Meet Our Team
                    </button>
                </div>
                {isOpen && (
                    <div className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Team</h2>
                        <p className="text-gray-700">
                            Our team consists of highly trained professionals who are passionate about hospitality
                            and dedicated to ensuring that every guest has an exceptional experience. From our
                            front desk staff to our housekeeping team, every member of our team plays a crucial
                            role in creating a welcoming and comfortable atmosphere for our guests.
                        </p>
                        <p className="text-gray-700 mt-4">
                            We believe that great service starts with great people, which is why we invest in
                            training and development to ensure that our team members have the skills and knowledge
                            they need to succeed. Whether you have a question about local attractions or need
                            assistance with a special request, our team is always here to help.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AboutUsPage;

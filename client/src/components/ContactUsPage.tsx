import React from 'react';

const ContactUsPage: React.FC = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-semibold text-gray-800 mb-4">Contact Us</h1>
                <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start">
                    <div className="lg:w-1/2 mb-8 lg:mb-0">
                        <img src="https://plus.unsplash.com/premium_photo-1687995672195-0676a1e1d4f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGhvdGVsfGVufDB8fDB8fHww" alt="Contact Us" className="w-full max-w-lg rounded-lg shadow-lg" />
                    </div>
                    <div className="lg:w-1/2 lg:ml-8">
                        <p className="text-gray-700 mb-6">
                            We'd love to hear from you! Whether you have a question about our hotel, need assistance
                            with a reservation, or have feedback on your recent stay, our team is here to help.
                            Please feel free to reach out to us using the contact information below, and we'll
                            get back to you as soon as possible.
                        </p>
                        <div className="flex items-center mb-4">
                            <svg
                                className="h-6 w-6 text-gray-600 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                ></path>
                            </svg>
                            <p className="text-gray-700">123 Main Street, Cityville, State, Zip Code</p>
                        </div>
                        <div className="flex items-center mb-4">
                            <svg
                                className="h-6 w-6 text-gray-600 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                ></path>
                            </svg>
                            <p className="text-gray-700">Phone: +123 456 789</p>
                        </div>
                        <div className="flex items-center mb-4">
                            <svg
                                className="h-6 w-6 text-gray-600 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                ></path>
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 12l-2 2-2-2"
                                ></path>
                            </svg>
                            <p className="text-gray-700">Email: info@example.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsPage;

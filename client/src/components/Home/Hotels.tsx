import React from 'react';
import { Link } from 'react-router-dom';

const hotels = [
    {
        name: "Danubius Hotel Regents Park",
        price: "$200 Per Night",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8fDA%3D", // Replace with actual image URL
    },
    {
        name: "The Resident Soho",
        price: "$200 Per Night",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8fDA%3D", // Replace with actual image URL
    },
    {
        name: "London Bridge Hotel",
        price: "$200 Per Night",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8fDA%3D", // Replace with actual image URL
    },
];

const HotelCard = ({ hotel }) => (
    <div className="w-72 m-2 bg-white rounded-lg shadow-md">
        <img src={hotel.image} alt={hotel.name} className="rounded-t-lg w-full h-40 object-cover" />
        <div className="p-4">
            <p className="text-sm text-gray-500">London NW8 7JT England</p>
            <h3 className="font-bold text-xl mb-2">{hotel.name}</h3>
            <p className="text-lg mb-2">{hotel.price}</p>
            <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-yellow-500 ${i < hotel.rating ? 'text-yellow-500' : 'text-gray-300'}`}>&#9733;</span>
                ))}
                <span className="ml-2">{hotel.rating}</span>
            </div>
        </div>
    </div>
);

const Hotels = () => (
    <div className="container mx-auto p-4 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4 text-center">Our most popular Hotels</h1>
        <p className="text-lg mb-4 text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

        <div className="flex flex-wrap justify-center">
            {hotels.map((hotel, index) => (
                <HotelCard key={index} hotel={hotel} />
            ))}
        </div>

        <Link to={"/booking-hotel-list"} className="block text-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4">View All</Link>
    </div>
);

export default Hotels;

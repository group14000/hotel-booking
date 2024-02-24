import React from 'react';

type HotelCardProps = {
    hotelImage: string;
    hotelName: string;
};

const HotelCard: React.FC<HotelCardProps> = ({ hotelImage, hotelName }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4">
            <img
                src={hotelImage}
                alt="Hotel Pool"
                className="w-full h-40 object-cover rounded-t-lg sm:h-64"
            />
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{hotelName}</h3>
                <p className="text-gray-600 text-sm mb-4">
                    Easy to enjoy, easy to prepare. Healthy & could be fun. Every single day is pretty healthy & could be fun. Every single day is pleasure.
                </p>
                <button className="bg-green-500 text-white px-4 py-2 rounded-md w-full mb-2">
                    Book Now
                </button>
            </div>
        </div>
    );
};

export default HotelCard;

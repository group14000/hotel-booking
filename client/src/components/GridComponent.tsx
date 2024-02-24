import React from 'react';
import HotelCard from './HotelCard'; // Import the HotelCard component
import hotelCardImage from "../assets/hotelcard.jpg";

const GridComponent: React.FC = () => {
    // Dummy data for demonstration
    const hotels = [
        { id: 1, name: "Hotel 1" },
        { id: 2, name: "Hotel 2" },
        { id: 3, name: "Hotel 3" },
        { id: 4, name: "Hotel 4" },
        { id: 5, name: "Hotel 5" },
        { id: 6, name: "Hotel 6" },
        { id: 7, name: "Hotel 7" },
        { id: 8, name: "Hotel 8" },
        { id: 9, name: "Hotel 9" },
        { id: 10, name: "Hotel 10" },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {hotels.map((hotel) => (
                <HotelCard
                    key={hotel.id}
                    hotelImage={hotelCardImage} // Pass the image as a prop
                    hotelName={hotel.name} // Pass the hotel name as a prop
                />
            ))}
        </div>
    );
};

export default GridComponent;

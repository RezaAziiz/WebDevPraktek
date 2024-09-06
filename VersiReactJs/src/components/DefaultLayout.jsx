import React from 'react';
import SearchBar from './SearchBar'; // Adjust the path if needed

// Import the image icon
import logo from '../assets/logo.png'; // Adjust the path to your image

const DefaultLayout = ({ children }) => {
    return (
        <>
            <div className="bg-gray-900 min-h-screen relative"> {/* Apply Tailwind background and height class */}
                {/* Add a container for the icon */}
                <div className="absolute top-0 left-0 p-4">
                    {/* Display the image */}
                    <img src={logo} alt="Logo" className="h-30 w-40" /> {/* Adjust size as needed */}
                </div>

                {/* Search bar and main content */}
                
                <main>
                    {children}
                </main>
            </div>
        </>
    );
};

export default DefaultLayout;

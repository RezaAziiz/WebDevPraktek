import React from 'react';
import SearchMovie from './SearchMovie'; // Adjust the path if needed

const DefaultLayout = ({ children }) => {
    return (
        <>
            <div className="bg-gray-900 min-h-screen"> {/* Apply Tailwind background and height class */}
                <SearchMovie />
                <main>
                    {children}
                </main>
            </div>
        </>
    );
};

export default DefaultLayout;

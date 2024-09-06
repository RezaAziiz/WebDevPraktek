import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

function SearchBar() {
    return (
        <div className="flex justify-center items-center h-20">
            <div className="flex items-center bg-white rounded-full px-5 py-2 shadow-md">
                <input
                    type="text"
                    placeholder="Search"
                    className="border-separate outline-none text-lg mr-2 w-80"
                />
                <i className="fas fa-search text-5xls text-gray-500"></i> {/* Font Awesome search icon */}
            </div>
        </div>
    );
}

export default SearchBar;

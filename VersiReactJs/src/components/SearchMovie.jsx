import React from 'react';

function SearchMovie() {
    const containerStyle = {

        padding: "15px",
        display: "flex",
        justifyContent: "center", // Center the search bar
        alignItems: "center",
        height: "10vh", // Optional: Set the height to full view
    };

    const searchBarStyle = {
        display: "flex",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: "50px",
        padding: "10px 20px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)"
    };

    const inputStyle = {
        border: "none",
        outline: "none",
        fontSize: "16px",
        marginRight: "10px",
        width: "300px" 
    };

    const iconStyle = {
        fontSize: "18px",
        color: "#444",
    };

    return (
        <div style={containerStyle}>
            <div style={searchBarStyle}>
                <input
                    type="text"
                    placeholder="Search"
                    style={inputStyle}
                />
                <i className="fa fa-search" style={iconStyle}></i> {/* Font Awesome search icon */}
            </div>
        </div>
    );
}

export default SearchMovie;

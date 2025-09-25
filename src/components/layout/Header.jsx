import React from "react";

const Header = ({ title, children }) => {
    return (
        <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{title}</h1>
            {children}
        </div>
    );
};

export default Header;

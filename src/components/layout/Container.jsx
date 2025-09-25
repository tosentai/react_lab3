import React from "react";

const Container = ({ children, maxWidth = "md" }) => {
    const widthClasses = {
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
        xl: "max-w-xl",
    };

    return (
        <div className={`w-full ${widthClasses[maxWidth]} mx-auto`}>
            {children}
        </div>
    );
};

export default Container;

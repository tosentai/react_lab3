import React from "react";
import Header from "./Header";
import Container from "./Container";

const Layout = ({ children, title, headerContent }) => {
    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center">
                    <Header title={title}>{headerContent}</Header>
                    <Container>{children}</Container>
                </div>
            </div>
        </div>
    );
};

export default Layout;

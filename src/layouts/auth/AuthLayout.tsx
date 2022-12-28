import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
    return (
        <div className="min-h-screen justify-center flex items-center bg-gray-300">
            <Outlet />
        </div>
    );
};

export default AuthLayout;

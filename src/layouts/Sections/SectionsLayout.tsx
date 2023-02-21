import React from "react";
import { Outlet } from "react-router-dom";

const SectionsLayout = () => {
	return (
		// <div className="min-h-screen flex justify-center items-center bg-white">
		<>
			<Outlet />
		</>
	);
};

export default SectionsLayout;

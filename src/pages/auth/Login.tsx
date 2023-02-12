import React, { useState, useEffect } from "react";
import LoginCard from "./components/LoginCard";

function Login() {
	// const [username, setUsername] = useState<String>("");
	// const [password, setPassword] = useState<String>("");
	// const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(false);
	// const [error, setError] = useState<String>("");

	// useEffect(() => {
	// 	const user = sessionStorage.getItem("user");
	// 	if (user) {
	// 		setIsLoggedIn(true);
	// 	}
	// }, []);
	return (
	<div className="pb-20 flex flex-col">
		{/* <ul className="flex justify-center"> */}
			{/* <li className="pb-28"> */}
				<LoginCard />
			{/* </li> */}
		{/* </ul> */}
	</div>
	)
}

export default Login;

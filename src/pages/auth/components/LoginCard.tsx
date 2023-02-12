import React, { useState } from "react";
import {
	RiMailLine,
	RiLockLine,
	RiEyeLine,
	RiEyeOffLine
} from "react-icons/ri";

const LoginCard = () => {
	// const [showPassword, setShowPassword] = useState<Boolean>(false);
	// const handleShowPassword = () => {
	// 	setShowPassword(!showPassword);
	// };
	return (
		<div className="bg-white p-8 rounded-lg drop-shadow-xl">
			<div className="mb-10">
				<h1 className="text-3x1 uppercase font-bold mb-4">Sign In</h1>
				<form className="flex flex-col gap-4">
					<div className="relative">
						<RiMailLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 " />
						<input
							type="email"
							className="w-full border border-green-200 outline-none py-2 px-8 rounded-lg mb-2"
							id="email"
							placeholder="E-mail"
							required
						/>
					</div>
					<div className="relative">
						<RiLockLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
						<input
							type="password"
							// type={showPassword ? "text" : "password"}
							className="w-full border border-green-200 outline-none py-2 px-8 rounded-lg"
							id="password"
							placeholder="Password"
							required
						/>
						{/* {showPassword ? (
							<RiEyeOffLine
								onClick={handleShowPassword}
								className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer"
							/>
						) : (
							<RiEyeLine
								onClick={handleShowPassword}
								className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer"
							/>
						)} */}
					</div>
					<div>
						<button
							className="bg-green-500 text-white py-2 px-6 rounded-lg w-full hover:bg-green-400 transition-colors duration-300"
							type="submit"
						>
							Sign In
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default LoginCard;

import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

interface Options {
	name: string;
	link: string;
}
interface Iprops {
	options: Options[];
}

function Navbar({ options }: Iprops): JSX.Element {
	const [nav, setNav] = useState(false);
	const handleNav = () => {
		setNav(!nav);
	};

	return (
		<nav className="flex justify-between items-center h-24 max-w-[1980px] mx-auto px-4 text-white bg-black">
			<h1 className="w-full text-3xl font-bold text-green-300">
				Raikonif Portfolio
			</h1>
			<ul className="hidden md:flex">
				<Link to="/">
					<li className="p-4">Home</li>
				</Link>
				<Link to="auth/login">
					<li className="p-4">Blog</li>
				</Link>
				<Link to="/skills">
					<li className="p-4">Skills</li>
				</Link>
				<Link to="/Contact">
					<li className="p-4">Contact</li>
				</Link>
				<Link to="/About">
					<li className="p-4">About</li>
				</Link>
			</ul>
			<nav onClick={handleNav} className="block md:hidden">
				{nav ? (
					<AiOutlineClose size={20} />
				) : (
					<AiOutlineMenu size={20} />
				)}
			</nav>
			<ul
				className={
					nav
						? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-black ease-in-out duration-500"
						: "ease-in-out duration-500 fixed left-[-100%]"
				}
			>
				{/* <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1> */}
				<li className="p-4 border-b border-gray-600">Home</li>
				<li className="p-4 border-b border-gray-600">Home</li>
				<li className="p-4 border-b border-gray-600">Company</li>
				<li className="p-4 border-b border-gray-600">Resources</li>
				<li className="p-4 border-b border-gray-600">About</li>
				<li className="p-4">Contact</li>
			</ul>
		</nav>
	);
}

export default Navbar;

import { content } from "../../Content";
import { HiMenuAlt2 } from "react-icons/hi";
import { createElement } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
function Navbar() {
	const { nav } = content;
	const { pathname } = useLocation();
	const [showMenu, setShowMenu] = useState(true);
	const [active, setActive] = useState(0);
	// {
	// 	i === active && " bg-dark_primary text-white"
	// }
	return (
		<div className="w-full flex justify-center">
			<div
				onClick={() => setShowMenu(!showMenu)}
				className="cursor-pointer fixed top-10 left-10 z-[999] rounded-lg bg-white/40 p-2"
			>
				<HiMenuAlt2 size={34} />
			</div>
			<nav
				className={`fixed z-[999] flex items-center gap-5 bg-slate-200/60 px-6 py-3 backdrop-blur-md rounded-full text-dark_primary duration-300 ${
					showMenu ? "bottom-10" : "bottom-[-100%]"
				}`}
			>
				{nav.map((item, i) => (
					<a
						href={item.link}
						key={i}
						onClick={() => {
							setActive(active);
						}}
						className={`text-xl p-2.5 rounded-full sm:cursor-pointer `}
					>
						{createElement(item.icon)}
					</a>
				))}
			</nav>
		</div>
	);
}

export default Navbar;

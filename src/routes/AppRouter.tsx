import { Route, Routes } from "react-router-dom";
import AuthLayout from "../layouts/auth/AuthLayout";
import SectionsLayout from "../layouts/Sections/SectionsLayout";
import About from "../pages/About/About";
import ChangePassword from "../pages/auth/ChangePassword";
import ForgetPassword from "../pages/auth/ForgetPassword";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home";
import Skills from "../pages/Skills/Skills";
import Error from "../pages/404";
import Navbar from "../layouts/portfolio/Navbar";
import options from "../layouts/portfolio/options";

const AppRouter = () => {
	return (
		<>
			<Navbar options={options} />
			<Routes>
				<Route path="/" element={<SectionsLayout />}>
					<Route index element={<Home />} />
					<Route path="Blog" element={<Blog />} />
					<Route path="Contact" element={<Contact />} />
					<Route path="About" element={<About />} />
					<Route path="Skills" element={<Skills />} />
				</Route>
				<Route path="/auth" element={<AuthLayout />}>
					<Route path="login" element={<Login />} />
					<Route path="register" element={<Register />} />
					<Route
						path="forget-password"
						element={<ForgetPassword />}
					/>
					<Route
						path="change-password/:token"
						element={<ChangePassword />}
					/>
				</Route>

				<Route path="*" element={<Error />} />
			</Routes>
		</>
	);
};

export default AppRouter;

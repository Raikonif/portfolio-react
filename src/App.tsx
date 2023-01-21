import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
//layouts
import AuthLayout from "./layouts/auth/AuthLayout";
//pages
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgetPassword from "./pages/auth/ForgetPassword";
import ChangePassword from "./pages/auth/ChangePassword";
import Error from "./pages/404";
import Home from "./pages/Home";
import Navbar from "./layouts/portfolio/Navbar";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<AuthLayout />}>
					<Route index element={<Home />} />
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
					<Route path="Blog" element={<Blog />} />
					<Route path="Contact" element={<Contact />} />
					<Route path="About" element={<About />} />
					<Route path="Skills" element={<Skills />} />
				</Route>

				{/* <Route path="navbar" element={<Navbar />} /> */}
				<Route path="*" element={<Error />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;

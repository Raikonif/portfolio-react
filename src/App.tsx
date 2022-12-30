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

const App = () => {
    return (
        
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<AuthLayout />}>
                    <Route index element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="forget-password" element={<ForgetPassword />} />
                    <Route path="change-password/:token" element={<ChangePassword />} />
                </Route>
                
                <Route path="navbar" element={<Navbar />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;

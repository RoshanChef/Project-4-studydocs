import React, { useState } from "react";
import { NavLink, Route, Router, Routes, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

const App = () => {
	const [isLoginIn, setIsLoggedIn] = useState(false);
	return (
		<div className="w-full min-h-screen bg-slate-950 flex flex-col overflow-hidden ">
			<Navbar isLoginIn={isLoginIn} setIsLoggedIn={setIsLoggedIn} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
				<Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
				<Route path="/dashboard" element={<Dashboard />} />
			</Routes>
		</div>
	)

};

export default App;

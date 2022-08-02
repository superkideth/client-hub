import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DisplayPage from "./pages/DisplayPage";
import LoginUserPage from "./pages/LoginUserPage";
import DashboardPage from "./pages/DashboardPage";
import LoginDisplayPage from "./pages/LoginDisplayPage";
import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<DashboardPage />} exact />
				<Route path="/login" element={<LoginUserPage />} exact />
				<Route path="/display" element={<LoginDisplayPage />} exact />
				<Route path="/display/:id" element={<DisplayPage />} exact />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

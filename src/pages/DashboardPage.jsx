import React, { useEffect } from "react";
import Dashboard from "../components/Dashboard";
import Navbar from "../components/Navbar";
import { useGlobalStateContext } from "../context/globalContext";
import { ToastContainer } from "react-toastify";

const DashboardPage = () => {
	const { user } = useGlobalStateContext();

	console.log(user);

	useEffect(() => {
		if (user === null) {
			window.open("/login", "_self");
		}
	}, []);

	return (
		<>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			{user !== null ? <Navbar /> : null}
			<Dashboard />
		</>
	);
};

export default DashboardPage;

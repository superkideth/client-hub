import React, { useEffect } from "react";
import Activity from "../components/Activity";
import Navbar from "../components/Navbar";
import { useGlobalStateContext } from "../context/globalContext";
import { ToastContainer } from "react-toastify";

const ActivityPage = () => {
	const { user } = useGlobalStateContext();

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
			{user !== null ? <Activity /> : null}
		</>
	);
};

export default ActivityPage;

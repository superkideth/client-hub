import React from "react";
import LoginDisplay from "../components/LoginDisplay";
import { ToastContainer } from "react-toastify";

const LoginDisplayPage = () => {
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
			<LoginDisplay />
		</>
	);
};

export default LoginDisplayPage;

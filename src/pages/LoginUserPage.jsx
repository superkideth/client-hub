import React, { useEffect } from "react";
import Login from "../components/Login";
import { useGlobalStateContext } from "../context/globalContext";
import { ToastContainer } from "react-toastify";

const LoginUserPage = () => {
	const { user } = useGlobalStateContext();

	useEffect(() => {
		if (user !== null) {
			window.open("/", "_self");
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
			<Login />
		</>
	);
};

export default LoginUserPage;

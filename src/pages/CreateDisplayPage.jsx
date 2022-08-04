import React, { useEffect } from "react";
import ModifyDisplay from "../components/ModifyDisplay";
import Navbar from "../components/Navbar";
import { useGlobalStateContext } from "../context/globalContext";
import { ToastContainer } from "react-toastify";

const CreateDisplayPage = () => {
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
			{user !== null ? <ModifyDisplay /> : null}
		</>
	);
};

export default CreateDisplayPage;

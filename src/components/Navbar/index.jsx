import React from "react";
import { NavbarContainer } from "./NavbarElements";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Navbar = () => {
	const handleLogout = async () => {
		const logoutEndpoint = "http://localhost:8000/user/logout";
		await axios
			.post(logoutEndpoint)
			.then((response) => {
				console.log(response.data);
				window.localStorage.clear();
				window.open("/login", "_self");
			})
			.catch((error) => {
				console.log(error);
				toast.error(error.message);
			});
	};

	return (
		<NavbarContainer>
			<a href="/">Dashboard</a>
			<button onClick={handleLogout}>Logout</button>
		</NavbarContainer>
	);
};

export default Navbar;

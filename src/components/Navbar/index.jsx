import React, { useState } from "react";
import { NavbarContainer, NavHeader } from "./NavbarElements";
import MobileNav from "./MobileNav";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useGlobalStateContext } from "../../context/globalContext";
import NavLogoPreview from "./NavLogoPreview";

const Navbar = () => {
	const [openMenu, setOpenMenu] = useState(false);
	const { user } = useGlobalStateContext();

	const handleLogout = async () => {
		const logoutEndpoint = "/user/logout";
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

	const handleAdminClientSelection = () => {
		window.localStorage.setItem(
			"chooseClient",
			JSON.stringify({
				chooseClient: false,
				clientId: null,
			})
		);
		window.open("/", "_self");
	};

	return (
		<NavbarContainer>
			<NavLogoPreview
				user={user}
				handleAdminClientSelection={handleAdminClientSelection}
			/>

			<NavHeader>
				<a href="/">Dashboard</a>
				<a href="/activity">Activity</a>
				<a href="/display/modify">MODIFY</a>
				<button onClick={handleLogout}>Logout</button>
			</NavHeader>

			<MobileNav
				openMenu={openMenu}
				setOpenMenu={setOpenMenu}
				handleLogout={handleLogout}
				isAdmin={user.is_admin}
			/>
		</NavbarContainer>
	);
};

export default Navbar;

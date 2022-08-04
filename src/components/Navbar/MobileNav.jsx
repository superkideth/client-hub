import React from "react";
import {
	MenuContainer,
	CloseIcon,
	MobileMenu,
	MenuIcon,
	SocialWrap,
} from "./NavbarElements";
import { FaInstagram } from "react-icons/fa";

const MobileNav = ({ openMenu, setOpenMenu, handleLogout, isAdmin }) => {
	return (
		<MobileMenu>
			<button onClick={() => setOpenMenu(!openMenu)}>
				<MenuIcon />
			</button>
			<MenuContainer openMenu={openMenu}>
				<CloseIcon onClick={() => setOpenMenu(!openMenu)} />
				<a href="/">Dashboard</a>
				<a href="/activity">Activity</a>
				<a href="/display/modify">MODIFY</a>
				<button onClick={handleLogout}>Logout</button>

				<SocialWrap>
					<a
						href="https://www.instagram.com/superxlabs"
						target="_blank"
						rel="noreferrer"
					>
						<FaInstagram />
					</a>
					<a href="https://www.superxlabs.io" target="_blank" rel="noreferrer">
						<h6>super.</h6>
					</a>
				</SocialWrap>

				<span>
					This app runs locally on client's network. It's security depends on
					the network.
				</span>
			</MenuContainer>
		</MobileMenu>
	);
};

export default MobileNav;

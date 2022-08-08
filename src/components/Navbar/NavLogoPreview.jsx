import React from "react";
import { LogoFlexContainer, AdminFlexCont } from "./NavbarElements";

const NavLogoPreview = ({ user, handleAdminClientSelection }) => {
	return (
		<>
			{user.is_admin ? (
				<AdminFlexCont onClick={handleAdminClientSelection}>
					<span>[ADMIN]</span>
					<LogoFlexContainer>
						<h4>PANDORA</h4>
						<h6>powered by super.</h6>
					</LogoFlexContainer>
				</AdminFlexCont>
			) : (
				<LogoFlexContainer onClick={() => window.open("/", "_self")}>
					<h4>PANDORA</h4>
					<h6>powered by super.</h6>
				</LogoFlexContainer>
			)}
		</>
	);
};

export default NavLogoPreview;

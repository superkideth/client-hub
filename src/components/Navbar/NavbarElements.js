import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";

export const NavbarContainer = styled.div`
	display: flex;
	width: 100%;
	height: 70px;
	align-items: center;
	justify-content: space-between;

	a {
		font-size: 14px;
		color: inherit;
		margin: 10px;
		padding: 15px;
		text-decoration: none;
		text-transform: uppercase;
		cursor: pointer;
		transition: 0.2s ease-in-out;
		border-radius: 10px;
		&:hover {
			background: #363534;
		}
	}

	button {
		font-size: 14px;
		color: inherit;
		margin: 10px;
		padding: 15px;
		text-decoration: none;
		text-transform: uppercase;
		background: none;
		border: none;
		outline: none;
		cursor: pointer;
		transition: 0.2s ease-in-out;
		border-radius: 10px;
		&:hover {
			background: #363534;
		}
	}
`;

export const LogoFlexContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: left;
	h4 {
		font-size: 18px;
		margin: 0 10px;
		padding: 0 15px;
		transition: 0.2s ease-in-out;
		color: #e0ff14;
	}
	h6 {
		margin-left: 7px;
		font-weight: 400;
	}
`;

export const AdminFlexCont = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: left;
	span {
		font-size: 12px;
		margin-left: 10px;
		padding-left: 15px;
		font-weight: 600;
		color: #e0ff14;
	}
`;

export const MenuContainer = styled.div`
	display: ${(props) => (props.openMenu ? "flex" : "none")};
	flex-direction: column;
	width: 100%;
	height: 100%;
	background: #000;
	position: absolute;
	top: 0;
	right: 0;
	align-items: center;
	justify-content: center;

	a {
		width: 100%;
		font-size: 14px;
		color: inherit;
		text-decoration: none;
		text-transform: uppercase;
		text-align: center;
		cursor: pointer;
		transition: 0.2s ease-in-out;
		&:hover {
			background: #525150;
		}
	}
	button {
		width: 100%;
		font-size: 14px;
		color: inherit;
		text-decoration: none;
		text-transform: uppercase;
		text-align: center;
		background: none;
		border: none;
		outline: none;
		cursor: pointer;
		transition: 0.2s ease-in-out;
		&:hover {
			background: #525150;
		}
	}
`;

export const MenuIcon = styled(AiOutlineMenu)`
	width: 20px;
	height: 20px;
`;

export const CloseIcon = styled(AiOutlineClose)`
	display: none;
	width: 20px;
	height: 20px;
	position: absolute;
	top: 25px;
	right: 25px;
	color: #f7f7f7;

	@media screen and (max-width: 768px) {
		display: flex;
	}
`;

export const MobileMenu = styled.div`
	display: none;
	text-align: center;
	span {
		font-size: 10px;
		max-width: 280px;
		position: absolute;
		bottom: 40px;
	}
	@media screen and (max-width: 768px) {
		display: flex;
	}
`;

export const NavHeader = styled.div`
	display: flex;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const SocialWrap = styled.div`
	display: flex;
	margin: 10px 2px;
	color: #f7f7f7;
	align-items: center;
	a {
		color: inherit;
		text-decoration: none;
		font-size: 20px;
	}
	h6 {
		font-size: 16px;
		text-transform: lowercase;
		margin-bottom: 7px;
	}
`;

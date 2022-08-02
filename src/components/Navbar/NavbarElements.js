import styled from "styled-components";

export const NavbarContainer = styled.div`
	display: flex;
	width: 100%;
	height: 80px;
	align-items: center;
	justify-content: flex-end;

	a {
		font-size: 14px;
		color: inherit;
		margin: 10px;
		padding: 15px;
		text-decoration: none;
		text-transform: uppercase;
		cursor: pointer;
		transition: 0.2s ease-in-out;
		&:hover {
			color: #ff066d;
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
		&:hover {
			color: #ff066d;
		}
	}
`;

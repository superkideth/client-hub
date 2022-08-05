import styled from "styled-components";

export const LoginContainer = styled.div`
	display: flex;
	width: 100%;
	height: 100vh;
	align-items: center;
	justify-content: space-evenly;

	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;

export const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: left;
	text-align: left;
	.logo-wrap {
		display: flex;
		align-items: center;
		margin: 5px 0;
		h1 {
			margin-top: 4px;
			font-size: 32px;
		}
		span {
			font-weight: 800;
			font-size: 12px;
			color: #e0ff14;
			margin-top: 5px;
			margin-right: 20px;
		}
		img {
			width: 70px;
			height: 70px;
		}
	}

	p {
		margin: 0 15px;
		font-size: 12px;
		max-width: 210px;
	}

	h4 {
		margin: 0 15px;
		color: #e0ff14;
	}

	@media screen and (max-width: 768px) {
		align-items: center;
		text-align: center;
	}
`;

export const LoginForm = styled.form`
	display: flex;
	flex-direction: column;
	margin: 10px;
	padding: 15px;
	background: #f7f7f7;
	border-radius: 10px;
	color: #000;
	h3 {
		margin: 15px;
		font-size: 16px;
		text-align: center;
		text-decoration: underline;
	}

	p {
		margin: 5px;
		font-size: 14px;
	}

	input {
		outline-width: 0;
		border: 1px solid #000;
		background: transparent;
		padding: 10px 20px;
		margin: 10px;
		font-size: 14px;
		color: #000;
		cursor: pointer;
	}

	button {
		border: 1px solid #000;
		background: transparent;
		outline: none;
		padding: 10px 20px;
		margin: 10px;
		font-size: 14px;
		color: #000;
		cursor: pointer;
		transition: 0.2s ease-in-out;

		&:hover {
			color: #f7f7f7;
			background: #000;
			border: 1px solid #000;
		}
	}

	span {
		font-size: 12px;
		margin: 10px;
		text-align: center;
		a {
			color: blue;
			cursor: pointer;
		}
	}

	@media screen and (max-width: 768px) {
		/* margin-top: -60px; */
	}
`;

export const PsdWrap = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	justify-content: space-between;
	span {
		margin: 5px;
		font-size: 16px;
		cursor: pointer;
		transition: 0.2s ease-in-out;
		svg {
			margin-right: 5px;
		}
		&:hover {
			color: blue;
		}
	}
`;

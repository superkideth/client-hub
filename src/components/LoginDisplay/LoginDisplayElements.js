import styled from "styled-components";

export const LoginContainer = styled.div`
	display: flex;
	width: 100%;
	height: 100vh;
	align-items: center;
	justify-content: center;
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

	button,
	select {
		border: 1px solid #000;
		background: transparent;
		outline: none;
		padding: 10px 20px;
		margin: 10px;
		font-size: 14px;
		color: #000;
		cursor: pointer;
		transition: 0.2s ease-in-out;
		text-transform: uppercase;

		&:hover {
			background: #000;
			color: #f7f7f7;
			border: 1px solid #f7f7f7;
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
`;

export const ClickToConnectButton = styled.button`
	display: flex;
	flex-direction: column;
	outline: none;
	border: none;
	background: none;
	width: 100%;
	height: 100%;
	align-items: center;
	justify-content: center;
	text-align: center;
	cursor: pointer;
	transition: 0.2s ease-in-out;

	h2 {
		color: #e0ff14;
		font-size: 26px;
	}

	h3 {
		color: #f7f7f7;
		font-size: 14px;
		span {
			color: #e0ff14;
		}
	}

	p {
		color: #f7f7f7;
		margin: 5px;
		font-size: 16px;
		max-width: 340px;
	}

	&:hover {
		background: #f7f7f7;
		h2 {
			color: blue;
		}
		h3,
		p {
			color: #000;
			span {
				color: blue;
			}
		}
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

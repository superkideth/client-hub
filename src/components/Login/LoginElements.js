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
	background: #ff066d;
	border-radius: 10px;

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
		border: 1px solid #f4f4f4;
		background: transparent;
		padding: 10px 20px;
		margin: 10px;
		font-size: 14px;
		color: #f4f4f4;
		cursor: pointer;
	}

	button {
		border: 1px solid #f4f4f4;
		background: transparent;
		outline: none;
		padding: 10px 20px;
		margin: 10px;
		font-size: 14px;
		color: #f4f4f4;
		cursor: pointer;
		transition: 0.2s ease-in-out;

		&:hover {
			background: #1b1d1c;
			border: 1px solid #1b1d1c;
		}
	}

	span {
		font-size: 12px;
		margin: 10px;
		text-align: center;
		a {
			color: inherit;
		}
	}
`;

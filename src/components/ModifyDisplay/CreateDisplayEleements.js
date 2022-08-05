import styled from "styled-components";

export const ModifyContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 90vh;
	align-items: center;
	justify-content: center;
`;

export const ModifyFlex = styled.div`
	display: flex;
	flex-direction: column;
	margin: 10px;
	align-items: center;
	justify-content: center;
	h2 {
		margin: 5px;
		text-transform: uppercase;
	}

	select {
		width: 100%;
		height: 100%;
		text-align: center;
		outline-width: 0;
		border: 1px solid #f4f4f4;
		background: transparent;
		padding: 7px 20px;
		margin: 10px;
		font-size: 14px;
		color: #f4f4f4;
		cursor: pointer;
		transition: 0.2s ease-in-out;
		border-radius: 10px;
		text-transform: uppercase;
		&:hover {
			border: 1px solid #525150;
			background: #525150;
		}
	}
`;
export const CreateDisplayContainer = styled.div`
	display: flex;
	width: 100%;
	height: 90vh;
	align-items: center;
	justify-content: center;
`;

export const CreateForm = styled.form`
	display: flex;
	flex-direction: column;
	margin: 10px;
	padding: 15px 25px;
	background: #f7f7f7;
	border-radius: 10px;
	min-width: 350px;
	margin-top: -50px;

	h3 {
		margin: 15px 10px;
		font-size: 16px;
		text-align: center;
		text-decoration: underline;
		color: #000;
	}

	p {
		margin: 5px 10px;
		font-size: 14px;
		color: #000;
		max-width: 300px;
	}

	select {
		outline-width: 0;
		border: 1px solid #000;
		background: transparent;
		padding: 10px 20px;
		margin: 10px;
		font-size: 14px;
		color: #000;
		cursor: pointer;
		transition: 0.2s ease-in-out;
		&:hover {
			background: #000;
			color: #f4f4f4;
		}
	}

	input {
		outline-width: 0;
		border: 1px solid #000;
		background: transparent;
		padding: 10px 20px;
		margin: 10px;
		font-size: 14px;
		color: #000;
		text-transform: lowercase;
		transition: 0.2s ease-in-out;
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
			color: #f4f4f4;
			background: #000;
			border: 1px solid #000;
		}
	}

	span {
		color: #000;
		font-size: 12px;
		margin: 10px;
		text-align: center;
		a {
			color: inherit;
		}
	}

	@media screen and (max-width: 768px) {
		margin-top: -100px;
	}
`;

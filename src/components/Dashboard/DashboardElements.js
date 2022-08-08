import styled from "styled-components";
import { VscArrowLeft } from "react-icons/vsc";

export const DashboardContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 90vh;
	align-items: center;
	justify-content: flex-start;

	h2 {
		margin: 5px;
		text-transform: uppercase;
	}
	span {
		font-size: 12px;
		margin-bottom: 10px;
		padding-bottom: 15px;
	}
`;

export const DisplayInfo = styled.div`
	display: flex;
	width: 100%;
	padding: 15px;

	justify-content: space-evenly;
	background: #e0ff14;
	h6 {
		padding: 0 15px;
		margin: 0 10px;
		color: #000;
	}
`;
export const DashboardWrap = styled.div`
	display: flex;
	width: 100%;
	padding: 15px;
	justify-content: space-between;
	overflow-y: auto;
	color: #000;
	ul {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		grid-column-gap: 10px;
		grid-row-gap: 10px;
		list-style-type: none;
		li {
			display: flex;
			flex-direction: column;
			text-align: center;
			background: #f4f4f4;
			border-radius: 10px;
			color: #1b1d1c;
			margin: 10px;
			transition: 0.2s ease-in-out;
			align-items: center;
			justify-content: center;
			cursor: pointer;

			span {
				font-size: 12px;
				margin: 10px;
				text-transform: uppercase;
			}

			img,
			video {
				width: 200px;
				height: 200px;
				object-fit: cover;
				-o-object-fit: cover;
				border-radius: 10px;
			}

			&:hover {
				background: #e0ff14;
			}
		}
	}
`;

// MODAL
export const Background = styled.div`
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 99;
	background: #000;
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ItemWrap = styled.div`
	width: 100%;
	height: 90vh;
	justify-content: center;
	align-items: center;
`;

export const ModalContent = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	justify-content: space-evenly;
	align-items: center;
	color: #f7f7f7;

	img,
	video {
		width: 300px;
		height: 300px;
		object-fit: cover;
		-o-object-fit: cover;
		border-radius: 10px;
		border: 1px solid #f7f7f7;
	}
`;

export const ModalInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 300px;
	padding: 15px;
	margin-bottom: 10px;
	border-radius: 10px;
	align-items: center;
	margin-top: -20px;
	color: #f7f7f7;
	p {
		font-size: 12px;
		margin: 2px 0;
	}
`;

export const InfoFlex = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	h2 {
		font-size: 12px;
		margin: 2px 0;
		font-weight: 400;
		overflow: hidden;
		max-width: 12.6ch;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
`;

export const CloseModalButton = styled(VscArrowLeft)`
	cursor: pointer;
	position: absolute;
	top: 54px;
	left: 10%;
	width: 20px;
	height: 20px;
	padding: 0;
	margin: 10px;
	color: #f4f4f4;
	transition: all 0.2s ease-in-out;
	&:hover {
		color: #e0ff14;
	}
`;

export const ButtonWrap = styled.form`
	display: flex;
	width: 300px;
	margin-top: -20px;
	button {
		border: 1px solid #f7f7f7;
		background: #f7f7f7;
		outline: none;
		font-size: 12px;
		padding: 10px 15px;
		margin: 0 10px;
		border-radius: 10px;
		cursor: pointer;
		text-transform: uppercase;
		font-weight: 700;
		transition: 0.2s ease-in-out;
		width: 130px;
		color: #000;
		&:hover {
			background: #e0ff14;
			border: 1px solid #e0ff14;
			color: #000;
		}
	}

	select {
		border: 1px solid #f7f7f7;
		background: #f7f7f7;
		outline: none;
		font-size: 12px;
		padding: 10px;
		margin: 0 10px;
		border-radius: 10px;
		cursor: pointer;
		transition: 0.2s ease-in-out;
		width: 130px;
		color: #000;
		text-transform: uppercase;
		&:hover {
			background: #e0ff14;
			border: 1px solid #e0ff14;
			color: #000;
		}
	}
`;

export const SecondBtnWrap = styled.form`
	display: flex;
	width: 300px;
	margin-top: -20px;
	button {
		border: 1px solid #f7f7f7;
		background: #f7f7f7;
		outline: none;
		font-size: 12px;
		padding: 10px 15px;
		margin: 0 10px;
		border-radius: 10px;
		cursor: pointer;
		text-transform: uppercase;
		font-weight: 700;
		transition: 0.2s ease-in-out;
		width: 130px;
		color: #000;
		&:hover {
			background: #e0ff14;
			border: 1px solid #e0ff14;
			color: #000;
		}
	}
`;

// Chose client tab

export const ChoseClientForm = styled.form`
	display: flex;
	flex-direction: column;
	margin: 10px;
	padding: 15px;
	background: #f7f7f7;
	border-radius: 10px;
	color: #000;
	margin-top: 300px;
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

export const ChoseClientContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 90vh;
	align-items: center;
	justify-content: center;
`;

import styled from "styled-components";

export const ActivityContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 90vh;
	align-items: center;
	justify-content: center;

	ul {
		width: 60%;
		height: 40%;
		display: flex;
		flex-direction: column;
		background-color: #f7f7f7;
		border-bottom-right-radius: 20px;
		border-bottom-left-radius: 20px;
		color: #000;
		text-align: center;
		list-style-type: none;
		overflow-y: scroll;

		li {
			display: flex;
			justify-content: space-between;
			padding: 15px 25px;
			border-bottom: 1px solid #000;
			transition: 0.2s ease-in-out;
			cursor: pointer;

			p {
				font-size: 14px;
			}
			span {
				font-size: 14px;
				overflow: hidden;
				max-width: 7ch;
				text-overflow: ellipsis;
				white-space: nowrap;
			}

			&:hover {
				background: #e0ff14;
			}
		}
	}

	@media screen and (max-width: 768px) {
		margin-top: -20px;
		ul {
			width: 90%;
			height: 60%;
			li {
				padding: 15px;
				p {
					font-size: 12px;
				}
				span {
					font-size: 12px;
					max-width: 5ch;
				}
			}
		}
	}
`;

export const InfoWrap = styled.div`
	width: 60%;
	display: flex;
	justify-content: space-between;
	padding: 15px 25px;
	background-color: #f7f7f7;
	border-top-right-radius: 20px;
	border-top-left-radius: 20px;
	color: #000;
	border-bottom: 1px solid #000;
	h4 {
		font-size: 16px;
	}

	@media screen and (max-width: 768px) {
		width: 90%;
		padding: 15px;
	}
`;

import styled from "styled-components";

export const NoMobileAccess = styled.div`
	display: flex;

	@media screen and (max-width: 1560px) {
		display: none;
	}
`;

export const NoAccessContainer = styled.div`
	display: none;
	flex-direction: column;
	width: 100%;
	height: 100vh;
	align-items: center;
	justify-content: center;
	text-align: center;
	h5 {
		color: red;
	}
	p {
		font-size: 14px;
		margin: 5px;
		max-width: 280px;
	}
	@media screen and (max-width: 1160px) {
		display: flex;
	}
`;

export const HeroBg = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
`;

export const VideoBg = styled.video`
	width: 100%;
	height: 100%;
	-o-object-fit: cover;
	object-fit: cover;
	background: #000;
`;

export const BootContainer = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	align-items: center;
	justify-content: center;
	background: #000;
`;

export const BootImg = styled.img`
	width: 600px;
	height: 600px;
	object-fit: cover;
	-o-object-fit: cover;
`;

export const DisplayId = styled.p`
	font-size: 14px;
	color: #f4f4f4;
	overflow: hidden;
	max-width: 11.4ch;
	text-overflow: "";
	white-space: nowrap;
	position: absolute;
	bottom: 20px;
	right: 20px;
`;

import React from "react";
import { InfoContainer } from "./LoginElements";
import logo from "../../assets/bootImg.png";

const LogoContainerPreview = () => {
	return (
		<InfoContainer>
			<h4>PANDORA [:ΠΑΝΔΩΡΑ]</h4>
			<div className="logo-wrap">
				<img src={logo} alt="arcade-logo" />
				<span>x</span>
				<h1>super.</h1>
			</div>
			<p>
				Manage your super digital visuals, tech driven sculptures, immersive
				experiences & more.
			</p>
		</InfoContainer>
	);
};

export default LogoContainerPreview;

import React from "react";
import { LoginContainer, ClickToConnectButton } from "./LoginDisplayElements";

const ClickToConnect = ({ accessLoginForm, setAccessLoginForm }) => {
	return (
		<LoginContainer>
			<ClickToConnectButton
				onClick={() => setAccessLoginForm(!accessLoginForm)}
			>
				<h2>PANDORA</h2>
				<p>
					Manage your super digital visuals, tech driven sculptures & immersive
					experiences & more. <br />
				</p>
				<h3>
					powered by <span>super.</span>
				</h3>
			</ClickToConnectButton>
		</LoginContainer>
	);
};

export default ClickToConnect;

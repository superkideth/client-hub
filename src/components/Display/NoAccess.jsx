import React from "react";
import { NoAccessContainer } from "./DisplayElements";

const NoAccess = () => {
	return (
		<NoAccessContainer>
			<h5>UNAUTHORIZED</h5>
			<p>You can not access this page from external devices.</p>
		</NoAccessContainer>
	);
};

export default NoAccess;

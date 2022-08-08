import React from "react";
import { ModalInfoContainer, InfoFlex } from "./DashboardElements";

const ModalDisplayInfoPreview = ({ display, pendingChanges }) => {
	return (
		<ModalInfoContainer>
			{display.display_name !== null && (
				<InfoFlex>
					<p style={{ fontWeight: "800" }}>DISPLAY NAME:</p>
					<p style={{ color: "#e0ff14" }}>{display.display_name}</p>
				</InfoFlex>
			)}

			<InfoFlex>
				<p style={{ fontWeight: "800" }}>ID:</p>
				<h2 style={{ color: "#e0ff14" }}>{display._id}</h2>
			</InfoFlex>

			<InfoFlex>
				<p style={{ fontWeight: "800" }}>STATUS:</p>
				<p style={{ color: "#e0ff14" }}>
					{display.connected ? "CONNECTED" : "DISCONNECTED"}
				</p>
			</InfoFlex>

			<InfoFlex>
				<p style={{ fontWeight: "800" }}>PENDING CHANGE:</p>
				<p style={{ color: "#e0ff14" }}>{pendingChanges ? "YES" : "NO"}</p>
			</InfoFlex>
		</ModalInfoContainer>
	);
};

export default ModalDisplayInfoPreview;

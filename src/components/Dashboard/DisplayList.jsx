import React from "react";
import { DashboardWrap } from "./DashboardElements";
import { ItemModal } from "./ItemModal";
import DashboardMapDisplays from "./DashboardMapDisplays";
import { Container } from "@mui/material";

const DisplayList = ({ displays, showModal, setShowModal, handleDetails }) => {
	return (
		<Container className="sm">
			<DashboardWrap>
				<DashboardMapDisplays
					displays={displays}
					handleDetails={handleDetails}
				/>
				<ItemModal showModal={showModal} setShowModal={setShowModal} />
			</DashboardWrap>
		</Container>
	);
};

export default DisplayList;

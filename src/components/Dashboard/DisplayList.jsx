import React from "react";
import { DashboardWrap } from "./DashboardElements";
import { ItemModal } from "./ItemModal";
import DashboardMapDisplays from "./DashboardMapDisplays";

const DisplayList = ({ displays, showModal, setShowModal, handleDetails }) => {
	return (
		<DashboardWrap>
			<DashboardMapDisplays displays={displays} handleDetails={handleDetails} />
			<ItemModal showModal={showModal} setShowModal={setShowModal} />
		</DashboardWrap>
	);
};

export default DisplayList;

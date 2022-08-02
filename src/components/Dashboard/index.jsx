import React, { useState, useEffect } from "react";
import {
	DashboardContainer,
	DashboardWrap,
	DisplayInfo,
} from "./DashboardElements";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
	useGlobalDispatchContext,
	useGlobalStateContext,
} from "../../context/globalContext";
import axios from "axios";
import { fakeData } from "./fakeData";
import { ItemModal } from "./ItemModal";

const Dashboard = () => {
	const { user } = useGlobalStateContext();
	const dispatch = useGlobalDispatchContext();

	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		// 1. get available displays from db!
		// 2. get available content from file storage!
	}, []);

	const handleDetails = (_details) => {
		dispatch({ type: "ADD_DISPLAY", display: _details });
		setShowModal(true);
	};

	return (
		<DashboardContainer>
			<h2>WELCOME {user.username}, </h2>
			<span>Manage exhibition displays & more</span>
			<DisplayInfo>
				<h6>Displays Count: {fakeData.length}</h6>
				<h6>Currently Playing: {fakeData.length}</h6>
				<h6>Available: {fakeData.length}</h6>
			</DisplayInfo>
			<DashboardWrap>
				<ul>
					{fakeData.map((item, key) => (
						<li key={key} onClick={() => handleDetails(item)}>
							<span>Id: {item.id}</span>
							<img src="" alt={item.id} />
							<span>
								curr. playing: {item.currently_playing ? "true" : "false"}
							</span>
						</li>
					))}
				</ul>
				<ItemModal showModal={showModal} setShowModal={setShowModal} />
			</DashboardWrap>
		</DashboardContainer>
	);
};

export default Dashboard;

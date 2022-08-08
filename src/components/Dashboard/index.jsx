import React, { useState, useEffect } from "react";
import { DashboardContainer, DisplayInfo } from "./DashboardElements";
import DisplayList from "./DisplayList";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
	useGlobalDispatchContext,
	useGlobalStateContext,
} from "../../context/globalContext";
import axios from "axios";

const Dashboard = () => {
	const { user, displays } = useGlobalStateContext();
	const dispatch = useGlobalDispatchContext();
	const [showModal, setShowModal] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const init = async () => {
			const displaysEndpoint = "/displays";
			await axios
				.get(displaysEndpoint, {
					headers: {
						Authorization: `Bearer ${user.token}`,
					},
				})
				.then((response) => {
					window.localStorage.setItem(
						"displays",
						JSON.stringify(response.data.displays)
					);
					dispatch({ type: "ADD_DISPLAYS", displays: response.data.displays });
					setLoading(false);
				})
				.catch((error) => {
					toast.error(error.message);
					console.log(error);
					setLoading(false);
				});
		};
		init();
	}, []);

	const handleDetails = (_details) => {
		dispatch({ type: "ADD_DISPLAY", display: _details });
		setShowModal(true);
	};

	return (
		<>
			<DashboardContainer>
				{loading ? (
					<h5>Loading..</h5>
				) : (
					displays !== null && (
						<>
							<DisplayInfo>
								<h6>Manage your super visuals, artworks, experiences</h6>
							</DisplayInfo>

							<DisplayList
								displays={displays}
								showModal={showModal}
								setShowModal={setShowModal}
								handleDetails={handleDetails}
							/>
						</>
					)
				)}
			</DashboardContainer>
		</>
	);
};

export default Dashboard;

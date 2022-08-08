import React, { useState, useEffect } from "react";
import {
	DashboardContainer,
	DisplayInfo,
	ChoseClientForm,
} from "./DashboardElements";
import DisplayList from "./DisplayList";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
	useGlobalDispatchContext,
	useGlobalStateContext,
} from "../../context/globalContext";
import axios from "axios";

const AdminDashboard = () => {
	const { user, displays, clients, chooseClient } = useGlobalStateContext();
	const dispatch = useGlobalDispatchContext();

	const [showModal, setShowModal] = useState(false);
	const [loading, setLoading] = useState(true);
	const [clientId, setClientId] = useState(null);

	useEffect(() => {
		const getAllClients = async () => {
			const displaysEndpoint = "/user/all";
			await axios
				.get(displaysEndpoint, {
					headers: {
						Authorization: `Bearer ${user.token}`,
					},
				})
				.then((response) => {
					dispatch({ type: "ADD_CLIENTS", clients: response.data.users });
					setLoading(false);
				})
				.catch((error) => {
					toast.error(error.message);
					console.log(error);
				});
		};
		getAllClients();

		if (chooseClient !== null && chooseClient.clientId !== null) {
			console.log("client has selected");
			getClientDisplays(chooseClient.clientId);
		}
	}, []);

	const handleDetails = (_details) => {
		dispatch({ type: "ADD_DISPLAY", display: _details });
		setShowModal(true);
	};

	const getClientDisplays = async (_clientId) => {
		const displaysEndpoint = `/displays?clientId=${_clientId}`;

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

	const handleChooseClient = (e) => {
		e.preventDefault();
		setLoading(true);

		if (clients !== null) {
			getClientDisplays(clientId);
			window.localStorage.setItem(
				"chooseClient",
				JSON.stringify({
					chooseClient: true,
					clientId: clientId,
				})
			);
			dispatch({
				type: "ADD_CHOOSE_CLIENT",
				chooseClient: { chooseClient: true, clientId: clientId },
			});
		} else {
			toast.error("Clients are empty");
		}
	};

	return (
		<>
			<DashboardContainer>
				{loading ? (
					<h5>Loading..</h5>
				) : chooseClient.chooseClient ? (
					displays !== null && (
						<>
							<DisplayInfo>
								<h6>
									Pandora's Admin connected for client:
									{chooseClient.clientId}
								</h6>
							</DisplayInfo>
							<DisplayList
								displays={displays}
								showModal={showModal}
								setShowModal={setShowModal}
								handleDetails={handleDetails}
							/>
						</>
					)
				) : (
					<ChoseClientForm onSubmit={handleChooseClient}>
						<h3>Choose Client</h3>
						<select required onChange={(e) => setClientId(e.target.value)}>
							<option value="" default>
								choose client
							</option>

							{clients.map((item, key) =>
								item.is_admin === false ? (
									<option key={key} value={item._id}>
										{item.username}
									</option>
								) : null
							)}
						</select>
						<button type="submit">Connect</button>
					</ChoseClientForm>
				)}
			</DashboardContainer>
		</>
	);
};

export default AdminDashboard;

import React, { useState, useEffect, useCallback } from "react";
import {
	Background,
	ItemWrap,
	ModalContent,
	CloseModalButton,
} from "./DashboardElements";
import ModalVisualPreview from "./ModalVisualPreview";
import ModalDisplayInfoPreview from "./ModalDisplayInfoPreview";
import ModalButtonControls from "./ModalButtonControls";
import {
	useGlobalStateContext,
	useGlobalDispatchContext,
} from "../../context/globalContext";
import { sources } from "./data";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export const ItemModal = (props) => {
	const { user, display } = useGlobalStateContext();
	const dispatch = useGlobalDispatchContext();

	const [source, setSource] = useState("");
	const [pendingChanges, setPendingChanges] = useState(false);

	const keyPress = useCallback(
		(e) => {
			if (e.key === "Escape" && props.showModal) {
				props.setShowModal(false);
				// dispatch({ type: "ADD_DISPLAY", display: null });
			}
		},
		[props.setShowModal, props.showModal]
	);

	const closeModal = () => {
		props.setShowModal((prev) => !prev);
		dispatch({ type: "ADD_DISPLAY", display: null });
		window.location.reload();
	};

	const handleUpdate = async (e) => {
		e.preventDefault();
		const updateSourceEndpoint = `/displays/${display._id}/source`;
		const body = {
			source: source,
		};
		await axios
			.put(updateSourceEndpoint, body, {
				headers: {
					Authorization: `Bearer ${user.token}`,
				},
			})
			.then((response) => {
				console.log(response.data);
				toast(response.data.message);
				setPendingChanges(false);
			})
			.catch((error) => {
				toast.error(error.message);
				console.log(error);
			});
	};

	const handleReset = async (e) => {
		e.preventDefault();
		const updateSourceEndpoint = `/displays/${display._id}/source`;
		const body = {
			source: null,
		};
		await axios
			.put(updateSourceEndpoint, body, {
				headers: {
					Authorization: `Bearer ${user.token}`,
				},
			})
			.then((response) => {
				console.log(response.data);
				toast(response.data.message);
			})
			.catch((error) => {
				toast.error(error.message);
				console.log(error);
			});
	};

	const handleResetConnection = async (e) => {
		e.preventDefault();
		const displayNameOrId =
			display.display_name !== null ? display.display_name : display._id;
		if (
			window.confirm(
				`You are going to disconnect: ${displayNameOrId}. Are you sure?`
			)
		) {
			const updateConnectionEndpoint = `/displays/${display._id}/connect`;
			const body = {
				connected: false,
			};
			await axios
				.put(updateConnectionEndpoint, body, {
					headers: {
						Authorization: `Bearer ${user.token}`,
					},
				})
				.then((response) => {
					if (response.data.connected === false) {
						console.log(response.data);
						toast(response.data.message);
					} else {
						toast.error("Connection Error");
					}
				})
				.catch((error) => {
					console.log(error);
					toast.error(error.message);
				});
		} else {
			toast.error("Disconnect Action Canceled");
		}
	};

	useEffect(() => {
		document.addEventListener("keydown", keyPress);
		return () => document.removeEventListener("keydown", keyPress);
	}, [keyPress]);

	useEffect(() => {
		if (source === "") {
			setPendingChanges(false);
		}
	}, [source]);

	return (
		<>
			{props.showModal ? (
				<Background>
					<ItemWrap showModal={props.showModal}>
						<ModalContent>
							<h4>VISUAL PREVIEW</h4>
							<ModalVisualPreview source={source} display={display} />
							<ModalDisplayInfoPreview
								display={display}
								pendingChanges={pendingChanges}
							/>
							<ModalButtonControls
								handleUpdate={handleUpdate}
								setSource={setSource}
								setPendingChanges={setPendingChanges}
								sources={sources}
								handleReset={handleReset}
								handleResetConnection={handleResetConnection}
							/>
						</ModalContent>
						<CloseModalButton onClick={closeModal} />
					</ItemWrap>
				</Background>
			) : null}
		</>
	);
};

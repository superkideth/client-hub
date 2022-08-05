import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import {
	Background,
	ButtonWrap,
	ItemWrap,
	ModalContent,
	SecondBtnWrap,
	ModalInfoContainer,
	InfoFlex,
} from "./DashboardElements";
import {
	useGlobalStateContext,
	useGlobalDispatchContext,
} from "../../context/globalContext";
import { VscArrowLeft } from "react-icons/vsc";
import { sources } from "./data";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const CloseModalButton = styled(VscArrowLeft)`
	cursor: pointer;
	position: absolute;
	top: 54px;
	left: 10%;
	width: 20px;
	height: 20px;
	padding: 0;
	margin: 10px;
	color: #f4f4f4;
	transition: all 0.2s ease-in-out;
	&:hover {
		color: #e0ff14;
	}
`;

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
							{source === ""
								? display.source === null && (
										<img
											src={require(`../../assets/${display.boot_file}`)}
											alt={display._id}
										/>
								  )
								: null}

							{source === "" ? (
								display.source !== null && (
									<video
										src={require(`../../assets/${display.source}`)}
										type="video/mp4"
										autoPlay
										loop
										muted
									/>
								)
							) : (
								<video
									src={require(`../../assets/${source}`)}
									type="video/mp4"
									autoPlay
									loop
									muted
								/>
							)}

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
									<p style={{ color: "#e0ff14" }}>
										{display.connected ? "NO" : "YES"}
									</p>
								</InfoFlex>
							</ModalInfoContainer>

							<ButtonWrap onSubmit={handleUpdate}>
								<select
									required
									onChange={(e) => {
										setSource(e.target.value);
										setPendingChanges(true);
									}}
								>
									<option value={""} default>
										default
									</option>

									{sources.map((item, key) => (
										<option key={key} value={item.href}>
											{item.name}
										</option>
									))}
								</select>
								<button type="submit">Update</button>
							</ButtonWrap>

							<SecondBtnWrap>
								<button onClick={handleReset}>reset source</button>
								<button onClick={handleResetConnection}>Disconnect</button>
							</SecondBtnWrap>
						</ModalContent>

						<CloseModalButton onClick={closeModal} />
					</ItemWrap>
				</Background>
			) : null}
		</>
	);
};

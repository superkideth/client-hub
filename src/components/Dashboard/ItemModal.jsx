import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import {
	Background,
	ButtonWrap,
	ItemWrap,
	ModalContent,
} from "./DashboardElements";
import {
	useGlobalStateContext,
	useGlobalDispatchContext,
} from "../../context/globalContext";
import { VscArrowLeft } from "react-icons/vsc";
import { fakeSource } from "./fakeData";

const CloseModalButton = styled(VscArrowLeft)`
	cursor: pointer;
	position: absolute;
	top: 10%;
	left: 10%;
	width: 24px;
	height: 24px;
	padding: 0;
	color: #f4f4f4;
	transition: all 0.2s ease-in-out;
	&:hover {
		color: #ff066d;
	}
`;

export const ItemModal = (props) => {
	const { display } = useGlobalStateContext();
	const dispatch = useGlobalDispatchContext();
	const [source, setSource] = useState(null);

	const keyPress = useCallback(
		(e) => {
			if (e.key === "Escape" && props.showModal) {
				props.setShowModal(false);
				dispatch({ type: "ADD_DISPLAY", display: null });
			}
		},
		[props.setShowModal, props.showModal]
	);

	const closeModal = () => {
		props.setShowModal((prev) => !prev);
		dispatch({ type: "ADD_DISPLAY", display: null });
	};

	const handleUpdate = async (e) => {
		e.preventDefault();
		// update for display id the source and the turn the currently_playing to true!
		console.log(`Updating display id: ... with source ${source}`);
	};

	useEffect(() => {
		document.addEventListener("keydown", keyPress);
		return () => document.removeEventListener("keydown", keyPress);
	}, [keyPress]);

	return (
		<>
			{props.showModal ? (
				<Background>
					<ItemWrap showModal={props.showModal}>
						<ModalContent>
							<h4>PREVIEW: </h4>
							<video autoPlay loop muted src="" type="video/mp4" />
							<p>DISPLAY ID: {display.id}</p>

							<ButtonWrap onSubmit={handleUpdate}>
								<select required onChange={(e) => setSource(e.target.value)}>
									<option value={null} default>
										choose source
									</option>

									{fakeSource.map((item, key) => (
										<option key={key} value={item.href}>
											{item.name}
										</option>
									))}
								</select>
								<button type="submit">Update</button>
							</ButtonWrap>
						</ModalContent>

						<CloseModalButton onClick={closeModal} />
					</ItemWrap>
				</Background>
			) : null}
		</>
	);
};

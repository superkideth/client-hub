import React, { useState, useEffect } from "react";
import {
	useGlobalStateContext,
	useGlobalDispatchContext,
} from "../../context/globalContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CreateDisplayContainer, CreateForm } from "./CreateDisplayEleements";
import axios from "axios";

const EditNameDisplay = () => {
	const { user, displays, loading } = useGlobalStateContext();
	const dispatch = useGlobalDispatchContext();
	const [display, setDisplay] = useState(null);
	const [name, setName] = useState(null);

	useEffect(() => {
		const init = async () => {
			const displaysEndpoint = "http://localhost:8000/displays";
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
				})
				.catch((error) => {
					toast.error(error.message);
					console.log(error);
				});
		};
		init();
	}, []);

	const handleUpdateName = async (e) => {
		e.preventDefault();

		if (display === "default") {
			setDisplay(null);
		}

		if (display !== null && name !== null) {
			const updateNameDisplayEndpoint = `http://localhost:8000/displays/${display}/name`;

			const body = {
				displayName: name,
			};

			await axios
				.put(updateNameDisplayEndpoint, body, {
					headers: {
						Authorization: `Bearer ${user.token}`,
					},
				})
				.then((response) => {
					console.log(response.data);
					toast(response.data.message);
				})
				.catch((error) => {
					console.log(error);
					toast.error(error.message);
				});
		} else {
			toast.error("All Fields are required");
		}
	};

	return (
		<>
			{loading ? (
				<CreateDisplayContainer>
					<h2>Loading..</h2>
				</CreateDisplayContainer>
			) : (
				<CreateDisplayContainer>
					<CreateForm onSubmit={handleUpdateName}>
						<h3>Edit Display Name</h3>

						<select required onChange={(e) => setDisplay(e.target.value)}>
							<option value="default" default>
								choose display
							</option>

							{displays.map((item, key) => (
								<option key={key} value={item._id}>
									{item.display_name === null ? item._id : item.display_name}
								</option>
							))}
						</select>

						{display !== null ? (
							<>
								<p>
									Is recommended to name your displays with location names. For
									example: workshop-a
								</p>
								<input
									type="text"
									placeholder="name"
									onChange={(e) => setName(e.target.value)}
									required
								/>
							</>
						) : null}

						<button type="submit">Update Name</button>
						<span>
							Developed by <a href="https://superxlabs.io">Super X Labs</a>
						</span>
					</CreateForm>
				</CreateDisplayContainer>
			)}
		</>
	);
};

export default EditNameDisplay;

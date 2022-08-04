import React, { useState, useEffect } from "react";
import { useGlobalStateContext } from "../../context/globalContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CreateDisplayContainer, CreateForm } from "./CreateDisplayEleements";
import axios from "axios";

const DeleteDisplay = () => {
	const { user, displays, loading } = useGlobalStateContext();
	const [display, setDisplay] = useState(null);

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
				})
				.catch((error) => {
					toast.error(error.message);
					console.log(error);
				});
		};
		init();
	}, []);

	const handleDelete = async (e) => {
		e.preventDefault();

		if (display === "default") {
			setDisplay(null);
		}

		if (display !== null) {
			const deleteDisplayEndpoint = `/displays/${display}/delete`;

			await axios
				.delete(deleteDisplayEndpoint, {
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
			toast.error("Boot File is Required");
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
					<CreateForm onSubmit={handleDelete}>
						<h3>Delete Display</h3>

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

						<button type="submit">Delete</button>
						<span>
							Developed by <a href="https://superxlabs.io">Super X Labs</a>
						</span>
					</CreateForm>
				</CreateDisplayContainer>
			)}
		</>
	);
};

export default DeleteDisplay;

import React, { useState } from "react";
import { useGlobalStateContext } from "../../context/globalContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CreateDisplayContainer, CreateForm } from "./CreateDisplayEleements";
import axios from "axios";
import { bootData } from "./data";
import { sources } from "../Dashboard/data";

const CreateDisplay = () => {
	const { user } = useGlobalStateContext();
	const [bootFile, setBootFile] = useState("bootImg.png");
	const [source, setSource] = useState(null);

	const handleCreate = async (e) => {
		e.preventDefault();
		if (source === "default") {
			setSource(null);
		}

		if (bootFile !== null) {
			const createDisplayEndpoint = `http://localhost:8000/displays/`;
			const body = {
				boot_file: bootFile,
				source: source,
			};
			await axios
				.post(createDisplayEndpoint, body, {
					headers: {
						Authorization: `Bearer ${user.token}`,
					},
				})
				.then((response) => {
					console.log(response.data);
					toast(`Created display with id:${response.data.display._id}`);
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
		<CreateDisplayContainer>
			<CreateForm onSubmit={handleCreate}>
				<h3>Set up Display</h3>

				<p>Boot File</p>
				<select required onChange={(e) => setBootFile(e.target.value)}>
					<option value="bootImg.png" default>
						default
					</option>

					{bootData.map((item, key) => (
						<option key={key} value={item.href}>
							{item.name}
						</option>
					))}
				</select>

				<p>Source File</p>
				<select required onChange={(e) => setSource(e.target.value)}>
					<option value="default" default>
						default
					</option>

					{sources.map((item, key) => (
						<option key={key} value={item.href}>
							{item.name}
						</option>
					))}
				</select>

				<button type="submit">Create</button>
				<span>
					Developed by <a href="https://superxlabs.io">Super X Labs</a>
				</span>
			</CreateForm>
		</CreateDisplayContainer>
	);
};

export default CreateDisplay;

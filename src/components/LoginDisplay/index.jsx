import React, { useState } from "react";
import { LoginContainer, LoginForm } from "./LoginDisplayElements";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useGlobalStateContext } from "../../context/globalContext";

const LoginDisplay = () => {
	const [username, setUsername] = useState(null);
	const [password, setPassword] = useState(null);
	const [loggedIn, setLoggedIn] = useState(false);
	const [input, setInput] = useState(null);

	const { displays } = useGlobalStateContext();

	const handleLogin = async (e) => {
		e.preventDefault();
		if (username !== null && password !== null) {
			const body = {
				username: username,
				password: password,
			};

			const loginEndpoint = "/user/login";
			await axios
				.post(loginEndpoint, body)
				.then((response) => {
					window.localStorage.setItem("token", response.data.user.token);
					getAllDisplays(response.data.user.token);
					setLoggedIn(true);
				})
				.catch((error) => {
					console.log(error);
					toast.error(error.message);
				});
		} else {
			toast.error("Username or Password Empty");
		}
	};

	const getAllDisplays = async (_token) => {
		const displaysEndpoint = "/displays";
		await axios
			.get(displaysEndpoint, {
				headers: {
					Authorization: `Bearer ${_token}`,
				},
			})
			.then((response) => {
				window.localStorage.setItem(
					"displays",
					JSON.stringify(response.data.displays)
				);
			})
			.catch((error) => {
				console.log(error);
				toast.error(error.message);
			});
	};

	const handleConnect = async (e) => {
		e.preventDefault();
		console.log(input);

		const updateConnectionEndpoint = `/displays/${input}/connect`;
		const body = {
			connected: true,
		};
		await axios
			.put(updateConnectionEndpoint, body, {
				headers: {
					Authorization: `Bearer ${window.localStorage.getItem("token")}`,
				},
			})
			.then((response) => {
				if (response.data.connected === true) {
					window.open(`/display/${input}`, "_self");
				} else {
					toast.error("Connection Error");
				}
			})
			.catch((error) => {
				console.log(error);
				toast.error(error.message);
			});
	};

	return (
		<LoginContainer>
			{loggedIn ? (
				<LoginForm onSubmit={handleConnect}>
					<h3>Choose Display</h3>
					<select required onChange={(e) => setInput(e.target.value)}>
						<option value="" default>
							choose display
						</option>

						{displays.map((item, key) =>
							item.connected === false ? (
								<option key={key} value={item._id}>
									{item.display_name === null ? item._id : item.display_name}
								</option>
							) : null
						)}
					</select>
					<button type="submit">Access Display</button>
				</LoginForm>
			) : (
				<LoginForm onSubmit={handleLogin}>
					<h3>Connect Artwork</h3>
					<p>Username</p>
					<input
						type="text"
						onChange={(e) => setUsername(e.target.value)}
						required
					/>
					<p>Password</p>
					<input
						type="password"
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
					<button type="submit">Log in</button>
					<span>
						Developed by <a href="https://superxlabs.io">Super X Labs</a>
					</span>
				</LoginForm>
			)}
		</LoginContainer>
	);
};

export default LoginDisplay;

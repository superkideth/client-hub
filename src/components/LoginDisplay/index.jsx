import React, { useState } from "react";
import ClickToConnect from "./ClickToConnect";
import ChooseDisplayPreview from "./ChooseDisplayPreview";
import LoginDisplayPreview from "./LoginDisplayPreview";
import { LoginContainer } from "./LoginDisplayElements";
import {
	useGlobalStateContext,
	useGlobalDispatchContext,
} from "../../context/globalContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const LoginDisplay = () => {
	const [username, setUsername] = useState(null);
	const [password, setPassword] = useState(null);
	const [loggedIn, setLoggedIn] = useState(false);
	const [input, setInput] = useState(null);
	const [accessLoginForm, setAccessLoginForm] = useState(false);
	const [hidePass, setHidePass] = useState(true);

	const { displays } = useGlobalStateContext();
	const dispatch = useGlobalDispatchContext();

	const handleLogin = async (e) => {
		e.preventDefault();

		const body = {
			username: username,
			password: password,
		};

		const loginEndpoint = "/user/login";
		await axios
			.post(loginEndpoint, body)
			.then(async (response) => {
				window.localStorage.setItem("token", response.data.user.token);
				await getAllDisplays(response.data.user.token);
				setLoggedIn(true);
			})
			.catch((error) => {
				console.log(error);
				toast.error(error.message);
			});
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
				dispatch({ type: "ADD_DISPLAYS", displays: response.data.displays });
			})
			.catch((error) => {
				console.log(error);
				toast.error(error.message);
			});
	};

	const handleConnect = async (e) => {
		e.preventDefault();

		const updateConnectionEndpoint = `/displays/${input}/connect`;
		const body = {
			connected: true,
		};
		const _token = window.localStorage.getItem("token");
		await axios
			.put(updateConnectionEndpoint, body, {
				headers: {
					Authorization: `Bearer ${_token}`,
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
		<>
			{accessLoginForm ? (
				<LoginContainer>
					{loggedIn ? (
						<ChooseDisplayPreview
							handleConnect={handleConnect}
							setInput={setInput}
							displays={displays}
						/>
					) : (
						<LoginDisplayPreview
							handleLogin={handleLogin}
							setUsername={setUsername}
							setHidePass={setHidePass}
							hidePass={hidePass}
							setPassword={setPassword}
						/>
					)}
				</LoginContainer>
			) : (
				<ClickToConnect
					accessLoginForm={accessLoginForm}
					setAccessLoginForm={setAccessLoginForm}
				/>
			)}
		</>
	);
};

export default LoginDisplay;

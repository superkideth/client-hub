import React, { useState } from "react";
import { LoginContainer, LoginForm, PsdWrap } from "./LoginDisplayElements";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import {
	useGlobalStateContext,
	useGlobalDispatchContext,
} from "../../context/globalContext";
import ClickToConnect from "./ClickToConnect";
import { BiShow, BiHide } from "react-icons/bi";

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
						<LoginForm onSubmit={handleConnect}>
							<h3>Choose Display</h3>
							<select required onChange={(e) => setInput(e.target.value)}>
								<option value="" default>
									choose display
								</option>

								{displays.map((item, key) =>
									item.connected === false ? (
										<option key={key} value={item._id}>
											{item.display_name === null
												? item._id
												: item.display_name}
										</option>
									) : null
								)}
							</select>
							<button type="submit">Access Display</button>
						</LoginForm>
					) : (
						<LoginForm onSubmit={handleLogin}>
							<h3>PANDORA DISPLAY</h3>
							<p>Username</p>
							<input
								type="text"
								onChange={(e) => setUsername(e.target.value)}
								required
							/>
							<PsdWrap>
								<p>Password</p>
								<span onClick={() => setHidePass(!hidePass)}>
									{hidePass ? <BiHide /> : <BiShow />}
								</span>
							</PsdWrap>
							<input
								type={hidePass ? "password" : "text"}
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
							<button type="submit">Log in</button>
							<span>
								Powered by <a href="https://superxlabs.io">Super X Labs</a>
							</span>
						</LoginForm>
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

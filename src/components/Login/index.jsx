import React, { useState } from "react";
import { LoginContainer } from "./LoginElements";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import LogoContainerPreview from "./LogoContainerPreview";
import LoginFormPreview from "./LoginFormPreview";

const Login = () => {
	const [username, setUsername] = useState(null);
	const [password, setPassword] = useState(null);
	const [hidePass, setHidePass] = useState(true);

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
					window.localStorage.setItem(
						"user",
						JSON.stringify(response.data.user)
					);

					window.open("/", "_self");
				})
				.catch((error) => {
					console.log(error);
					toast.error(error.message);
				});
		} else {
			toast.error("Error! Try again");
		}
	};

	return (
		<LoginContainer>
			<LogoContainerPreview />
			<LoginFormPreview
				handleLogin={handleLogin}
				hidePass={hidePass}
				setUsername={setUsername}
				setHidePass={setHidePass}
				setPassword={setPassword}
			/>
		</LoginContainer>
	);
};

export default Login;

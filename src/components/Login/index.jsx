import React, { useState } from "react";
import { LoginContainer, LoginForm, InfoContainer } from "./LoginElements";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../../assets/bootImg.png";
import axios from "axios";

const Login = () => {
	const [username, setUsername] = useState(null);
	const [password, setPassword] = useState(null);

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
			<InfoContainer>
				<div className="logo-wrap">
					<img src={logo} alt="arcade-logo" />
					<span>x</span>
					<h1>super.</h1>
				</div>
				<p>Manage your super immersive visuals, artworks, experiences</p>
			</InfoContainer>

			<LoginForm onSubmit={handleLogin}>
				<h3>User Login</h3>
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
		</LoginContainer>
	);
};

export default Login;

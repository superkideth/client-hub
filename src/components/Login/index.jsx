import React, { useState } from "react";
import { LoginContainer, LoginForm } from "./LoginElements";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Login = () => {
	const [username, setUsername] = useState(null);
	const [password, setPassword] = useState(null);

	const handleLogin = async (e) => {
		e.preventDefault();
		//axios post to local db
		if (username !== null && password !== null) {
			const body = {
				username: username,
				password: password,
			};

			const loginEndpoint = "http://localhost:8000/user/login";
			await axios
				.post(loginEndpoint, body)
				.then((response) => {
					console.log(response.data);
					// window.localStorage.setItem('user', JSON.stringify(response.data.user))
					// window.open('/', '_self')
				})
				.catch((error) => {
					console.log(error);
					toast.error(error.message);
				});
			window.localStorage.setItem("user", JSON.stringify(body));
			window.open("/", "_self");
		} else {
			toast.error("Username or Password Empty");
		}
	};

	return (
		<LoginContainer>
			<LoginForm onSubmit={handleLogin}>
				<h3>Admin Login</h3>
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

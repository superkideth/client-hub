import React, { useState } from "react";
import {
	LoginContainer,
	LoginForm,
	InfoContainer,
	PsdWrap,
} from "./LoginElements";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../../assets/bootImg.png";
import axios from "axios";
import { BiShow, BiHide } from "react-icons/bi";

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
			<InfoContainer>
				<h4>PANDORA [:ΠΑΝΔΩΡΑ]</h4>
				<div className="logo-wrap">
					<img src={logo} alt="arcade-logo" />
					<span>x</span>
					<h1>super.</h1>
				</div>
				<p>
					Manage your super digital visuals, tech driven sculptures, immersive
					experiences & more.
				</p>
			</InfoContainer>

			<LoginForm onSubmit={handleLogin}>
				<h3>PANDORA LOGIN</h3>
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
		</LoginContainer>
	);
};

export default Login;

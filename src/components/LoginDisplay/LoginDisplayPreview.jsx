import React from "react";
import { LoginForm, PsdWrap } from "./LoginDisplayElements";
import { BiShow, BiHide } from "react-icons/bi";

const LoginDisplayPreview = ({
	handleLogin,
	setUsername,
	setHidePass,
	hidePass,
	setPassword,
}) => {
	return (
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
	);
};

export default LoginDisplayPreview;

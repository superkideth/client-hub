import React from "react";
import { LoginForm, PsdWrap } from "./LoginElements";
import { BiShow, BiHide } from "react-icons/bi";

const LogoFormPreview = ({
	handleLogin,
	hidePass,
	setUsername,
	setHidePass,
	setPassword,
}) => {
	return (
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
	);
};

export default LogoFormPreview;

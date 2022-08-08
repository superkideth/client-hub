import React from "react";
import { LoginForm } from "./LoginDisplayElements";

const ChooseDisplayPreview = ({ handleConnect, setInput, displays }) => {
	return (
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
	);
};

export default ChooseDisplayPreview;

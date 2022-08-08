import React from "react";
import { ModifyFlex } from "./CreateDisplayEleements";

const ModifySelectorPreview = ({ setAction, user }) => {
	return (
		<ModifyFlex>
			<h2>MODIFY DISPLAY</h2>

			<select required onChange={(e) => setAction(e.target.value)}>
				<option value="edit-name" default>
					edit name
				</option>
				{user.is_admin ? (
					<>
						<option value="create">create</option>
						<option value="delete">delete</option>
					</>
				) : null}
			</select>
		</ModifyFlex>
	);
};

export default ModifySelectorPreview;

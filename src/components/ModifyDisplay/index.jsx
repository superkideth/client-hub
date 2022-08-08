import React, { useState } from "react";
import CreateDisplay from "./CreateDisplay";
import DeleteDisplay from "./DeleteDisplay";
import EditNameDisplay from "./EditNameDisplay";
import { ModifyContainer, ModifyFlex } from "./CreateDisplayEleements";
import { useGlobalStateContext } from "../../context/globalContext";

const ModifyDisplay = () => {
	const [action, setAction] = useState("edit-name");
	const { user } = useGlobalStateContext();

	return (
		<ModifyContainer>
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

			{action === "create" && <CreateDisplay />}
			{action === "delete" && <DeleteDisplay />}
			{action === "edit-name" && <EditNameDisplay />}
		</ModifyContainer>
	);
};

export default ModifyDisplay;

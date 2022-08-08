import React, { useState } from "react";
import CreateDisplay from "./CreateDisplay";
import DeleteDisplay from "./DeleteDisplay";
import EditNameDisplay from "./EditNameDisplay";
import ModifySelectorPreview from "./ModifySelectorPreview";
import { ModifyContainer } from "./CreateDisplayEleements";
import { useGlobalStateContext } from "../../context/globalContext";

const ModifyDisplay = () => {
	const [action, setAction] = useState("edit-name");
	const { user } = useGlobalStateContext();

	return (
		<ModifyContainer>
			<ModifySelectorPreview setAction={setAction} user={user} />
			{action === "create" && <CreateDisplay />}
			{action === "delete" && <DeleteDisplay />}
			{action === "edit-name" && <EditNameDisplay />}
		</ModifyContainer>
	);
};

export default ModifyDisplay;

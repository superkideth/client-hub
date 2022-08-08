import React from "react";
import { ButtonWrap, SecondBtnWrap } from "./DashboardElements";

const ModalButtonControls = ({
	handleUpdate,
	setSource,
	setPendingChanges,
	sources,
	handleReset,
	handleResetConnection,
}) => {
	return (
		<>
			<ButtonWrap onSubmit={handleUpdate}>
				<select
					required
					onChange={(e) => {
						setSource(e.target.value);
						setPendingChanges(true);
					}}
				>
					<option value={""} default>
						default
					</option>

					{sources.map((item, key) => (
						<option key={key} value={item.href}>
							{item.name}
						</option>
					))}
				</select>
				<button type="submit">Update</button>
			</ButtonWrap>

			<SecondBtnWrap>
				<button onClick={handleReset}>reset source</button>
				<button onClick={handleResetConnection}>Disconnect</button>
			</SecondBtnWrap>
		</>
	);
};

export default ModalButtonControls;

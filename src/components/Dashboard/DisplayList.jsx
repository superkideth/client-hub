import React from "react";
import { DashboardWrap } from "./DashboardElements";
import { ItemModal } from "./ItemModal";

const DisplayList = ({ displays, showModal, setShowModal, handleDetails }) => {
	return (
		<>
			<DashboardWrap>
				<ul>
					{displays.map((item, key) => (
						<li key={key} onClick={() => handleDetails(item)}>
							<span style={{ fontWeight: "700" }}>
								{item.display_name === null ? item._id : item.display_name}
							</span>
							{item.source === null && (
								<img
									src={require(`../../assets/${item.boot_file}`)}
									alt={item._id}
								/>
							)}

							{item.source !== null && (
								<video
									src={require(`../../assets/${item.source}`)}
									type="video/mp4"
									autoPlay
									loop
									muted
								/>
							)}
							<span>connected: {item.connected ? "yes" : "no"}</span>
						</li>
					))}
				</ul>
				<ItemModal showModal={showModal} setShowModal={setShowModal} />
			</DashboardWrap>
		</>
	);
};

export default DisplayList;

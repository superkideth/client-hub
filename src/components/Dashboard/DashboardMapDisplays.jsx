import React from "react";

const DashboardMapDisplays = ({ displays, handleDetails }) => {
	return (
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
					<span>{item.connected ? "connected" : "disconnected"}</span>
				</li>
			))}
		</ul>
	);
};

export default DashboardMapDisplays;

import React, { useState, useEffect } from "react";
import {
	NoMobileAccess,
	BootContainer,
	HeroBg,
	VideoBg,
	BootImg,
} from "./DisplayElements";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import NoAccess from "./NoAccess";

const Display = () => {
	const { id } = useParams();
	const [display, setDisplay] = useState(null);
	const [connected, setConnected] = useState(null);

	useEffect(() => {
		window.localStorage.removeItem("displays");
		const init = async () => {
			const getDisplayEndpoint = `/displays/${id}`;

			await axios
				.get(getDisplayEndpoint, {
					headers: {
						Authorization: `Bearer ${window.localStorage.getItem("token")}`,
					},
				})
				.then((response) => {
					setDisplay(response.data.display);
					setConnected(response.data.display.connected);
				})
				.catch((error) => {
					console.log(error);
					toast.error(error.message);
				});
		};
		init();
		const refreshPostTime = 5 * 1000; // every 30 sec
		setInterval(init, refreshPostTime);
	}, []);

	useEffect(() => {
		if (connected !== null && connected === false) {
			window.localStorage.clear();
			window.open("/display", "_self");
		}
	}, [connected]);

	return (
		<>
			<NoAccess />
			<NoMobileAccess>
				{display === null ? null : connected ? (
					<HeroBg>
						{display.source !== null ? (
							<>
								<VideoBg
									src={require(`../../assets/${display.source}`)}
									type="video/mp4"
									autoPlay
									loop
									muted
								/>
							</>
						) : (
							<BootContainer>
								<BootImg
									src={require(`../../assets/${display.boot_file}`)}
									alt={display.boot_file}
								/>
							</BootContainer>
						)}
					</HeroBg>
				) : null}
			</NoMobileAccess>
		</>
	);
};

export default Display;

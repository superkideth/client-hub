import React from "react";

const ModalVisualPreview = ({ source, display }) => {
	return (
		<>
			{source === ""
				? display.source === null && (
						<img
							src={require(`../../assets/${display.boot_file}`)}
							alt={display._id}
						/>
				  )
				: null}

			{source === "" ? (
				display.source !== null && (
					<video
						src={require(`../../assets/${display.source}`)}
						type="video/mp4"
						autoPlay
						loop
						muted
					/>
				)
			) : (
				<video
					src={require(`../../assets/${source}`)}
					type="video/mp4"
					autoPlay
					loop
					muted
				/>
			)}
		</>
	);
};

export default ModalVisualPreview;

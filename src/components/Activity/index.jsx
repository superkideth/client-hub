import React from "react";
import { ActivityContainer, InfoWrap } from "./ActivityElements";
import { useGlobalStateContext } from "../../context/globalContext";

const Activity = () => {
	const { displays } = useGlobalStateContext();

	function timeConverter(_time) {
		var a = new Date(_time);
		var months = [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		];
		var year = a.getFullYear();
		var month = months[a.getMonth()];
		var date = a.getDate();
		var hour = a.getHours();
		var min = a.getMinutes();
		var sec = a.getSeconds();
		var time =
			date + " " + month + " " + year + " - " + hour + ":" + min + ":" + sec;
		return time;
	}

	return (
		<ActivityContainer>
			<InfoWrap>
				<h4>ID</h4>
				<h4>DISPLAY NAME</h4>
				<h4>LAST UPDATE</h4>
			</InfoWrap>
			<ul>
				{displays.map((item, key) => (
					<li key={key}>
						<span>{item._id}</span>
						<p>{item.display_name !== null ? item.display_name : item._id}</p>
						<p>{timeConverter(item.updatedAt)}</p>
					</li>
				))}
			</ul>
		</ActivityContainer>
	);
};

export default Activity;

import React from "react";
import Experience from "../Items/Experience";
import { experiencesData } from "./MyInfo";

function Experiences() {
	return (
		<div className="timeline">
			{experiencesData.map((experience) => (
				<Experience experience={experience} key={experience.id} />
			))}
			<span className="timeline-line"></span>
		</div>
	);
}

export default Experiences;

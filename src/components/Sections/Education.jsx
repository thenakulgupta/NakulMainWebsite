import React from "react";
import Education from "../Items/Education";
import { educationsData } from "./MyInfo";

function Educations() {
	return (
		<div className="timeline">
			{educationsData.map((education) => (
				<Education education={education} key={education.id} />
			))}
			<span className="timeline-line"></span>
		</div>
	);
}

export default Educations;

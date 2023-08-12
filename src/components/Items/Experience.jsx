import React from "react";
import { calculateDateFromTo } from "../Sections/MyInfo";

function Experience({
	experience: {
		yearFrom,
		yearTo,
		position,
		entity,
		tasks,
		internship_cert,
		experience_cert,
		offer_letter_cert,
	},
}) {
	return (
		<div className="entry">
			<div className="title"></div>
			<div className="body">
				{typeof position == "string" ? (
					<h4 className="mt-0 mb-0">{position}</h4>
				) : (
					position.map(function (i) {
						return <h4 className="mt-0 mb-0">{i}</h4>;
					})
				)}
				<p>{entity}</p>
				<p className="mb-1">
					{yearFrom} - {yearTo == null ? "Present" : yearTo} ·&nbsp;
					{calculateDateFromTo(yearFrom, yearTo)}
				</p>
				{tasks
					? (tasks ?? "").split("\n").map((i) => {
							return <p className="mb-1">{i}</p>;
					  })
					: ""}
			</div>
		</div>
	);
}

export default Experience;

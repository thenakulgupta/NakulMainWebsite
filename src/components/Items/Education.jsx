import React from "react";

function Education({
	education: {
		yearFrom,
		yearTo,
		degree,
		position,
		grade,
		institute,
		description,
	},
}) {
	return (
		<div className="entry">
			<div className="title"></div>
			<div className="body">
				<h4 className="mb-0">{institute}</h4>
				<b>
					<p className="mt-0 mb-0">{degree}</p>
				</b>
				<p>
					{yearFrom} - {yearTo == null ? "Present" : yearTo}
				</p>
				{grade ? (
					<>
						<p className="mb-1">
							<b>Grade:</b> {grade}
						</p>
					</>
				) : (
					<></>
				)}
				{Array.isArray(position) && position.length > 0 ? (
					<>
						<b>Position{position.length === 1 ? "" : "s"}:</b>
						<ul className="mb-1">
							{position.map((item, index) => (
								<li key={index} className="mt-0 mb-0">
									{item}
								</li>
							))}
						</ul>
					</>
				) : null}
				{description.length > 0 ? (
					<>
						{(description ?? "").split("\n").map((i) => {
							return <p className="mb-1">{i}</p>;
						})}
					</>
				) : (
					""
				)}
			</div>
		</div>
	);
}

export default Education;

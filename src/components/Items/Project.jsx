import React from "react";

function Project({ project: { id, name, category, image, slug } }) {
	return (
		<a href={`projects/${slug}`} target="_blank" rel="noreferrer">
			<div className="project-item">
				<div className="thumb">
					<img src={image} alt={name} />
				</div>
			</div>
			<b>
				<center>
					<p className="title">{name}</p>
				</center>
			</b>
		</a>
	);
}

export default Project;

import React, { useState, useEffect } from "react";
import Project from "../Items/Project";
import { projects } from "./MyInfo";

function Projects() {
	const [getAllItems] = useState(projects);
	const [dataVisibleCount, setDataVisibleCount] = useState(6);
	const [dataIncrement] = useState(3);
	const [visibleItems, setVisibleItems] = useState([]);
	const [noMorePost, setNoMorePost] = useState(false);

	useEffect(() => {
		setVisibleItems(getAllItems.filter((item) => item.id <= 6));
	}, [getAllItems]);

	const handleLoadmore = (e) => {
		e.preventDefault();
		let tempCount = dataVisibleCount + dataIncrement;

		if (tempCount > getAllItems.length) {
			setNoMorePost(true);
		} else {
			setDataVisibleCount(tempCount);
			setVisibleItems(getAllItems.filter((data) => data.id <= tempCount));
		}
	};

	return (
		<>
			<div className="row project-wrapper">
				{visibleItems.map((item) => (
					<div className="col-md-4 col-sm-6 grid-item" key={item.id}>
						<Project project={item} />
					</div>
				))}
			</div>

			{noMorePost ? null : (
				<div className="load-more text-center mt-4">
					<a
						href="#!"
						className="btn btn-default"
						onClick={(e) => handleLoadmore(e)}
					>
						<i className="fas fa-circle-notch"></i> Load more
					</a>
				</div>
			)}
		</>
	);
}

export default Projects;

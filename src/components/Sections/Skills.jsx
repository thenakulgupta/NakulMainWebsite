import React from "react";
import TrackVisibility from "react-on-screen";
import Skill from "../Items/Skill";
import { skillData } from "./MyInfo";

function Skills() {
	return (
		<>
			<p className="mb-0">{skillData.skillContent}</p>
			<div className="mt-5">
				<div className="row -mt-50">
					{skillData.progressData.map((progress) => (
						<div className="col-md-6 mt-50" key={progress.id}>
							<TrackVisibility once>
								<Skill progress={progress} />
							</TrackVisibility>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export default Skills;

import React from "react";
import TrackVisibility from "react-on-screen";
import Skill from "../Items/Skill";

const skillData = {
  skillContent:
    "Certified in both Frontend and Backend technologies. I started my journey from Android Java, PHP and MySQL for backend then moved to Laravel, Flutter, NodeJS, Python and Kotlin. Now I am comfortable on all these languages.",
  progressData: [
    {
      id: 1,
      name: "C++",
      percentage: 80,
    },
    {
      id: 2,
      name: "PHP",
      percentage: 95,
    },
    {
      id: 3,
      name: "HTML & CSS & JS",
      percentage: 95,
    },
    {
      id: 4,
      name: "Java",
      percentage: 60,
    },
    {
      id: 5,
      name: "Android Java",
      percentage: 80,
    },
    {
      id: 6,
      name: "Android Kotlin",
      percentage: 60,
    },
    {
      id: 7,
      name: "Flutter",
      percentage: 90,
    },
    {
      id: 8,
      name: "Laravel",
      percentage: 95,
    },
    {
      id: 9,
      name: "MySQL",
      percentage: 95,
    },
    {
      id: 10,
      name: "NodeJS",
      percentage: 90,
    },
    {
      id: 11,
      name: "Python",
      percentage: 60,
    },
    {
      id: 12,
      name: "ElectonJS",
      percentage: 70,
    },
  ],
};

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

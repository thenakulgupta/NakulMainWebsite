import React from "react";
import Experience from "../Items/Experience";

const experiencesData = [
  {
    id: 1,
    yearFrom: "Jun 2022",
    yearTo: null,
    position: "Senior Product Developer",
    entity: "Q1 Business Solutions",
  },
  {
    id: 2,
    yearFrom: "May 2022",
    yearTo: "Jun 2022",
    position: "Flutter & Web Developer",
    entity: "Q1 Business Solutions",
  },
  {
    id: 3,
    yearFrom: "Jan 2021",
    yearTo: null,
    position: ["Class Representative", "Head Student Coordinator (TechnoVision Event 2022)", "Fitness Club Coordinator", "Eco Club Coordinator"],
    entity: "Tecnia Institute of Advanced Studies",
  },
  {
    id: 4,
    yearFrom: "Apr 2022",
    yearTo: "May 2022",
    position: "IT Operation Intern",
    entity: "ClearExam",
  },
  {
    id: 5,
    yearFrom: "Aug 2019",
    yearTo: "Apr 2022",
    position: "Founder and CEO",
    entity: "Nakul Telestock (OPC) Private Limited",
  },
  {
    id: 6,
    yearFrom: "May 2015",
    yearTo: "Apr 2022",
    position: "Full-stack Developer",
    entity: "Freelance",
  },
];

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

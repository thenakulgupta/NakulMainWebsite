import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { aboutData } from "./MyInfo";

function About() {
	return (
		<div className="row">
			{/* <div className="col-md-3" style={{ display: "grid" }}>
				<img
					style={
						window.matchMedia("(min-width: 768px)").matches
							? {
									maxWidth: "100%",
									borderRadius: "20px",
									boxShadow:
										"0px 6px 15px 0px rgba(74, 99, 231, 0.1)",
							  }
							: {
									maxWidth: "300px",
									width: "100%",
									margin: "auto",
									borderRadius: "20px",
									boxShadow:
										"0px 6px 15px 0px rgba(74, 99, 231, 0.1)",
							  }
					}
					src={aboutData.image}
					alt={aboutData.name}
				/>
			</div> */}
			<div className="col-md-12">
				<h3 className="mt-4 mt-md-0 mb-0">Hello,</h3>
				<p className="mb-0">{aboutData.aboutMe}</p>
				<p
					style={{ whiteSpace: "pre-line", fontWeight: "bold" }}
					className="mb-4"
				>
					{aboutData.languageKnown}
				</p>
				<div className="row my-4">
					<div className="col-md-6">
						<p className="mb-2">
							Name:{" "}
							<span className="text-dark">{aboutData.name}</span>
						</p>
						<p className="mb-0">
							Phone Number:{" "}
							<span className="text-dark">
								<a href={"tel:" + aboutData.phone}>
									{aboutData.phone}
								</a>
							</span>
						</p>
					</div>
					<div className="col-md-6 mt-2 mt-md-0 mt-sm-2">
						<p className="mb-2">
							Location:{" "}
							<span className="text-dark">
								{aboutData.location}
							</span>
						</p>
						<p className="mb-0">
							Email:{" "}
							<span className="text-dark">
								<a href={"mailto:" + aboutData.email}>
									{aboutData.email}
								</a>
							</span>
						</p>
					</div>
				</div>
				<a
					href={aboutData.resumePath}
					target="_blank"
					rel="noreferrer"
					className="btn btn-default me-3"
				>
					<i className="icon-cloud-download"></i>Download Resume
				</a>
				<ScrollLink
					activeClass="active"
					to="section-contact"
					spy={true}
					smooth={true}
					duration={500}
					offset={50}
					className="btn btn-alt mt-2 mt-md-0 mt-xs-2"
				>
					<i className="icon-envelope"></i>Hire me
				</ScrollLink>
			</div>
		</div>
	);
}

export default About;

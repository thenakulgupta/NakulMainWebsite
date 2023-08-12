import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { aboutData, heroSectionData } from "./MyInfo";

function Herosection() {
	return (
		<section
			className="hero background parallax shadow-dark d-flex align-items-center"
			style={{
				backgroundImage: "url(/images/about.png)",
				backgroundSize: "contain",
			}}
		>
			<div className="cta mx-auto mt-2">
				<h1 className="mt-0 mb-4">
					I’m {heroSectionData.name}
					<span className="dot"></span>
				</h1>
				<p style={{ whiteSpace: "pre-line" }} className="mb-4">
					{heroSectionData.aboutMe}
				</p>
				<p
					style={{ whiteSpace: "pre-line", fontWeight: "bold" }}
					className="mb-4"
				>
					{heroSectionData.languageKnown}
				</p>
				{/* <ScrollLink
          activeClass="active"
          to="section-portfolios"
          spy={true}
          smooth={true}
          duration={500}
          offset={50}
          className="btn btn-default btn-lg me-3"
        >
          <i className="icon-grid"></i>View Portfolio
        </ScrollLink> */}
				<div
					className="spacer d-md-none d-lg-none d-sm-none"
					data-height="10"
				></div>
				<ScrollLink
					activeClass="active"
					to="section-contact"
					spy={true}
					smooth={true}
					duration={500}
					offset={50}
					href=""
					className="btn btn-border-light mt-2 mt-md-0 mt-xs-2 me-3"
				>
					<i className="icon-envelope"></i>Hire me
				</ScrollLink>
				<a
					href={aboutData.resumePath}
					target="_blank"
					rel="noreferrer"
					className="btn btn-default"
				>
					<i className="icon-cloud-download"></i>Download Resume
				</a>
			</div>
			<div className="overlay"></div>
		</section>
	);
}

export default Herosection;

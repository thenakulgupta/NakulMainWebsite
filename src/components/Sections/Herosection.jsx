import React from "react";
import { Link as ScrollLink } from "react-scroll";

const calculate_years = (date1) => {
  var today = new Date();
  var birthDate = new Date(date1);
  var years_now = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    years_now--;
  }
  return years_now;
};

const herosectionData = {
  name: "Nakul Gupta",
  aboutMe: `I started my journey when I was 14 years old in year 2015. I am a dedicated and efficient Flutter, Full Stack, Android (Java/Kotlin) developer with ${calculate_years("01 Jan 2015")}+ years experience.`,
};

function Herosection() {
  return (
    <section
      className="hero background parallax shadow-dark d-flex align-items-center"
      style={{ backgroundImage: "url(/images/about.png)", backgroundSize: "contain" }}
    >
      <div className="cta mx-auto mt-2">
        <h1 className="mt-0 mb-4">
          I’m {herosectionData.name}
          <span className="dot"></span>
        </h1>
        <p style={{ whiteSpace: 'pre-line' }} className="mb-4">{herosectionData.aboutMe}</p>
        <p style={{ whiteSpace: 'pre-line', fontWeight: 'bold' }} className="mb-4">{herosectionData.languageKnown}</p>
        <ScrollLink
          activeClass="active"
          to="section-portfolios"
          spy={true}
          smooth={true}
          duration={500}
          offset={50}
          className="btn btn-default btn-lg mr-3"
        >
          <i className="icon-grid"></i>View Portfolio
        </ScrollLink>
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
          className="btn btn-border-light btn-lg"
        >
          <i className="icon-envelope"></i>Hire me
        </ScrollLink>
      </div>
      <div className="overlay"></div>
    </section>
  );
}

export default Herosection;

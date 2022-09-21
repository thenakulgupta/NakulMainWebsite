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

const aboutData = {
  cvpath: "media/resume.pdf",
  image: "images/about.png",
  name: "Nakul Gupta",
  location: "Delhi, India",
  email: "nakulgupta1042@gmail.com",
  phone: "+918802631740",
  aboutMe:
    `I started my journey when I was 14 years old in year 2015. I am a dedicated and efficient Flutter, Full Stack, Android (Java/Kotlin) developer with ${calculate_years("01 Jan 2015")}+ years experience. Certified in both Frontend and Backend technologies. I started my journey from Android Java, PHP and MySQL for backend then moved to Laravel, Flutter, NodeJS, Python and Kotlin. Now I am comfortable on all these languages and learning new things daily.`,
  languageKnown: "Languages and Framework Known:\nPHP, HTML, CSS, JS, Java, Android Java, Android Kotlin, Flutter, Laravel, MySQL, NodeJS, Python and many more on my list to learn.",
};

function About() {
  return (
    <div className="row">
      <div className="col-md-3" style={{ display: "grid" }}>
        <img style={window.matchMedia("(min-width: 768px)").matches ? { maxWidth: "100%", borderRadius: "20px", boxShadow: "0px 6px 15px 0px rgba(74, 99, 231, 0.1)" } : { maxWidth: "300px", width: "100%", margin: "auto", borderRadius: "20px", boxShadow: "0px 6px 15px 0px rgba(74, 99, 231, 0.1)" }} src={aboutData.image} alt={aboutData.name} />
      </div>
      <div className="col-md-9">
        <h2 className="mt-4 mt-md-0 mb-0">Hello,</h2>
        <p className="mb-0">{aboutData.aboutMe}</p>
        <p style={{ whiteSpace: 'pre-line', fontWeight: 'bold' }} className="mb-4">{aboutData.languageKnown}</p>
        <div className="row my-4">
          <div className="col-md-6">
            <p className="mb-2">
              Name: <span className="text-dark">{aboutData.name}</span>
            </p>
            <p className="mb-0">
              Phone Number: <span className="text-dark"><a href={"tel:" + aboutData.phone}>{aboutData.phone}</a></span>
            </p>
          </div>
          <div className="col-md-6 mt-2 mt-md-0 mt-sm-2">
            <p className="mb-2">
              Location: <span className="text-dark">{aboutData.location}</span>
            </p>
            <p className="mb-0">
              Email: <span className="text-dark"><a href={"mailto:" + aboutData.email}>{aboutData.email}</a></span>
            </p>
          </div>
        </div>
        <a href={aboutData.cvpath} target="_blank" rel="noreferrer" className="btn btn-default me-3">
          <i className="icon-cloud-download"></i>Download CV
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

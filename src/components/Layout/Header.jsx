import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link, useRouteMatch } from "react-router-dom";
import {
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const headerData = {
  name: "Nakul Gupta",
  designation: "Sr. Product Developer",
  imageThumb: "/images/logo.png",
  social: {
    linkedin: "https://www.linkedin.com/in/thenakulgupta/",
    twitter: "https://twitter.com/the_nakulgupta",
    github: "https://github.com/gnakul2001",
  },
};

function Header({ toggleHeader, toggleHandler }) {
  const [currentPath, setCurrentPath] = useState("");
  const match = useRouteMatch();

  useEffect(() => {
    setCurrentPath(match.path);
  }, [match]);

  return (
    <>
      <div
        className={
          toggleHeader
            ? "mobile-header py-2 px-3 mt-4 push"
            : "mobile-header py-2 px-3 mt-4"
        }
      >
        <button className="menu-icon me-2" onClick={toggleHandler}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <Link to="/" className="logo">
          <img style={{ "width": "100px", borderRadius: "50%" }} src={headerData.imageThumb} alt={headerData.name} />
        </Link>
        <Link to="/" className="site-title dot ms-2">
          {headerData.name}
        </Link>
      </div>

      <header
        className={
          toggleHeader
            ? "left float-start shadow-dark open"
            : "left float-start shadow-dark"
        }
      >
        <button
          type="button"
          className="close"
          aria-label="Close"
          onClick={toggleHandler}
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <div className="header-inner d-flex align-items-start flex-column" style={{ overflowX: "auto" }}>
          <Link to="/" style={{ "width": "100%", "display": "grid", }}>
            <img style={{ "width": "100px", borderRadius: "50%", margin: "auto" }} src={headerData.imageThumb} alt={headerData.name} />
          </Link>
          <Link to="/" className="site-title dot mt-3">
            {headerData.name}
          </Link>

          <span className="site-slogan">{headerData.designation}</span>

          <nav>
            <ul className="vertical-menu scrollspy">
              <li>
                {currentPath === "/" ? (
                  <ScrollLink
                    activeClass="active"
                    to="section-home"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    <i className="icon-home"></i>Home
                  </ScrollLink>
                ) : (
                  <Link to="/">
                    <i className="icon-home"></i>Home
                  </Link>
                )}
              </li>
              <li>
                {currentPath === "/" ? (
                  <ScrollLink
                    activeClass="active"
                    to="section-about"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    <i className="icon-user"></i>About
                  </ScrollLink>
                ) : (
                  <Link to="/">
                    <i className="icon-user"></i>About
                  </Link>
                )}
              </li>
              {/* <li>
                {currentPath === "/" ? (
                  <ScrollLink
                    activeClass="active"
                    to="section-services"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    <i className="icon-bulb"></i>Services
                  </ScrollLink>
                ) : (
                  <Link to="/">
                    <i className="icon-bulb"></i>Services
                  </Link>
                )}
              </li> */}
              <li>
                {currentPath === "/" ? (
                  <ScrollLink
                    activeClass="active"
                    to="section-experiences"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    <i className="icon-graduation"></i>Experience
                  </ScrollLink>
                ) : (
                  <Link to="/">
                    <i className="icon-graduation"></i>Experience
                  </Link>
                )}
              </li>
              <li>
                {currentPath === "/" ? (
                  <ScrollLink
                    activeClass="active"
                    to="section-portfolios"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    <i className="icon-grid"></i>Works
                  </ScrollLink>
                ) : (
                  <Link to="/">
                    <i className="icon-grid"></i>Works
                  </Link>
                )}
              </li>
              {/* <li>
                {currentPath === "/" ? (
                  <ScrollLink
                    activeClass="active"
                    to="section-blogs"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    <i className="icon-pencil"></i>Blog
                  </ScrollLink>
                ) : (
                  <Link to="/">
                    <i className="icon-pencil"></i>Blog
                  </Link>
                )}
              </li> */}
              <li>
                {currentPath === "/" ? (
                  <ScrollLink
                    activeClass="active"
                    to="section-contact"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    <i className="icon-phone"></i>Contact
                  </ScrollLink>
                ) : (
                  <Link to="/">
                    <i className="icon-phone"></i>Contact
                  </Link>
                )}
              </li>
            </ul>
          </nav>

          <div className="footer mt-auto">
            <ul className="social-icons list-inline">
              {!headerData.social.linkedin ? null : (
                <li className="list-inline-item">
                  <a href={headerData.social.linkedin} target="_blank" rel="noreferrer">
                    <FaLinkedinIn />
                  </a>
                </li>
              )}
              {!headerData.social.twitter ? null : (
                <li className="list-inline-item">
                  <a href={headerData.social.twitter} target="_blank" rel="noreferrer">
                    <FaTwitter />
                  </a>
                </li>
              )}
              {!headerData.social.github ? null : (
                <li className="list-inline-item">
                  <a href={headerData.social.github} target="_blank" rel="noreferrer">
                    <FaGithub />
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

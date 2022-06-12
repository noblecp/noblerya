import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import "../styles/header.css"
import CustomMenuButton from "./menubtn/MenuBtn"

import rnlogo from "../assets/tab.svg"

import { NavItems } from "./NavItems"
// import resumeFile from "../resume.pdf"

const Header = ({ data, navToggle, setNavToggle }) => {
  const handleNavChange = () => {
    setNavToggle(!navToggle)
  }

  const linksData = data.graphCmsData.links[0]
  const resumeLink = linksData.allLinks.find(l => l.title == "Resume").url

  return (
    <div className="navbar-container global_padding">
      {/* <div className="navbar-container global_padding animate__animated animate__fadeInUp"> */}
      <div className="header-top">
        <img
          src={rnlogo}
          alt="Ryan Noble logo"
          className="nav-logo global_not-draggable"
        />
        <div className="right-toggles">
          <div className="nav-menu-icon" onClick={handleNavChange}>
            <CustomMenuButton
              navToggle={navToggle}
              handleNavChange={handleNavChange}
            />
          </div>
        </div>
      </div>

      {/* Sections */}

      <div className="nav-links">
        <ul
          className={
            navToggle
              ? "nav-menu active animate__animated animate__fadeIn"
              : "nav-menu"
          }
        >
          {NavItems.map((item, index) => {
            return (
              <li key={index}>
                {item.title === "Resume" ? (
                  <a
                    href={resumeLink}
                    target="_blank"
                    rel="noopener"
                    className="nav-link"
                  >
                    {item.title}
                  </a>
                ) : (
                  <Link
                    to={item.destination}
                    onClick={handleNavChange}
                    rel="noopener"
                    className="nav-link"
                  >
                    {item.title}
                  </Link>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Header

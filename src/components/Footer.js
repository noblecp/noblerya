import React from "react"

import "../styles/footer.css"
import "../styles/globalStyles.css"

// import { Link } from "gatsby"

// import ResumeFile from "../resume.pdf"

import linkedin from "../assets/linkedin.svg"
import resumeIcon from "../assets/resumeIcon.svg"

const Footer = ({ data }) => {
  const linksData = data.graphCmsData.links[0]
  return (
    <div className="footer_container">
      <div className="footer_copyrightSection">
        <p>Ryan Noble © {new Date().getFullYear()}</p>
      </div>
      <ul className="footer_socials">
        {/* <div className="footer_all-links"> */}
        {linksData.allLinks.map(el => {
          return (
            <li>
              <a
                href={el.url}
                target="_blank"
                aria-label={el.title}
                rel="noopener noreferrer"
                className="footer_socials-link"
              >
                <img
                  src={el.icon.url}
                  alt={el.title}
                  style={{ height: "40px" }}
                />
              </a>
            </li>
          )
        })}
        {/* </div> */}
      </ul>
    </div>
  )
}

export default Footer

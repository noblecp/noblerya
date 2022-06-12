import React, { useContext } from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../styles/motto.css"
import quotationMark from "../assets/quotationMarks.png"

const Motto = ({ data }) => {
  const mottoData = data.graphCmsData.mottos[0]
  return (
    <div
      id="myMotto"
      className="motto_container global_container global_padding"
    >
      {/* <div className="motto_content-container"> */}
      <div className="motto_content-container global_variable-width">
        <p className="global_section-title">{mottoData.sectionHeader}</p>
        <div className="motto_content">
          <div className="quoteTitle">
            {/* <img
              src={quotationMark}
              alt="quotation marks"
              className="quoteMarks"
            /> */}
            <StaticImage
              src="../assets/quotationMarks.png"
              alt="Quotation Marks"
              width="200"
              //   className="quoteMarks"
            />
            <p className="global_title mottoTitle">{mottoData.motto}</p>
            <p
              className="global_paragraph-text"
              dangerouslySetInnerHTML={{ __html: mottoData.description.html }}
            ></p>
            {/* <p className="global_paragraph-text">{mottoData.description}</p> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Motto

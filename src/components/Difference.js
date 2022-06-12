import React from "react"

// import { StaticImage } from "gatsby-plugin-image"

import "../styles/difference.css"
import DifferenceItem from "./DifferenceItem"

const Difference = ({ data }) => {
  const diffData = data.graphCmsData.differences[0]
  return (
    <div id="myDifference" className="difference_container global_padding">
      <p className="global_section-title difference_title">
        {diffData.sectionHeader}
      </p>
      <p className="global_subtitle difference_subtitle">{diffData.subtitle}</p>
      <div className="difference_all-items">
        {diffData.differenceItems.map(el => {
          // {console.log(el.picture)}
          return (
            <DifferenceItem
              pic={el.picture.url}
              title={el.title}
              caption={el.caption}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Difference

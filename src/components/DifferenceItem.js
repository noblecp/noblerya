import React from "react"
import "../styles/difference.css"
const DifferenceItem = ({ icon, pic, title, caption }) => {
  return (
    <div className="differenceItem">
      <img
        src={pic}
        alt="difference item hero"
        className="global_not-draggable"
      />
      <p
        className="global_subtitle"
        style={{ paddingTop: "0.5rem", fontWeight: "bold" }}
      >
        {title}
      </p>
      <p
        className="global_paragraph-text"
        style={{ paddingTop: "0.5rem", textAlign: "center" }}
      >
        {caption}
      </p>
    </div>
  )
}

export default DifferenceItem

import React from "react"

const Statistic = ({ num, text }) => {
  return (
    <div className="statistic_container">
      <p className="global_subtitle accent-secondary">{num}</p>
      {/* <p className="global_subtitle accent stat-num">{num}</p> */}
      <p className="global_paragraph-text" style={{ paddingBottom: "1rem" }}>
        {text}
      </p>
    </div>
  )
}

export default Statistic

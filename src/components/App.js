import React, { useState } from "react"

import { StaticImage } from "gatsby-plugin-image"

// Style
import "../page-styles/index.css"
import "../styles/globalStyles.css"

// Components
import Header from "./Header.js"
import Story from "./Story"
import Difference from "./Difference"
import Contact from "./Contact"
import Motto from "./Motto"
import TimelineSection from "./TimelineSection"
import Footer from "./Footer"

const Home = ({ data }) => {
  const [navToggle, setNavToggle] = useState(false)
  return (
    <div className="App">
      {/* <div className="App_content"> */}
      <div>
        <Header data={data} navToggle={navToggle} setNavToggle={setNavToggle} />
        <Story data={data} />
        <TimelineSection data={data} />
        <Motto data={data} />
        <Difference data={data} />
        <Contact data={data} />
      </div>
      <Footer data={data} />
    </div>
  )
}

export default Home

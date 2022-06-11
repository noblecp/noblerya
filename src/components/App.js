import React, { useState } from "react"

// import { StaticImage } from "gatsby-plugin-image"

// Style
import "../page-styles/index.css"
import "../styles/globalStyles.css"

// Components
import Story from "./Story"

const Home = ({ data }) => {
  const [navToggle, setNavToggle] = useState(false)
  return (
    <div className="App">
      {/* <div className="App_content"> */}
      <div>
        {/* <Header navToggle={navToggle} setNavToggle={setNavToggle} /> */}
        <Story data={data} />
      </div>

      {/* <Footer /> */}
    </div>
  )
}

export default Home

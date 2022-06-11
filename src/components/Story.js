import React from "react"

// import { StaticImage } from "gatsby-plugin-image"
import "../styles/story.css"
import "../styles/globalStyles.css"
// import Statistic from "./Statistic"

const Story = ({ data }) => {
  const dataStem = data.graphCmsData.stories[0]
  return (
    <div className="story-container global_padding" id="myStory">
      {/* Top Section */}

      <p className="global_section-title">{dataStem.sectionHeader}</p>
      <div className="story_top-section">
        <div className="story_top-left">
          <p className="global_title">{dataStem.greeting}</p>
          <p className="global_subtitle hero-subtitle">{dataStem.position}</p>
        </div>
        <div className="story_top-right">
          <hr />
          <p
            className="global_paragraph-text"
            dangerouslySetInnerHTML={{ __html: dataStem.about.html }}
          ></p>
        </div>
      </div>

      {/* <div className="story_image-section global_padding">
        <StaticImage
          src="../assets/happy2.jpg"
          alt="Smiling at the sun"
          placeholder="tracedSVG"
          style={{ width: "100%", height: "auto" }}
          className="global_not-draggable"
        />
      </div> */}

      <div className="story_bottom-section">
        <div className="story_bottom-left">
          <p className="global_subtitle global_padding">{dataStem.tagline}</p>

          {/* <Statistic num="6" text="Countries lived in" />
          <Statistic num="3" text="Songs produced" />
          <Statistic num="5" text="Concerts performed at" />
          <Statistic num="6+" text="Programming languages" />
          <Statistic num="10,000+" text="Lines of code written" /> */}
        </div>

        <div className="story_bottom-right global_padding-top">
          <p
            className="global_paragraph-text"
            style={{ paddingBottom: "1.5rem" }}
            dangerouslySetInnerHTML={{ __html: dataStem.journey.html }}
          ></p>
        </div>
        {/* </Fade> */}
      </div>
    </div>
  )
}

export default Story

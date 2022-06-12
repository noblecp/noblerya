import React from "react"

import { StaticImage } from "gatsby-plugin-image"
import "../styles/story.css"
import "../styles/globalStyles.css"
// import Statistic from "./Statistic"

import rnlogo from "../assets/tab.svg"

import Statistic from "./Statistic"

const Story = ({ data }) => {
  const storyData = data.graphCmsData.stories[0]
  const heroImg = storyData.hero.url
  return (
    <div className="story-container global_padding" id="story">
      {/* <div
        className="global_padding-bottom"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={rnlogo}
          alt="ryan noble"
          width={"100vw"}
          className="global_not-draggable"
        ></img>
      </div> */}
      {/* Top Section */}

      <p className="global_section-title">{storyData.sectionHeader}</p>
      <div className="story_top-section">
        <div className="story_top-left">
          <p className="global_title">{storyData.greeting}</p>
          <p className="global_subtitle hero-subtitle">{storyData.position}</p>
        </div>
        <div className="story_top-right">
          <hr />
          <p
            className="global_paragraph-text"
            dangerouslySetInnerHTML={{ __html: storyData.about.html }}
          ></p>
        </div>
      </div>
      {/* 
      <div className="story_image-section global_padding">
        <StaticImage
          src={heroImg}
          alt="hero"
          placeholder="tracedSVG"
          style={{ width: "100%", height: "auto" }}
          className="global_not-draggable"
        />
      </div> */}
      <div className="story_image-section global_padding">
        <img
          src={storyData.hero.url}
          atl="hero"
          width={"100%"}
          style={{ backgroundPosition: "center center" }}
        ></img>
      </div>

      <div className="story_bottom-section">
        <div className="story_bottom-left">
          <p className="global_subtitle global_padding">{storyData.tagline}</p>

          {storyData.storyStatistics.map(el => {
            return <Statistic num={el.number} text={el.caption} />
          })}
        </div>

        <div className="story_bottom-right global_padding-top">
          <p
            className="global_paragraph-text"
            style={{ paddingBottom: "1.5rem" }}
            dangerouslySetInnerHTML={{ __html: storyData.journey.html }}
          ></p>
        </div>
        {/* </Fade> */}
      </div>
    </div>
  )
}

export default Story

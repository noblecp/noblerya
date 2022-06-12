import React, { useEffect } from "react"
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"

// Styles
import "../page-styles/index.css"
import "../styles/globalStyles.css"

// Components
import App from "../components/App"

// CMS data query
export const QUERY = graphql`
  {
    graphCmsData {
      stories {
        id
        sectionHeader
        greeting
        position
        tagline
        about {
          html
        }
        journey {
          html
        }
        hero {
          fileName
          url
        }
        storyStatistics {
          ... on GRAPHCMS_StoryStatistic {
            number
            caption
          }
        }
      }
      differences {
        sectionHeader
        subtitle
        differenceItems {
          ... on GRAPHCMS_DifferenceItem {
            picture {
              url
            }
            title
            caption
          }
        }
      }
      timelines {
        sectionHeader
        timelineItems {
          ... on GRAPHCMS_TimelineItem {
            timestamp
            title
            filled
            description {
              html
            }
          }
        }
      }
      mottos {
        sectionHeader
        motto
        description {
          html
        }
      }
      contacts {
        sectionHeader
        title
        subtitle
        namePlaceholder
        emailPlaceholder
        messagePlaceholder
      }
      links {
        allLinks {
          ... on GRAPHCMS_LinkItem {
            title
            url
            icon {
              url
            }
          }
        }
      }
    }
  }
`
const Home = ({ data }) => {
  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: "en",
        }}
      >
        <meta charSet="utf-8" />
        <title>Ryan Noble</title>
        <link rel="canonical" href="https://noblerya.com/" />
        <meta name="description" content="Ryan Noble's personal website" />
      </Helmet>
      <App data={data} />
    </>
  )
}

export default Home

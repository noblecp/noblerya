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
      }
    }
  }
`
const Home = ({ data }) => {
  console.log(data)

  // useEffect(() => {}, [])
  // const GRAPHCMS_CONTENT_API_KEY =
  //   "https://api-us-east-1.graphcms.com/v2/cl4997ixd0za101wdd5on454b/master"

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

import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"

import { useJsonForm } from "gatsby-tinacms-json"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query IndexQuery {
      dataJson {
        title
        content
      }
    }
  `)

  return (
    <Layout>
      <h1>{data.dataJson.title}</h1>
      <p>{data.dataJson.content}</p>
    </Layout>
  )
}

export default IndexPage

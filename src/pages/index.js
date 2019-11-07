import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

import { useJsonForm } from "gatsby-tinacms-json"

export default function IndexPage({ data }) {
  const [page] = useJsonForm(data.dataJson, IndexPageForm)

  return (
    <Layout>
      <h1>{page.title}</h1>
      <p>{page.content}</p>
    </Layout>
  )
}

const IndexPageForm = {
  label: "Page",
  fields: [
    {
      label: "Title",
      name: "rawJson.title",
      component: "text",
    },
  ],
}

export const pageQuery = graphql`
  query IndexPageQuery {
    dataJson {
      title
      content

      rawJson
      fileRelativePath
    }
  }
`

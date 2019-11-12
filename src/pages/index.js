import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

import { useJsonForm } from "gatsby-tinacms-json"

export default function IndexPage({ data }) {
  const [page] = useJsonForm(data.dataJson, IndexPageForm)

  return (
    <Layout>
      <h1>{page.title}</h1>

      <ul>
        {page.blocks &&
          page.blocks.map(data => {
            return <li>{data.label}</li>
          })}
      </ul>
    </Layout>
  )
}

export const ListItemBlock = {
  label: "List Item",
  defaultItem: {
    label: "New Item",
  },
  fields: [{ name: "label", label: "Label", component: "text" }],
}

const IndexPageForm = {
  label: "Page",
  fields: [
    {
      label: "Title",
      name: "rawJson.title",
      component: "text",
    },
    {
      label: "List Items",
      name: "rawJson.blocks",
      component: "blocks",
      templates: {
        ListItemBlock,
      },
    },
  ],
}

export const pageQuery = graphql`
  query IndexPageQuery {
    dataJson {
      title
      blocks {
        label
      }

      rawJson
      fileRelativePath
    }
  }
`

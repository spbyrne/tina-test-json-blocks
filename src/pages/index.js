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
            return <li>{data.title}</li>
          })}
      </ul>
    </Layout>
  )
}

export const ListItemBlock = {
  label: "List Item",
  name: "title",
  defaultItem: {
    title: "New Item",
  },
  fields: [{ name: "title", label: "Item Name", component: "text" }],
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
        title
        _template
      }

      rawJson
      fileRelativePath
    }
  }
`

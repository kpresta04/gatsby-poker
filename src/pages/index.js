import React from "react"
import { graphql } from "gatsby"
export const query = graphql`
  query {
    cardImages: allFile(filter: { sourceInstanceName: { eq: "card-images" } }) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 100, maxHeight: 150, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
export default function Home({ data }) {
  console.log(data.cardImages)
  return <div>Hello world!</div>
}

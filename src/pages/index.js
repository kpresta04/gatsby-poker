import React from "react"
import { graphql } from "gatsby"
import createDeck from "~/utils/createDeck"
import "~/styles/blackjackBoard.css"
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
  const deck = createDeck()
  console.log(deck.cards[0])
  return <div className="blackJackBoard">Hello world!</div>
}

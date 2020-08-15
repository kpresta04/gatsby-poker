import React from "react"
import { graphql } from "gatsby"
import createDeck from "~/utils/createDeck"
import "~/styles/blackjackBoard.css"
export const query = graphql`
  query {
    cardImages: allFile(
      filter: { sourceInstanceName: { eq: "card-images" } }
      sort: { fields: name, order: ASC }
    ) {
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
  const imageDict = {
    Ac: data.cardImages.edges[0],
    Ad: data.cardImages.edges[1],
    Ah: data.cardImages.edges[2],
    As: data.cardImages.edges[3],
    "2c": data.cardImages.edges[4],
    "2d": data.cardImages.edges[5],
    "2h": data.cardImages.edges[6],
    "2s": data.cardImages.edges[7],
    "3c": data.cardImages.edges[8],
    "3d": data.cardImages.edges[9],
    "3h": data.cardImages.edges[10],
    "3s": data.cardImages.edges[11],
    "4c": data.cardImages.edges[12],
    "4d": data.cardImages.edges[13],
    "4h": data.cardImages.edges[14],
    "4s": data.cardImages.edges[15],
    "5c": data.cardImages.edges[16],
    "5d": data.cardImages.edges[17],
    "5h": data.cardImages.edges[18],
    "5s": data.cardImages.edges[19],
    "6c": data.cardImages.edges[20],
    "6d": data.cardImages.edges[21],
    "6h": data.cardImages.edges[22],
    "6s": data.cardImages.edges[23],
    "7c": data.cardImages.edges[24],
    "7d": data.cardImages.edges[25],
    "7h": data.cardImages.edges[26],
    "7s": data.cardImages.edges[27],
    "8c": data.cardImages.edges[28],
    "8d": data.cardImages.edges[29],
    "8h": data.cardImages.edges[30],
    "8s": data.cardImages.edges[31],
    "9c": data.cardImages.edges[32],
    "9d": data.cardImages.edges[33],
    "9h": data.cardImages.edges[34],
    "9s": data.cardImages.edges[35],
    "10c": data.cardImages.edges[36],
    "10d": data.cardImages.edges[37],
    "10h": data.cardImages.edges[38],
    "10s": data.cardImages.edges[39],
    Jc: data.cardImages.edges[40],
    Jd: data.cardImages.edges[41],
    Jh: data.cardImages.edges[42],
    Js: data.cardImages.edges[43],
    Qc: data.cardImages.edges[44],
    Qd: data.cardImages.edges[45],
    Qh: data.cardImages.edges[46],
    Qs: data.cardImages.edges[47],
    Kc: data.cardImages.edges[48],
    Kd: data.cardImages.edges[49],
    Kh: data.cardImages.edges[50],
    Ks: data.cardImages.edges[51],
  }

  // console.log(data.cardImages)
  const deck = createDeck()
  console.log(deck.cards[0])
  return (
    <div className="blackJackBoard">
      <img src={imageDict["Qs"].node.childImageSharp.fluid.src} alt="pic" />
    </div>
  )
}

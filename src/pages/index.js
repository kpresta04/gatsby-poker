import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import createDeck from "../utils/createDeck"
import "../styles/blackjackBoard.css"
import PlayingCard from "../components/PlayingCard/PlayingCard"
// import Hand from "pokersolver"
const Hand = require("pokersolver").Hand

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
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
      }
    }
  }
`
const deck = createDeck()

export const dealCards = (numberToDeal = 0) => {
  let cardArray = []

  deck.deal(numberToDeal, [cardArray])
  // console.log(cardArray[0].toString())
  return cardArray
}
export const buildCardArray = (hand, boardCards) => {
  const cardArray = []
  hand.forEach(card => {
    cardArray.push(card.shortString)
  })
  boardCards.forEach(card => {
    cardArray.push(card.shortString)
  })

  return cardArray
}
const players = {
  human: { chips: 5000, cards: [] },
  opponent: { chips: 5000, cards: [] },
}
export const getHandScore = (hand, boardCards) => {
  const cardArray = buildCardArray(hand, boardCards)
  const handScore = Hand.solve(cardArray)
  return handScore
}
export const getWinner = (playerHand, oppHand, boardCards) => {
  // const playerCardArray = buildCardArray(playerHand, boardCards)
  // const oppCardArray = buildCardArray(oppHand, boardCards)

  const playerScore = getHandScore(playerHand, boardCards)
  const oppScore = getHandScore(oppHand, boardCards)

  const result = Hand.winners([playerScore, oppScore])
  // console.log(result)
  // console.log("player score: ", playerScore)
  // console.log("opp score: ", oppScore)

  // console.log("Winning hand: ", result)
  // console.log(result[0].descr)
  // console.log(result)

  if (result[0].cardPool === playerScore.cardPool && result.length === 1) {
    return {
      name: "player",
      descr: playerScore.descr,
      oppDescr: oppScore.descr,
      cardPool: playerScore.cardPool,
    }
  } else if (result[0].cardPool === oppScore.cardPool && result.length === 1) {
    return {
      name: "opponent",
      descr: playerScore.descr,
      cardPool: oppScore.cardPool,
      oppDescr: oppScore.descr,
    }
  } else {
    return {
      name: "tie",
      descr: playerScore.descr,
      oppDescr: oppScore.descr,
      cardPool: playerScore.cardPool,
    }
  }
}
export default function Home({ data }) {
  const imageDict = {
    Ac: data.cardImages.edges[0].node.childImageSharp.fluid,
    Ad: data.cardImages.edges[1].node.childImageSharp.fluid,
    Ah: data.cardImages.edges[2].node.childImageSharp.fluid,
    As: data.cardImages.edges[3].node.childImageSharp.fluid,
    "2c": data.cardImages.edges[4].node.childImageSharp.fluid,
    "2d": data.cardImages.edges[5].node.childImageSharp.fluid,
    "2h": data.cardImages.edges[6].node.childImageSharp.fluid,
    "2s": data.cardImages.edges[7].node.childImageSharp.fluid,
    "3c": data.cardImages.edges[8].node.childImageSharp.fluid,
    "3d": data.cardImages.edges[9].node.childImageSharp.fluid,
    "3h": data.cardImages.edges[10].node.childImageSharp.fluid,
    "3s": data.cardImages.edges[11].node.childImageSharp.fluid,
    "4c": data.cardImages.edges[12].node.childImageSharp.fluid,
    "4d": data.cardImages.edges[13].node.childImageSharp.fluid,
    "4h": data.cardImages.edges[14].node.childImageSharp.fluid,
    "4s": data.cardImages.edges[15].node.childImageSharp.fluid,
    "5c": data.cardImages.edges[16].node.childImageSharp.fluid,
    "5d": data.cardImages.edges[17].node.childImageSharp.fluid,
    "5h": data.cardImages.edges[18].node.childImageSharp.fluid,
    "5s": data.cardImages.edges[19].node.childImageSharp.fluid,
    "6c": data.cardImages.edges[20].node.childImageSharp.fluid,
    "6d": data.cardImages.edges[21].node.childImageSharp.fluid,
    "6h": data.cardImages.edges[22].node.childImageSharp.fluid,
    "6s": data.cardImages.edges[23].node.childImageSharp.fluid,
    "7c": data.cardImages.edges[24].node.childImageSharp.fluid,
    "7d": data.cardImages.edges[25].node.childImageSharp.fluid,
    "7h": data.cardImages.edges[26].node.childImageSharp.fluid,
    "7s": data.cardImages.edges[27].node.childImageSharp.fluid,
    "8c": data.cardImages.edges[28].node.childImageSharp.fluid,
    "8d": data.cardImages.edges[29].node.childImageSharp.fluid,
    "8h": data.cardImages.edges[30].node.childImageSharp.fluid,
    "8s": data.cardImages.edges[31].node.childImageSharp.fluid,
    "9c": data.cardImages.edges[32].node.childImageSharp.fluid,
    "9d": data.cardImages.edges[33].node.childImageSharp.fluid,
    "9h": data.cardImages.edges[34].node.childImageSharp.fluid,
    "9s": data.cardImages.edges[35].node.childImageSharp.fluid,
    Tc: data.cardImages.edges[36].node.childImageSharp.fluid,
    Td: data.cardImages.edges[37].node.childImageSharp.fluid,
    Th: data.cardImages.edges[38].node.childImageSharp.fluid,
    Ts: data.cardImages.edges[39].node.childImageSharp.fluid,
    Jc: data.cardImages.edges[40].node.childImageSharp.fluid,
    Jd: data.cardImages.edges[41].node.childImageSharp.fluid,
    Jh: data.cardImages.edges[42].node.childImageSharp.fluid,
    Js: data.cardImages.edges[43].node.childImageSharp.fluid,
    Qc: data.cardImages.edges[44].node.childImageSharp.fluid,
    Qd: data.cardImages.edges[45].node.childImageSharp.fluid,
    Qh: data.cardImages.edges[46].node.childImageSharp.fluid,
    Qs: data.cardImages.edges[47].node.childImageSharp.fluid,
    Kc: data.cardImages.edges[48].node.childImageSharp.fluid,
    Kd: data.cardImages.edges[49].node.childImageSharp.fluid,
    Kh: data.cardImages.edges[50].node.childImageSharp.fluid,
    Ks: data.cardImages.edges[51].node.childImageSharp.fluid,
    Back: data.cardImages.edges[52].node.childImageSharp.fluid,
  }
  const [playersInfo, setPlayersInfo] = useState(players)
  const [humanHand, setHumanHand] = useState([])
  const [boardCards, setBoardCards] = useState([])
  const [oppHand, setOppHand] = useState([])
  const bigBlind = 20
  const smallBlind = 10
  let bigBlindIndex = 1

  const getbigBlindIndex = () => {
    if (bigBlindIndex === 0) {
      bigBlindIndex = 1
    } else {
      bigBlindIndex = 0
    }
  }
  // console.log(data.cardImages.edges[52])
  const startGame = () => {
    console.log(playersInfo)
  }

  // console.log(deck.cards[0])
  useEffect(() => {
    setHumanHand(dealCards(2))
    setOppHand(dealCards(2))
    setBoardCards(dealCards(3))
    startGame()
    // console.log(imageDict[humanHand[0].shortString])
  }, [])
  return (
    <div className="blackJackBoard">
      <div className="cardDiv oppCardDiv">
        <p
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            fontSize: "1.5rem",
            textShadow: "5px",
            margin: "1em",
          }}
        >
          Gatsby Poker
        </p>
        {oppHand.map((card, index) => (
          <PlayingCard
            key={index}
            ai={true}
            shortString={card.toString()}
            fluid={imageDict["Back"]}
          />
        ))}
      </div>
      <div className="cardDiv boardCardDiv">
        {boardCards.map((card, index) => (
          <PlayingCard
            key={index}
            shortString={card.toString()}
            fluid={imageDict[card.shortString]}
          />
        ))}
      </div>
      <div className="humanHandDiv cardDiv">
        {humanHand.map((card, index) => (
          <PlayingCard
            key={index}
            shortString={card.toString()}
            fluid={imageDict[card.shortString]}
          />
        ))}
      </div>
      {/* <button
        onClick={() => {
          const winner = getWinner(humanHand, oppHand, boardCards)
          console.log(`Player hand: ${winner.descr}`)
          console.log(`Opponent hand: ${winner.oppDescr}`)

          console.log("Winner is: " + winner.name)
        }}
      >
        Solve
      </button> */}
    </div>
  )
}

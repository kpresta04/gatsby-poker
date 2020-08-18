import createDeck from "../utils/createDeck"
import {
  dealCards,
  buildCardArray,
  getWinner,
  getHandScore,
} from "../pages/index"
import React from "react"
import { render, fireEvent, screen } from "@testing-library/react"
const Hand = require("pokersolver").Hand

test("Deal check", () => {
  const deck = createDeck()
  const testHand = dealCards(2)
  const cardArray = buildCardArray(testHand, [])
  expect(testHand.length).toBe(2)
  //   console.log(deck.cards.length)
  //   expect(deck.cards.length).toBe(50)
  expect(cardArray[0]).toBe(testHand[0].shortString)
  expect(cardArray[1]).toBe(testHand[1].shortString)
})

test("<PlayingCard> src is correct", () => {
  const deck = createDeck()
  const testHand = dealCards(1)
  const cardString = testHand[0].toString()

  render(<img alt={cardString} />)

  const pcImage = screen.getByRole("img", { name: cardString })

  expect(pcImage.getAttribute("alt")).toBe(cardString)

  // screen.debug()
})

test("Check winner", () => {
  const deck = createDeck()
  const testHand = dealCards(2)
  const testOppHand = dealCards(2)
  const boardCards = dealCards(5)
  // const testHand = [{ shortString: "6d" }, { shortString: "2h" }]
  // const testOppHand = [{ shortString: "8d" }, { shortString: "3d" }]
  // const boardCards = [
  //   { shortString: "Td" },
  //   { shortString: "Qd" },
  //   { shortString: "Qh" },
  // ]
  const winner = getWinner(testHand, testOppHand, boardCards)
  const winnerTest = Hand.winners([
    getHandScore(testHand, boardCards),
    getHandScore(testOppHand, boardCards),
  ])

  if (winner.name !== "tie") {
    expect(winner.cardPool).toStrictEqual(winnerTest[0].cardPool)
  }
})

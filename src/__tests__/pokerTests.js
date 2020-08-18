import createDeck from "../utils/createDeck"
import { dealCards, buildCardArray } from "../pages/index"
import React from "react"
import { render, fireEvent, screen } from "@testing-library/react"

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

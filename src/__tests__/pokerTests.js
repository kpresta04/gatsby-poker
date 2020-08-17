import createDeck from "../utils/createDeck"
import { dealCards } from "../pages/index"
import React from "react"
import { render, fireEvent, screen } from "@testing-library/react"

test("Deal check", () => {
  const deck = createDeck()
  const testHand = dealCards(2)
  expect(testHand.length).toBe(2)
  //   console.log(deck.cards.length)
  //   expect(deck.cards.length).toBe(50)
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

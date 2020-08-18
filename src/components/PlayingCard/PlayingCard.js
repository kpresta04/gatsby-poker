import React from "react"
import Img from "gatsby-image"
import "./PlayingCard.css"

export default function PlayingCard({
  fluid = "src/images/",
  shortString,
  ai = false,
}) {
  return (
    <Img
      className="playingCard"
      alt={ai ? "Card" : shortString}
      title="Playing card"
      style={{ width: "100%", height: "auto", margin: ".5rem" }}
      fluid={fluid}
    />
  )
}

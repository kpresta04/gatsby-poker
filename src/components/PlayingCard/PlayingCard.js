import React from "react"
import Img from "gatsby-image"

export default function PlayingCard({ fluid = "src/images/", cardString }) {
  return (
    <Img
      alt={cardString}
      title="Playing card"
      style={{ width: "100%", height: "auto" }}
      fluid={fluid}
    />
  )
}

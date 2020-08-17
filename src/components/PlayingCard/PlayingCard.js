import React from "react"
import Img from "gatsby-image"

export default function PlayingCard({ fluid = "src/images/", shortString }) {
  return (
    <Img
      alt={shortString}
      title="Playing card"
      style={{ width: "100%", height: "auto" }}
      fluid={fluid}
    />
  )
}

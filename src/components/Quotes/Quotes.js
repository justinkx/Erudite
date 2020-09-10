import React from "react"

export default function Quotes({ quote = "“" }) {
  return <span className="gray-quotes">{quote}</span>
}

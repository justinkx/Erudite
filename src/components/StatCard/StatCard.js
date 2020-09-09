import React from "react"
import "./StatCard.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHotel } from "@fortawesome/free-solid-svg-icons"
function StatCard({
  borderColor = `#f29993`,
  title = "Colleges",
  icon = faHotel,
  count = 1000,
  width = "23%",
}) {
  return (
    <div
      style={{ borderColor: borderColor, width: width }}
      className="stat-container"
    >
      <FontAwesomeIcon
        style={{ color: borderColor }}
        className="search-icon"
        icon={icon}
        size="2x"
      />
      <div className="border-div"></div>
      <div className="stat-data">
        <h5>{title}</h5>
        <h4>{count}</h4>
      </div>
    </div>
  )
}

export default StatCard

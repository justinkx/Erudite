import React from "react"
import "./Avatar.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
function IconAvatar({ icon = faSearch, size = 30, color = "#f1f0f5" }) {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
      }}
      className="icon-avatar-container"
    >
      <FontAwesomeIcon className="search-icon" icon={icon} size="1x" />
    </div>
  )
}

export default IconAvatar

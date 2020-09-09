import React from "react"
import "./SearchBar.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
function SearchBar({ placeholder = "search" }) {
  return (
    <div className="search-container">
      <input type="text" placeholder={placeholder} className="input" />
      <button className="icon-container">
        <FontAwesomeIcon className="search-icon" icon={faSearch} size="1x" />
      </button>
    </div>
  )
}

export default SearchBar

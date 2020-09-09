import React from "react"
import "./AdminPage.scss"
import AdminNavBar from "./AdminNavBar"
import SearchBar from "../SearchBar/SearchBar"
import { faBell, faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons"
import IconAvatar from "../Avatar/IconAvatar"
import User from "../../images/users/user1.jpg"
import ImageAvatar from "../Avatar/ImageAvatar"

function AdminHeader({}) {
  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px"
  }

  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0"
  }
  return (
    <>
      <div className="admin-header">
        <div onClick={openNav} className="hamburger-menu">
          &#9776;
        </div>
        <h5 class="welcome">Welcome To Erudite</h5>

        <div className="search-slot">
          <SearchBar />
        </div>
        <div className="avatar-slot">
          <div class="noti-container">
            <IconAvatar icon={faBell} size="30" />
            <IconAvatar icon={faEnvelopeOpenText} size="30" />
          </div>
          <ImageAvatar image={User} size={30} />
        </div>
      </div>
      <div id="mySidenav" className="sidenav">
        <div className="closebtn" onClick={closeNav}>
          &times;
        </div>
        <AdminNavBar />
      </div>
    </>
  )
}

export default AdminHeader

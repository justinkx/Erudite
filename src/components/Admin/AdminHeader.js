import React from "react"
import "./AdminPage.scss"
import AdminNavBar from "./AdminNavBar"

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
        <h5>Welcome To Erudite</h5>
      </div>
      <div id="mySidenav" className="sidenav">
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
          &times;
        </a>
        <AdminNavBar />
      </div>
    </>
  )
}

export default AdminHeader

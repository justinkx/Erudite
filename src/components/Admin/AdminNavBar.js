import React from "react"
import "./AdminPage.scss"
import Logo from "../../images/logo.png"
import { Link } from "gatsby"

function AdminNavBar() {
  return (
    <ul className="navbar-ul">
      <li className="nav-item logo-list">
        <Link>
          <img className="logo" src={Logo} />
        </Link>
      </li>
      <li className="nav-item link-item">
        <Link>Dashboard</Link>
      </li>
      <li className="nav-item link-item">
        <Link>Students</Link>
      </li>
      <li className="nav-item link-item">
        <Link>Teachers</Link>
      </li>
      <li className="nav-item link-item">
        <Link>Library</Link>
      </li>
      <li className="nav-item link-item">
        <Link>Hostel</Link>
      </li>
    </ul>
  )
}

export default AdminNavBar

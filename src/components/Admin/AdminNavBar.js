import React, { memo } from "react"
import "./AdminPage.scss"
import Logo from "../../images/logo.png"
import { Link, navigate, useLocation } from "@reach/router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBookReader } from "@fortawesome/free-solid-svg-icons"
function AdminNavBar() {
  const onNavigate = route => navigate(`/admin/${route}`)
  const location = useLocation()

  return (
    <ul className="navbar-ul">
      <li
        onClick={() => onNavigate("dashboard")}
        className="nav-item logo-list"
      >
        <FontAwesomeIcon className="logo" icon={faBookReader} size="2x" />
      </li>
      <li
        style={{
          backgroundColor: location.pathname.includes("dashboard")
            ? "white"
            : "transparent",
        }}
        onClick={() => onNavigate("dashboard")}
        className="nav-item link-item"
      >
        <Link
          getProps={({ isCurrent }) => {
            return {
              style: {
                color: isCurrent ? "#5b4f8e" : "white",
              },
            }
          }}
          to="/admin/dashboard"
        >
          Dashboard
        </Link>
      </li>
      <li
        style={{
          backgroundColor: location.pathname.includes("students")
            ? "white"
            : "transparent",
        }}
        onClick={() => onNavigate("students")}
        className="nav-item link-item"
      >
        <Link
          getProps={({ isCurrent }) => {
            return {
              style: {
                color: isCurrent ? "#5b4f8e" : "white",
              },
            }
          }}
          to="/admin/students"
        >
          Students
        </Link>
      </li>
      <li
        style={{
          backgroundColor: location.pathname.includes("teachers")
            ? "white"
            : "transparent",
        }}
        onClick={() => onNavigate("teachers")}
        className="nav-item link-item"
      >
        <Link
          getProps={({ isCurrent }) => {
            return {
              style: {
                color: isCurrent ? "#5b4f8e" : "white",
              },
            }
          }}
          to="/admin/teachers"
        >
          Teachers
        </Link>
      </li>
      <li
        style={{
          backgroundColor: location.pathname.includes("library")
            ? "white"
            : "transparent",
        }}
        onClick={() => onNavigate("library")}
        className="nav-item link-item"
      >
        <Link
          getProps={({ isCurrent }) => {
            return {
              style: {
                color: isCurrent ? "#5b4f8e" : "white",
              },
            }
          }}
          to="/admin/library"
        >
          Library
        </Link>
      </li>
      <li
        style={{
          backgroundColor: location.pathname.includes("hostel")
            ? "white"
            : "transparent",
        }}
        onClick={() => onNavigate("hostel")}
        className="nav-item link-item"
      >
        <Link
          getProps={({ isCurrent }) => {
            return {
              style: {
                color: isCurrent ? "#5b4f8e" : "white",
              },
            }
          }}
          to="/admin/hostel"
        >
          Hostel
        </Link>
      </li>
    </ul>
  )
}

export default AdminNavBar = memo(AdminNavBar)

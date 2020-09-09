import React from "react"
import "./AdminPage.scss"
import AdminHeader from "./AdminHeader"
import AdminNavBar from "./AdminNavBar"
import { Router, Switch } from "@reach/router"
import PrivateRoute from "../privateRoute"
import Dashboard from "./Dashboard/Dashboard"

function AdminPageLayout({ children }) {
  return (
    <div className="admin-container">
      <nav className="admin-navbar">
        <AdminNavBar />
      </nav>
      <div className="content-container">
        <AdminHeader />
        <div className="content">
          {children}
          <h2 style={{ height: "150vh" }}>gefjhwg</h2>
        </div>
      </div>
    </div>
  )
}

export default AdminPageLayout

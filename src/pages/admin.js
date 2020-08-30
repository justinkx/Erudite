import React from "react"
import { Router } from "@reach/router"
import PrivateRoute from "../components/privateRoute"
import AdminPage from "../components/Admin/AdminPage"
import Dashboard from "../components/Admin/Dashboard/Dashboard"
function admin() {
  return (
    <Router>
      <PrivateRoute path="/admin" component={AdminPage} />
      {/* <PrivateRoute path="admin/dashboard" component={Dashboard} />
      <PrivateRoute path="admin/schools" component={AdminPage} />
      <PrivateRoute path="admin/students" component={AdminPage} />
      <PrivateRoute path="admin/teachers" component={AdminPage} />
      <PrivateRoute path="admin/settings" component={AdminPage} /> */}
    </Router>
  )
}

export default admin

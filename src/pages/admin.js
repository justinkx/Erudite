import React, { useEffect } from "react"
import { Router } from "@reach/router"
import PrivateRoute from "../components/privateRoute"
import AdminPageLayout from "../components/Admin/AdminPageLayout"
import Dashboard from "../components/Admin/Dashboard/Dashboard"
import Hostel from "../components/Admin/Hostel/Hostel"
import Library from "../components/Admin/Library/Library"
import Students from "../components/Admin/Students/Students"
import Teachers from "../components/Admin/Teachers/Teachers"
import { navigate } from "@reach/router"

function admin() {
  return (
    <AdminPageLayout>
      <Router basepath="/admin">
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/students" component={Students} />
        <PrivateRoute path="/teachers" component={Teachers} />
        <PrivateRoute path="/library" component={Library} />
        <PrivateRoute path="/library" component={Hostel} />
      </Router>
    </AdminPageLayout>
  )
}

export default admin

import React from "react"
import { navigate } from "gatsby"
import useFirebase from "../utils/useFirebase"
const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const firebase = useFirebase()
  if (firebase !== null) {
    if (!firebase.auth().currentUser && location.pathname !== `/`) {
      navigate("/")
      return null
    }
    return <Component {...rest} />
  }
  return null
}
export default PrivateRoute

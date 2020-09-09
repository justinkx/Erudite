import React, { useEffect } from "react"
import SEO from "../components/seo"
import AppPage from "../components/index"

import Header from "../components/Header/Header"
import useFirebase from "../utils/useFirebase"
import { navigate } from "gatsby"
const IndexPage = () => {
  const firebase = useFirebase()
  useEffect(() => {
    console.log("firebase", firebase)
    if (firebase && firebase.auth().currentUser) {
      navigate("/admin/dashboard")
    }
  }, [firebase])
  return (
    <>
      <SEO title="Erudite | Education Management Solution" />
      <Header />
      <AppPage />
    </>
  )
}

export default IndexPage

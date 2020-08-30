import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { colors } from "../../utils/colors"
import "./Header.scss"
import NavbarComponent from "../Navbar/Navbar"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Header = ({ siteTitle = "Login" }) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      collegeImage: file(relativePath: { eq: "college.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log("data", data)
  return (
    <header className="header">
      <NavbarComponent />
      <div className="banner-container">
        <div className="data-container">
          <h2>Smart Solutions</h2>
          <h5>Find Your Ideal Education Solutions</h5>
        </div>
        <div className="image-container">
          <Img
            style={{ maxHeight: "50vh" }}
            fluid={data.collegeImage.childImageSharp.fluid}
            alt="college image"
            imgStyle={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </header>
  )
}

export default Header

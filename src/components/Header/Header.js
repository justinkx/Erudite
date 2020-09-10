import React from "react"
import "./Header.scss"
import NavbarComponent from "../Navbar/Navbar"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Header = ({ siteTitle = "Login" }) => {
  const data = useStaticQuery(graphql`
    query Headerquery {
      collegeImage: file(relativePath: { eq: "college.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <header className="header">
      <NavbarComponent />
      <div className="banner-container">
        <div className="data-container">
          <h2>Management Solutions</h2>
          <h5>Experience education with a difference</h5>
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

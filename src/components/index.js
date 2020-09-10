import React from "react"
import "./index.scss"
import Quotes from "./Quotes/Quotes"
import HomeCarouselSlide from "./Home/HomeCarousel"
import { graphql, useStaticQuery } from "gatsby"

const AppPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      home1: file(relativePath: { eq: "home/home1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      home2: file(relativePath: { eq: "home/home2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      home3: file(relativePath: { eq: "home/home3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log("data", data)
  const slideData = [
    {
      title: "Programs",
      desc:
        "Without sharpen your weapon; standing on the battlefield would not increase your chance of winning",
    },
    {
      title: "Team Work",
      desc: "Alone we can do so little; together we can do so much",
    },
    {
      title: "In-Campus Programmes",
      desc:
        "College was especially sweet because of the positive, hopeful atmosphere of a college campus.",
    },
  ]
  return (
    <main>
      <div className="home-main center">
        <h3 className="green-underline">DISCOVER</h3>
        <div className="discover">
          <Quotes />
          <span className="hPad5 discover-para">
            The secret of getting ahead is getting started. The secret of
            getting started is breaking your complex overwhelming tasks into
            small manageable tasks, and then starting on the first one..
          </span>

          <Quotes quote="”" />
        </div>
      </div>
      <div className="home-carousel">
        {slideData.map((item, index) => (
          <HomeCarouselSlide
            index={index + 1}
            title={item.title}
            desc={item.desc}
            key={index}
            image={data[`home${index + 1}`]}
          />
        ))}
      </div>
    </main>
  )
}

export default AppPage

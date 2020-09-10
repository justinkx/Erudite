import React, { memo, useEffect } from "react"
import "./Home.scss"
import Img from "gatsby-image"
import anime from "animejs/lib/anime.es.js"

const HomeCarouselSlide = ({ image, title = "", desc = "", index }) => {
  useEffect(() => {
    const textWrapper = document.querySelector(".ml14 .letters")
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    )
    anime
      .timeline({ loop: true })
      .add({
        targets: ".ml14 .line",
        scaleX: [0, 1],
        opacity: [0.5, 1],
        easing: "easeInOutExpo",
        duration: 900,
      })
      .add({
        targets: ".ml14 .letter",
        opacity: [0, 1],
        translateX: [40, 0],
        translateZ: 0,
        scaleX: [0.3, 1],
        easing: "easeOutExpo",
        duration: 2000,
        offset: "-=600",
        delay: (el, i) => 150 + 25 * i,
      })
      .add({
        targets: ".ml14",
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000,
      })
  }, [])
  return (
    <div id={`#home${index}`} className="slide-div">
      <Img
        style={{ maxHeight: "70vh", minWidth: "100vw", minHeight: "100%" }}
        fluid={{
          ...image.childImageSharp.fluid,
        }}
        alt="Home image"
        imgStyle={{ objectFit: "fill" }}
      />
      <div className="slide-overlay">
        <div className="slide-content">
          <h1 className="ml14">
            <span className="text-wrapper">
              <span className="letters">{title}</span>
              <span className="line"></span>
            </span>
          </h1>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  )
}
export default memo(HomeCarouselSlide)

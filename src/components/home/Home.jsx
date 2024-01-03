import React from "react"
import Awards from "./awards/Awards"
import Featured from "./featured/Featured"
import Hero from "./hero/Hero"
import Location from "./location/Location"
import HomeAbout from "../HomeAbout/HomeAbout"
import Recent from "./recent/Recent"
import Team from "./team/Team"


const Home = () => {
  return (
    <>
      <Hero />
      
      <Featured />
      <HomeAbout/>
      <Recent />
      <Awards />
      <Location />
      <Team />
      {/* <Price /> */}
    </>
  )
}

export default Home

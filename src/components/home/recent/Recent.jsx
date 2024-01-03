import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {

  const images = [
    require("../../../assets/r4.jpeg"),
  require("../../../assets/r5.jpeg"),
  require("../../../assets/r6.jpeg"),
  require("../../../assets/r7.jpeg"),
    
  ]
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='MINERAL RESOURCES IN EDO STATE' subtitle='There are over 50 different solid minerals in Edo State and the Edo State Mining Development and Investment Company has obtained over 30 licenses / leases. These licenses cover areas of different solid minerals such as Gold, Lithium, Kaolin, Vespar, Lead, Bitumen and Lepidolite, Calcite and lots more.' />
          <RecentCard images={images} />
        </div>
      </section>
    </>
  )
}

export default Recent

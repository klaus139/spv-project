import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {

  const images = [
    require("../../../assets/h1.jpeg"),
    require("../../../assets/h2.jpeg"),
    require("../../../assets/h3.jpeg"),
    require("../../../assets/h4.jpeg"),
    require("../../../assets/h5.jpeg"),
    require("../../../assets/h6.jpeg"),
    require("../../../assets/h7.jpeg"),
    require("../../../assets/h8.jpeg"),
    require("../../../assets/h9.jpeg"),
  
    
  ]
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='We have accomplished so much over the years' subtitle='We have taken the mandate by his Excellency Governor Godwin Obaseki to revitalize the mining and solid mineral sector of Edo State with scores of records and award to show the evidence of how much we strive to leave a landmark in Edo solid mineral history.' />
          <RecentCard images={images} />
        </div>
      </section>
    </>
  )
}

export default Recent

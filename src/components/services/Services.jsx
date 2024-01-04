import React from "react"
import img from "../images/partner1.jpeg"
import Back from "../common/Back"
import "../home/featured/Featured.css"
import PartnerCard from "../partners/PartnerCard"

const Services = () => {
  return (
    <>
      <section className='services mb'>
        <Back name='Partners' title='Partners -Our Partners' cover={img} />
        <div className='featured container'>
          <PartnerCard />
        </div>
      </section>
    </>
  )
}

export default Services

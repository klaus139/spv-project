import React from "react"
import { partners } from "../data/Data"

const PartnerCard = () => {
  return (
    <>
      <div className='content grid5 mtop'>
        {partners.map((items, index) => (
          <div className='box' key={index}>
            <img src={items.cover} alt='' />
            <h4>{items.name}</h4>
            <label>{items.total}</label>
          </div>
        ))}
      </div>
    </>
  )
}

export default PartnerCard

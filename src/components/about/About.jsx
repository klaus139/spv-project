import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/b4.jpeg"
import images from "../constants/images"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Mission and Vision' subtitle='What motivates us' />

            <p>To harness, the mining and energy potentials for sustainable supply of energy and optimal utilization of natural resources for the overall development of the state.</p>
            <p>To facilitate the implementation of Government policies, infrastructure, development and job creation from the exploitation of natural resources in the site.</p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src={images.comm} alt='' />
            <div className='name-div'>
            
            <h1>Hon. Enaholo Ojiefoh</h1>
            <h3>Honorable Commissioner for Mining and Energy Edo State</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About

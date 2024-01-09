import React from 'react';
import Heading from '../common/Heading';
import { images } from '../constants';
import './homeabout.css'
import { Link } from 'react-router-dom';
const HomeAbout = () => {
  return (
    <>
      <section className='home-about'>

        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our SPV' subtitle='Edo State Mining Development and Investment Company' />

            <p>The Edo State Mining and Investment Company Limited (ESMIC) was established by the Edo State Government in 2023 as a Special Purpose Vehicle (SPV) with the primary goal of expediting the development of mining activities within the state. To facilitate an investor-friendly and conducive environment for miners, EMIC adopted a policy of public-private partnership to rejuvenate the mining sector in Edo State. It is also a vehicle from which miners and stakeholders of Edo State mining sector can benefit immensely from.</p>
            <p>Edo State has successfully attracted a diverse range of investors, including both local and international partners, expressing keen interest in exploring and investing in the abundant solid mineral resources within the region. Notable minerals include kaolin, limestone, bentonite, gold, lithium, and various others. This initiative by the SPV company, led by the Honorable Commissioner for Mining and Energy, Hon. Enaholo Ojiefoh, stands as a pivotal asset in advancing the development of solid minerals in Edo State. For a more in-depth exploration of our endeavors and contributions to the mining sector, feel free to delve into additional information about EMIC.</p>
            <Link to='/about'>
            <button className='btn2'>More About Us</button>
            
            </Link>
   
          </div>
          <div className='right row'>
            <img src={images.obas} alt=''className='home-about-img' />
            <div className='name-div'>
            <h3>His Excellency</h3>
            <h1>GODWIN OBASEKI</h1>
            <h3>Governor, Edo State</h3>
            </div>
          </div>
        </div>
      </section>
    </>
   
  )
}

export default HomeAbout
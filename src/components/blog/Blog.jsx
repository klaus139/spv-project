import React from "react"
import Back from "../common/Back"
import RecentCard from "../gallery/RecentCard"
import "../home/recent/recent.css"
import img from "../images/gala1.jpeg"

const Blog = () => {
  return (
    <>
      <section className='blog-out mb'>
        <Back name='gallery' title='Photo Grid - Our Solid Mineral Gallery' cover={img} />
        <div className='container recent'>
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Blog

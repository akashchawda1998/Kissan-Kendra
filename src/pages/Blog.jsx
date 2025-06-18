import React from 'react'
import ComingSoon from '../components/ComingSoon'
import BlogContent from '../components/Blogcontent'

const Blog = () => {
  return (
    <>
        <div
      className="breadcumb-wrapper"
      style={{ backgroundImage: `url('https://images.unsplash.com/photo-1709185935705-73830f0ec4ad?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGZhcm0lMjB0cnVja3xlbnwwfHwwfHx8MA%3D%3D')`,  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat"  }}
    >
      <div className="container z-index-common">
        <div className="breadcumb-content">
          <h1 className="breadcumb-title">Our Blogs</h1>
        </div>
        <div className="breadcumb-menu-wrap">
          <ul className="breadcumb-menu">
            <li><a href="index.html">Home</a></li>
            <li>Our Blogs</li>
          </ul>
        </div>
      </div>
    </div>
    <BlogContent/>
    </>
  )
}

export default Blog

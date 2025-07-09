import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import blogImg1 from "../assets/img/blog/blog-img-1-1.jpg";
import blogImg2 from "../assets/img/blog/blog-img-1-2.jpg";
import blogImg3 from "../assets/img/blog/blog-img-1-3.jpg";
import blogImg4 from "../assets/img/blog/blog-img-1-4.jpg";
import authorImg from "../assets/img/blog/blog-auth-1-1.png";
import titleLogo from "../assets/img/icon/title-logo.png";

const blogPosts = [
  {
    image: blogImg1,
    title: "Harvest London Publishes Its First Annual",
    tag: "Fresh Vegetables",
    author: "Jakki James",
    date: "Dec 13, 2024",
  },
  {
    image: blogImg2,
    title: "Harvest London Releases Their Initial Annual",
    tag: "Fresh Vegetables",
    author: "Jakki James",
    date: "Dec 13, 2024",
  },
  {
    image: blogImg3,
    title: "First Annual Report by Harvest is Published",
    tag: "Fresh Vegetables",
    author: "Jakki James",
    date: "Dec 13, 2024",
  },
  {
    image: blogImg4,
    title: "Harvest Issues London Its Annual Report",
    tag: "Fresh Vegetables",
    author: "Jakki James",
    date: "Dec 13, 2024",
  },
];

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 600,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 4,
  slidesToScroll: 1,
  centerMode: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: { slidesToShow: 6 },
    },
    {
      breakpoint: 992,
      settings: { slidesToShow: 3 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 480,
      settings: { slidesToShow: 1 },
    },
  ],
};

const BlogSection = () => {
  return (
    <section className="blog-layout1">
      <div className="container">
        <div className="title-area text-center wow fadeInUp" data-wow-delay="0.3s">
          <div className="title-img">
            <img src={titleLogo} alt="title logo" />
          </div>
          <span className="sec-subtitle">Blog & News</span>
          <h2 className="sec-title">Recent Articles</h2>
        </div>

        <Slider {...settings}>
          {blogPosts.map((post, i) => (
            <div className="col-lg-4 px-2" key={i}>
              <div className="vs-blog blog-single">
                <div className="blog-img">
                  <a href="blog-details.html">
                    <img src={post.image} alt="Blog" />
                  </a>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <a href="#"><i className="fal fa-tag"></i> {post.tag}</a>
                  </div>
                  <h2 className="blog-title">
                    <a href="blog-details.html">{post.title}</a>
                  </h2>
                  <div className="blog-inner-author">
                    <img src={authorImg} alt="Author" />
                    <div className="text">
                      by <a href="blog.html">{post.author}</a>
                      <a href="blog.html" className="blog-date">{post.date}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <div className="blog-btn text-center mt-4">
          <a href="blog.html" className="vs-btn">View All News</a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

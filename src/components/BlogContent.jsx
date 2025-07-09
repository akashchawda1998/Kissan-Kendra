import React from "react";

// Import blog post images
import blogImg1 from "../assets/img/blog/blog-s-1-1.png";
import blogImg2 from "../assets/img/blog/blog-s-1-2.png";
import blogImg3 from "../assets/img/blog/blog-s-1-3.png";
import blogImg4 from "../assets/img/blog/blog-s-1-4.png";
import blogImg5 from "../assets/img/blog/blog-s-1-5.png";
// import blogImg6 from "../assets/img/blog/blog-s-1-6.png";

// Import recent post images
import recentPost1 from "../assets/img/blog/recent-post-1-1.jpg";
import recentPost2 from "../assets/img/blog/recent-post-1-2.jpg";
import recentPost3 from "../assets/img/blog/recent-post-1-3.jpg";

// Import author image
import authorImg from "../assets/img/blog/blog-auth-1-1.png";

const blogImages = [
  blogImg1,
  blogImg2, // Will be used for carousel images along with blogImg3
  blogImg3,
  blogImg4,
  blogImg5,
];

const recentPostImages = [recentPost1, recentPost2, recentPost3];

const BlogContent = () => {
  return (
    <section className="vs-blog-wrapper space-top space-extra-bottom">
      <div className="container">
        <div className="row">
          {/* Blog Posts Section */}
          <div className="col-lg-8">
            {[1, 2, 3, 4, 5, 6].map((id, idx) => (
              <div key={id} className="vs-blog blog-single">
                {idx === 1 ? (
                  // Carousel-like images for the 2nd post
                  <div className="blog-img vs-carousel">
                    <a href="blog-details.html">
                      <img src={blogImg2} alt="Blog Post Slide 1" />
                    </a>
                    <a href="blog-details.html">
                      <img src={blogImg3} alt="Blog Post Slide 2" />
                    </a>
                  </div>
                ) : idx !== 2 ? (
                  // Regular image for all except the 3rd post
                  <div className="blog-img">
                    <a href="blog-details.html">
                      <img src={blogImages[idx]} alt={`Blog Post ${idx + 1}`} />
                    </a>
                  </div>
                ) : null}

                <div className="blog-content">
                  <div className="blog-meta">
                    <a href="#">
                      <i className="fal fa-tag"></i> Fresh Vegetables
                    </a>
                  </div>
                  <h2 className="blog-title">
                    <a href="blog-details.html">
                      Harvest London Publishes Its First Annual Report
                    </a>
                  </h2>
                  <p className="blog-text">
                    Suspendisse potenti. Maecenas dapibus ac tellus sed pulvinar
                    ullamcorper volutpat. Sociis, a eget mollis, exercitationem
                    fames Su dapibus ac tellus.
                  </p>
                  <div className="blog-inner-author">
                    <img src={authorImg} alt="Author Jakki James" />
                    by <a href="blog.html">Jakki James</a>
                    <a href="blog.html" className="blog-date">
                      Dec 13, 2024
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {/* Pagination */}
            <div className="vs-pagination">
              <ul>
                <li className="arrow">
                  <a href="#">
                    <i className="fal fa-long-arrow-left"></i>
                  </a>
                </li>
                {[1, 2, 3, "...", 6].map((page, idx) => (
                  <li key={idx}>
                    <a href="#">{page}</a>
                  </li>
                ))}
                <li className="arrow">
                  <a href="#">
                    <i className="fal fa-long-arrow-right"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Sidebar Section */}
          <div className="col-lg-4">
            <aside className="sidebar-area">
              {/* Recent Posts */}
              <div className="widget">
                <h3 className="widget_title">Recent Posts</h3>
                <div className="recent-post-wrap">
                  {[1, 2, 3].map((num) => (
                    <div key={num} className="recent-post">
                      <div className="media-img">
                        <a href="blog-details.html">
                          <img
                            src={recentPostImages[num - 1]}
                            alt={`Recent blog post ${num}`}
                          />
                        </a>
                      </div>
                      <div className="media-body">
                        <div className="recent-post-meta">
                          <a href="blog.html">
                            {["Dec 13", "Jan 08", "Nov 07"][num - 1]}, 2024
                          </a>
                        </div>
                        <h4 className="post-title">
                          <a className="text-inherit" href="blog-details.html">
                            Learn React JS Tutorial For Beginners
                          </a>
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="widget widget_categories">
                <h3 className="widget_title">Categories</h3>
                <ul>
                  {[
                    ["Dairy farms", 23],
                    ["Grain", 10],
                    ["Agriculture", 9],
                    ["Fruit farming", 14],
                    ["Livestock farms", 12],
                    ["Mixed farming", 12],
                  ].map(([name, count]) => (
                    <li key={name}>
                      <a href="blog.html">{name}</a>
                      <span>{count.toString().padStart(2, "0")}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Useful Services */}
              <div className="widget widget_nav_menu">
                <h3 className="widget_title">Useful Services</h3>
                <div className="menu-all-pages-container footer-menu">
                  <ul className="menu">
                    {[
                      "About Us",
                      "Meet Our Team",
                      "Services",
                      "News & Media",
                      "Contact Us",
                    ].map((label) => (
                      <li key={label}>
                        <a
                          href={`${label
                            .toLowerCase()
                            .replace(/ & /g, "-")
                            .replace(/\s+/g, "-")}.html`}
                        >
                          {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Meta */}
              <div className="widget widget_meta">
                <h3 className="widget_title">Meta</h3>
                <ul>
                  {[
                    "Log in",
                    "Entries feed",
                    "Comments feed",
                    "WordPress.org",
                  ].map((item) => (
                    <li key={item}>
                      <a href="#">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div className="widget widget_newsletter">
                <h4 className="widget_title">Newsletter</h4>
                <form className="newsletter-form">
                  <p className="form_text">
                    Enter your email and get recent news & recent offers update.
                  </p>
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Enter your email...."
                  />
                  <button type="submit" className="vs-btn">
                    Subscribe
                  </button>
                </form>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogContent;

import React from "react";

const BlogContent = () => {
  return (
    <section className="vs-blog-wrapper space-top space-extra-bottom">
      <div className="container">
        <div className="row">
          {/* Blog Posts */}
          <div className="col-lg-8">
            {[1, 2, 3, 4, 5, 6].map((id, idx) => (
              <div key={id} className="vs-blog blog-single">
                {idx === 1 ? (
                  <div className="blog-img vs-carousel">
                    <a href="blog-details.html">
                      <img src="src/assets/img/blog/blog-s-1-2.png" alt="Blog" />
                    </a>
                    <a href="blog-details.html">
                      <img src="src/assets/img/blog/blog-s-1-3.png" alt="Blog" />
                    </a>
                  </div>
                ) : idx !== 2 ? (
                  <div className="blog-img">
                    <a href="blog-details.html">
                      <img
                        src={`src/assets/img/blog/blog-s-1-${idx + 1}.png`}
                        alt="Blog"
                      />
                    </a>
                  </div>
                ) : null}

                <div className="blog-content">
                  <div className="blog-meta">
                    <a href="#">
                      <i className="fal fa-tag"></i>Fresh Vegetables
                    </a>
                  </div>
                  <h2 className="blog-title">
                    <a href="blog-details.html">
                      Harvest London Publishes Its First Annua
                    </a>
                  </h2>
                  <p className="blog-text">
                    Suspendisse potenti. Maecenas dapibus ac tellus sed
                    pulvinar ulum bib volutpat. Sociis, a eget mollis,
                    exercitationem famesSu dapibus ac tellus.
                  </p>
                  <div className="blog-inner-author">
                    <img
                      src="src/assets/img/blog/blog-auth-1-1.png"
                      alt="Author"
                    />
                    by <a href="blog.html">Jakki James</a>
                    <a href="blog.html" className="blog-date">
                      Dec 13, 2024
                    </a>
                  </div>
                </div>
              </div>
            ))}

            <div className="vs-pagination">
              <ul>
                <li className="arrow">
                  <a href="#">
                    <i className="fal fa-long-arrow-left"></i>
                  </a>
                </li>
                <li>
                  <a href="#">1</a>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">...</a>
                </li>
                <li>
                  <a href="#">6</a>
                </li>
                <li className="arrow">
                  <a href="#">
                    <i className="fal fa-long-arrow-right"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
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
                            src={`src/assets/img/blog/recent-post-1-${num}.jpg`}
                            alt="Recent Blog"
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
                    {["About Us", "Meet Our Team", "Services", "News & Media", "Contact Us"].map(
                      (label) => (
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
                      )
                    )}
                  </ul>
                </div>
              </div>

              {/* Meta */}
              <div className="widget widget_meta">
                <h3 className="widget_title">Meta</h3>
                <ul>
                  {["Log in", "Entries feed", "Comments feed", "WordPress.org"].map((item) => (
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

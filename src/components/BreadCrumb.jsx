import React from "react";

const Breadcrumb = ({ title = "Page Title", paths = [] }) => {
  return (
    <div
      className="breadcumb-wrapper"
      style={{
        backgroundImage:
          "url(src/assets/img/BreadCrumb/about-bg-agriculture.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container z-index-common">
        <div className="breadcumb-content">
          <h1
            className="breadcumb-title"
            style={{
              color: "#fff",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
            }}
          >
            {title}
          </h1>
        </div>
        <div className="breadcumb-menu-wrap">
          <ul className="breadcumb-menu" style={{ color: "#fff", textShadow: "1px 1px 3px rgba(0, 0, 0, 0.6)" }}>
            <li><a href="/" style={{ color: "#fff", textShadow: "1px 1px 2px rgba(0, 0, 0, 0.6)" }}>Home</a></li>
            {paths.map((path, index) => (
              <li key={index}>
                {path.link ? (
                  <a
                    href={path.link}
                    style={{ color: "#fff", textShadow: "1px 1px 2px rgba(0, 0, 0, 0.6)" }}
                  >
                    {path.name}
                  </a>
                ) : (
                  <span style={{ color: "#fff", textShadow: "1px 1px 2px rgba(0, 0, 0, 0.6)" }}>
                    {path.name}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;

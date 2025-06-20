// src/components/Breadcrumb.jsx
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
          <h1 className="breadcumb-title">{title}</h1>
        </div>
        <div className="breadcumb-menu-wrap">
          <ul className="breadcumb-menu">
            <li><a href="/">Home</a></li>
            {paths.map((path, index) => (
              <li key={index}>
                {path.link ? (
                  <a href={path.link}>{path.name}</a>
                ) : (
                  path.name
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

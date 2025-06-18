import React from 'react'
import ComingSoon from '../../components/ComingSoon'
import ProductList from '../../components/ProductList'

const Batteries = () => {
  return (
    <>
          <div
        className="breadcumb-wrapper"
        style={{
          backgroundImage:
            'url(https://kisaankendra.in/wp-content/uploads/2024/05/battery-cover-image.jpg)',
        }}
      >
        <div className="container z-index-common">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Batteries</h1>
          </div>
          <div className="breadcumb-menu-wrap">
            <ul className="breadcumb-menu">
              <li><a href="/">Home</a></li>
              <li>Batteries</li>
            </ul>
          </div>
        </div>
      </div>
      <ProductList categoryId={35} />
    </>
  )
}

export default Batteries

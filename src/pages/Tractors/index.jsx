import React from 'react'
import ProductList from '../../components/ProductList'

const Tractors = () => {
  return (
    <>
       <div
      className="breadcumb-wrapper"
      style={{
        backgroundImage:
          'url(https://kisaankendra.in/wp-content/uploads/2024/05/31_to_40_hp_xp_plus_265_di.webp)',
      }}
    >
      <div className="container z-index-common">
        <div className="breadcumb-content">
          <h1 className="breadcumb-title">Tractors</h1>
        </div>
        <div className="breadcumb-menu-wrap">
          <ul className="breadcumb-menu">
            <li><a href="/">Home</a></li>
            <li>Tractors</li>
          </ul>
        </div>
      </div>
    </div> 
    <ProductList/>


    </>
  )
}

export default Tractors

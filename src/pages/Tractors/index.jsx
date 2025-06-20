import React from 'react'
import ProductList from '../../components/ProductList'
import Breadcrumb from '../../components/BreadCrumb'

const Tractors = () => {
  return (
    <>
    <Breadcrumb title='Tractors' paths={[{name:"tractors"}]}/>
    <ProductList/>


    </>
  )
}

export default Tractors

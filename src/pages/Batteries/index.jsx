import React from 'react'
import ComingSoon from '../../components/ComingSoon'
import ProductList from '../../components/ProductList'
import Breadcrumb from '../../components/BreadCrumb'

const Batteries = () => {
  return (
    <>
        <Breadcrumb title='Batteryies' paths={[{name:"batteryies"}]}/>
      <ProductList categoryId={35} />
    </>
  )
}

export default Batteries

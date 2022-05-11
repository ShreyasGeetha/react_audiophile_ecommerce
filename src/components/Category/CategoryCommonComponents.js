import React from 'react'
import Footer from '../HomePage/Footer/Footer'
import CompanyMotto from '../HomePage/ProductDisplay/CompanyMotto/CompanyMotto'
import ProductDisplay from '../HomePage/ProductDisplay/ProductsDisplay'

const CategoryCommonComponents = () => {
  return (
    <>
      <ProductDisplay />
      <CompanyMotto />
      <Footer />
    </>
  )
}

export default CategoryCommonComponents
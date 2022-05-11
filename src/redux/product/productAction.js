import axios from "axios"
import { FETCH_PRODUCT_FAILURE, FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS } from "./productTypes"

export const fetchproductsRequest = () => {
  return {
    type: FETCH_PRODUCT_REQUEST    
  }
}

export const fetchproductsSuccess = (products) => {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    payload: products
  }
}

export const fetchproductsFailure = (error) => {
  return {
    type: FETCH_PRODUCT_FAILURE,
    payload: error
  }
}

// using thunk it will return another function
export const fetchProducts = (product) => {
  // we can do async api calls here
  // console.log('we need the product ', product)
  return (dispatch) => {
    dispatch(fetchproductsRequest())
    axios.get('/data.json')
      .then(response => {
        const products = response.data.filter(items => (items.category == product))
        // console.log('product', products)
        dispatch(fetchproductsSuccess(products))      
      })
      .catch(error => {
        const errorMsg = error.message        
        dispatch(fetchproductsFailure(errorMsg)) 
    })
  }
}

export const fetchProduct = ({productId}) => {
  // we can do async api calls here
  return (dispatch) => {
    dispatch(fetchproductsRequest())
    axios.get('/data.json')
      .then(response => {
        const product = response.data.filter(value => value.id == productId)
        console.log("we are printing this", product)
        dispatch(fetchproductsSuccess(product))      
      })
      .catch(error => {
        const errorMsg = error.message        
        dispatch(fetchproductsFailure(errorMsg)) 
    })
  }
}